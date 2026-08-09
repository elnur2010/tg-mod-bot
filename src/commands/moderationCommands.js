import prisma from "../database/prisma.js";
import { isChatAdmin } from "../utils/permissions.js";
import { getTargetUser, getReasonText, getDurationAndReason } from "../utils/targetUser.js";
import { formatDuration } from "../utils/duration.js";
import { getGroupWithSettings } from "../services/groupService.js";
import { addWarningAndMaybeBan, banUser, bumpDailyStat } from "../services/moderationService.js";
import { sendModerationLog } from "../services/logService.js";
import { restrictAndVerify } from "../utils/restrictionCheck.js";
import { t } from "../i18n/index.js";

export const FULL_PERMISSIONS = {
  can_send_messages: true,
  can_send_audios: true,
  can_send_documents: true,
  can_send_photos: true,
  can_send_videos: true,
  can_send_video_notes: true,
  can_send_voice_notes: true,
  can_send_polls: true,
  can_send_other_messages: true,
  can_add_web_page_previews: true,
};

/**
 * Admin buyruqlari uchun umumiy tekshiruv: guruh ekanligi, admin
 * huquqi va nishon (target) foydalanuvchi mavjudligi.
 * Muvaffaqiyatsiz bo'lsa null qaytaradi va sababni foydalanuvchiga aytadi.
 */
async function requireAdminAndTarget(ctx) {
  if (!ctx.chat || (ctx.chat.type !== "group" && ctx.chat.type !== "supergroup")) {
    await ctx.reply(t(ctx.lang || "uz", "error_group_only"));
    return null;
  }

  const group = await getGroupWithSettings(ctx.chat.id);
  const lang = group?.language || "uz";

  const admin = await isChatAdmin(ctx);
  if (!admin) {
    await ctx.reply(t(lang, "error_admin_only"));
    return null;
  }

  const target = getTargetUser(ctx);
  if (!target) {
    await ctx.reply(t(lang, "error_target_required"), { parse_mode: "Markdown" });
    return null;
  }

  if (!group) {
    await ctx.reply(t(lang, "error_group_not_found"));
    return null;
  }

  return { target, group, lang };
}

function mentionOf(target) {
  return `[${target.name}](tg://user?id=${target.id})`;
}

// -------------------------- /ogohlantirish --------------------------
export function warnCommand(bot) {
  bot.command("ogohlantirish", async (ctx) => {
    const data = await requireAdminAndTarget(ctx);
    if (!data) return;
    const { target, group, lang } = data;
    const reason = getReasonText(ctx);

    const result = await addWarningAndMaybeBan(ctx, group, target.id, reason, ctx.from.id);

    if (result.banned) {
      const message = t(lang, "warn_banned").replace("{username}", mentionOf(target));
      await ctx.reply(message, { parse_mode: "Markdown" });
    } else {
      const message = t(lang, "warn_message")
        .replace("{username}", mentionOf(target))
        .replace("{reason}", reason)
        .replace("{warns}", `${result.totalWarnings}/${result.maxWarnings}`);
      await ctx.reply(message, { parse_mode: "Markdown" });
    }
  });
}

// ------------------------ /ogohlantirmaslik ------------------------
export function unwarnCommand(bot) {
  bot.command("ogohlantirmaslik", async (ctx) => {
    const data = await requireAdminAndTarget(ctx);
    if (!data) return;
    const { target, group, lang } = data;

    const lastWarning = await prisma.warning.findFirst({
      where: { groupId: group.id, userId: BigInt(target.id) },
      orderBy: { createdAt: "desc" },
    });

    if (!lastWarning) {
      await ctx.reply(t(lang, "unwarn_no_warns"));
      return;
    }

    await prisma.warning.delete({ where: { id: lastWarning.id } });

    const remaining = await prisma.warning.count({
      where: { groupId: group.id, userId: BigInt(target.id) },
    });

    const message = t(lang, "unwarn_message")
      .replace("{username}", mentionOf(target))
      .replace("{warns}", String(remaining));

    await ctx.reply(message, { parse_mode: "Markdown" });
  });
}

// -------------------------- /ovozsiz (mute) --------------------------
// Ixtiyoriy muddat qabul qiladi: /ovozsiz 2soat sabab (yoki reply orqali)
export function muteCommand(bot) {
  bot.command("ovozsiz", async (ctx) => {
    const data = await requireAdminAndTarget(ctx);
    if (!data) return;
    const { target, group, lang } = data;
    const { durationMs, reason } = getDurationAndReason(ctx);

    const untilDate = durationMs ? Math.floor((Date.now() + durationMs) / 1000) : undefined;

    try {
      // BUG FIX: "permissions" endi to'g'ridan-to'g'ri 2-argument sifatida
      // yuboriladi (grammY/Bot API talabiga mos), oldingi kodda u boshqa
      // ixtiyoriy parametrlar bilan bitta obyektga aralashtirilgan edi —
      // natijada Telegram haqiqiy cheklovni umuman qo'llamasdi.
      await ctx.restrictChatMember(
        target.id,
        { can_send_messages: false },
        {
          use_independent_chat_permissions: true,
          ...(untilDate ? { until_date: untilDate } : {}),
        },
      );
    } catch {
      await ctx.reply(t(lang, "error_restrict_failed"));
      return;
    }

    const mutedUntil = durationMs ? new Date(Date.now() + durationMs) : null;

    await prisma.mutedUser.create({
      data: {
        groupId: group.id,
        userId: BigInt(target.id),
        reason,
        isActive: true,
        mutedUntil,
        adminId: BigInt(ctx.from.id),
      },
    });
    await bumpDailyStat(group.id, "mutesGiven");

    const durationText = durationMs ? ` (${formatDuration(durationMs)}ga)` : " (doimiy)";
    const message = t(lang, "mute_message")
      .replace("{username}", mentionOf(target))
      .replace("{duration}", durationText)
      .replace("{reason}", reason);

    await ctx.reply(message, { parse_mode: "Markdown" });

    await sendModerationLog(
      ctx,
      group,
      `🔇 *Mute*${durationText}\nFoydalanuvchi: \`${target.id}\`\nSabab: ${reason}`,
    );
  });
}

// ------------------------ /ovoz_yoqish (unmute) ------------------------
export function unmuteCommand(bot) {
  bot.command("ovoz_yoqish", async (ctx) => {
    const data = await requireAdminAndTarget(ctx);
    if (!data) return;
    const { target, group, lang } = data;

    // BUG FIX: avval faqat "restrictChatMember xato tashladimi" tekshirilardi.
    // Telegram ba'zan so'rovni istisnosiz qabul qilib, lekin foydalanuvchini
    // haqiqatda "restricted" holatida qoldirishi mumkin (masalan, botning
    // "A'zolarni cheklash" huquqi kutilganidan farqli holatda bo'lsa).
    // Shu sabab `getChatMember` orqali natija HAQIQATDA qo'llanganini
    // tekshiramiz — aks holda adminga yolg'on "muvaffaqiyat" xabari ketardi.
    const unrestricted = await restrictAndVerify(ctx, target.id, FULL_PERMISSIONS);
    if (!unrestricted) {
      await ctx.reply(t(lang, "error_unmute_failed"));
      return;
    }

    await prisma.mutedUser.updateMany({
      where: { groupId: group.id, userId: BigInt(target.id), isActive: true },
      data: { isActive: false },
    });

    const message = t(lang, "unmute_message").replace("{username}", mentionOf(target));
    await ctx.reply(message, { parse_mode: "Markdown" });

    await sendModerationLog(
      ctx,
      group,
      `🔊 *Unmute*\nFoydalanuvchi: \`${target.id}\``,
    );
  });
}

// -------------------------- /taqiqlash (ban) --------------------------
// Ixtiyoriy muddat qabul qiladi: /taqiqlash 1kun sabab (yoki reply orqali)
export function banCommand(bot) {
  bot.command("taqiqlash", async (ctx) => {
    const data = await requireAdminAndTarget(ctx);
    if (!data) return;
    const { target, group, lang } = data;
    const { durationMs, reason } = getDurationAndReason(ctx);

    await banUser(ctx, group, target.id, reason, durationMs, ctx.from.id);

    const durationText = durationMs ? ` (${formatDuration(durationMs)}ga)` : "";
    const message = t(lang, "ban_message")
      .replace("{username}", mentionOf(target))
      .replace("{duration}", durationText)
      .replace("{reason}", reason);

    await ctx.reply(message, { parse_mode: "Markdown" });
  });
}

// ---------------------- /taqiq_bekor (unban) ----------------------
export function unbanCommand(bot) {
  bot.command("taqiq_bekor", async (ctx) => {
    const data = await requireAdminAndTarget(ctx);
    if (!data) return;
    const { target, group, lang } = data;

    try {
      await ctx.unbanChatMember(target.id, { only_if_banned: true });
    } catch {
      await ctx.reply(t(lang, "error_unban_failed"));
      return;
    }

    await prisma.bannedUser
      .delete({ where: { groupId_userId: { groupId: group.id, userId: BigInt(target.id) } } })
      .catch(() => null);

    const message = t(lang, "unban_message").replace("{username}", mentionOf(target));
    await ctx.reply(message, { parse_mode: "Markdown" });
  });
}

// -------------------------- /tepish (kick) --------------------------
export function kickCommand(bot) {
  bot.command("tepish", async (ctx) => {
    const data = await requireAdminAndTarget(ctx);
    if (!data) return;
    const { target, lang } = data;
    const reason = getReasonText(ctx);

    try {
      // Ban + darhol unban = guruhdan chiqarish (lekin qayta kirishi mumkin)
      await ctx.banChatMember(target.id);
      await ctx.unbanChatMember(target.id);
    } catch {
      await ctx.reply(t(lang, "error_kick_failed"));
      return;
    }

    const message = t(lang, "kick_message")
      .replace("{username}", mentionOf(target))
      .replace("{reason}", reason);

    await ctx.reply(message, { parse_mode: "Markdown" });

    const { group } = data;
    await sendModerationLog(
      ctx,
      group,
      `👢 *Tepish*\nFoydalanuvchi: \`${target.id}\`\nSabab: ${reason}`,
    );
  });
}
