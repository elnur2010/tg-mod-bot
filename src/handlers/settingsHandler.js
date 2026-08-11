import prisma from "../database/prisma.js";
import { isChatAdmin } from "../utils/permissions.js";
import { getGroupWithSettings, getGroupByTelegramId } from "../services/groupService.js";
import { mainSettingsKeyboard, privateSettingsKeyboard } from "../keyboards/settingsKeyboard.js";
import { moderationKeyboard, TOGGLEABLE_FILTER_FIELDS } from "../keyboards/moderationKeyboard.js";
import { languageKeyboard } from "../commands/languageCommand.js";
import { sendStartMenuText } from "../commands/startCommand.js";
import { getBotUserLanguage } from "../services/languageService.js";
import { t } from "../i18n/index.js";

/** Tugma bosgan foydalanuvchi admin ekanligini tekshiradi */
async function requireAdminCallback(ctx, lang = "uz") {
  const admin = await isChatAdmin(ctx);
  if (!admin) {
    await ctx.answerCallbackQuery({ text: t(lang, "settings_admin_only"), show_alert: true });
    return false;
  }
  return true;
}

export function registerSettingsHandlers(bot) {
  // Asosiy menyuga qaytish
  bot.callbackQuery("settings:main", async (ctx) => {
    const group = await getGroupByTelegramId(ctx.chat.id);
    const lang = group?.language || "uz";
    
    if (!(await requireAdminCallback(ctx, lang))) return;

    await ctx.editMessageText(t(lang, "settings_title"), {
      parse_mode: "Markdown",
      reply_markup: mainSettingsKeyboard(lang),
    });
    await ctx.answerCallbackQuery();
  });

  // Moderatsiya bo'limi
  bot.callbackQuery("settings:moderation", async (ctx) => {
    const group = await getGroupWithSettings(ctx.chat.id);
    const lang = group?.language || "uz";
    
    if (!(await requireAdminCallback(ctx, lang))) return;

    // BUG #2 FIX: FilterSettings yo'q bo'lsa avtomatik yaratish
    let filterSettings = group?.filterSettings;
    if (!filterSettings && group) {
      filterSettings = await prisma.filterSettings.create({
        data: { groupId: group.id }
      });
    }

    if (!filterSettings) {
      await ctx.answerCallbackQuery({ text: t(lang, "settings_error_not_found"), show_alert: true });
      return;
    }

    await ctx.editMessageText(t(lang, "settings_moderation_title"), {
      parse_mode: "Markdown",
      reply_markup: moderationKeyboard(filterSettings, lang),
    });
    await ctx.answerCallbackQuery();
  });

  // Har qanday filtrni ON/OFF qilish
  bot.callbackQuery(/^filter:toggle:(.+)$/, async (ctx) => {
    const group = await getGroupWithSettings(ctx.chat.id);
    const lang = group?.language || "uz";
    
    if (!(await requireAdminCallback(ctx, lang))) return;

    const field = ctx.match[1];
    if (!(field in TOGGLEABLE_FILTER_FIELDS)) {
      await ctx.answerCallbackQuery({ text: t(lang, "settings_filter_unknown"), show_alert: true });
      return;
    }

    if (!group) {
      await ctx.answerCallbackQuery({ text: t(lang, "settings_error_not_found"), show_alert: true });
      return;
    }

    // FilterSettings hali yaratilmagan bo'lsa ham (masalan eski ma'lumot
    // yoki race condition), update() P2025 bilan yiqilmasligi uchun
    // upsert() ishlatamiz — dastlabki holat standart qiymatlar bo'ladi.
    const currentValue = Boolean(group.filterSettings?.[field]);
    const updatedSettings = await prisma.filterSettings.upsert({
      where: { groupId: group.id },
      update: { [field]: !currentValue },
      create: { groupId: group.id, [field]: !currentValue },
    });

    await ctx.editMessageReplyMarkup({ reply_markup: moderationKeyboard(updatedSettings, lang) });
    await ctx.answerCallbackQuery({ text: !currentValue ? t(lang, "settings_toggle_on") : t(lang, "settings_toggle_off") });
  });

  // Til bo'limi (guruh) — /til buyrug'i bilan bir xil klaviatura,
  // faqat "orqaga" bosilganda /start xabariga emas, shu sozlamalar
  // menyusiga qaytadi
  bot.callbackQuery("settings:language", async (ctx) => {
    const group = await getGroupByTelegramId(ctx.chat.id);
    const lang = group?.language || "uz";

    if (!(await requireAdminCallback(ctx, lang))) return;

    await ctx.editMessageText(t(lang, "language_prompt"), {
      reply_markup: languageKeyboard(lang, "lang:group:", "settings"),
    });
    await ctx.answerCallbackQuery();
  });

  // Menyuni yopish
  bot.callbackQuery("settings:close", async (ctx) => {
    const group = await getGroupByTelegramId(ctx.chat.id);
    const lang = group?.language || "uz";
    
    if (!(await requireAdminCallback(ctx, lang))) return;
    await ctx.deleteMessage().catch(() => {});
    await ctx.answerCallbackQuery();
  });

  // ===== Shaxsiy chat sozlamalari (/start dagi "⚙️ Sozlamalar" tugmasi) =====

  // Shaxsiy sozlamalar menyusini ochish
  bot.callbackQuery("privatesettings:main", async (ctx) => {
    const lang = await getBotUserLanguage(ctx.from.id);
    try {
      await ctx.editMessageText(t(lang, "private_settings_title"), {
        parse_mode: "Markdown",
        reply_markup: privateSettingsKeyboard(lang),
      });
    } catch (error) {
      if (!error?.description?.includes("message is not modified")) throw error;
    }
    await ctx.answerCallbackQuery();
  });

  // Shaxsiy sozlamalar > Til
  bot.callbackQuery("privatesettings:language", async (ctx) => {
    const lang = await getBotUserLanguage(ctx.from.id);
    await ctx.editMessageText(t(lang, "language_prompt"), {
      reply_markup: languageKeyboard(lang, "lang:user:", "settings"),
    });
    await ctx.answerCallbackQuery();
  });

  // Shaxsiy sozlamalar menyusidan /start xabariga qaytish
  bot.callbackQuery("privatesettings:back", async (ctx) => {
    const { text, options } = await sendStartMenuText(ctx);
    try {
      await ctx.editMessageText(text, options);
    } catch (error) {
      if (!error?.description?.includes("message is not modified")) throw error;
    }
    await ctx.answerCallbackQuery();
  });
}