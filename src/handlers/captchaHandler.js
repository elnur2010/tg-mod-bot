import { FULL_PERMISSIONS } from "../commands/moderationCommands.js";
import { clearPendingCaptcha } from "../state/captchaState.js";
import { restrictAndVerify } from "../utils/restrictionCheck.js";
import { escapeMarkdown } from "../utils/markdown.js";
import { t } from "../i18n/index.js";

export function registerCaptchaHandlers(bot) {
  bot.callbackQuery(/^captcha:verify:(\d+)$/, async (ctx) => {
    const targetUserId = ctx.match[1];
    const lang = ctx.lang || "uz";

    if (String(ctx.from.id) !== targetUserId) {
      await ctx.answerCallbackQuery({
        text: t(lang, "captcha_not_for_you"),
        show_alert: true,
      });
      return;
    }

    const groupKey = String(ctx.chat.id);

    // BUG FIX: avval faqat "restrictChatMember xato tashladimi" tekshirilardi,
    // shuning uchun ba'zan foydalanuvchiga yolg'on "tasdiqlandi" xabari
    // ko'rsatilib, aslida u hali ham yoza olmasdi. Endi `getChatMember`
    // orqali NATIJA haqiqatan qo'llanganini ham tekshiramiz.
    const unrestricted = await restrictAndVerify(ctx, Number(targetUserId), FULL_PERMISSIONS);

    if (!unrestricted) {
      await ctx.answerCallbackQuery({
        text: t(lang, "captcha_verify_failed"),
        show_alert: true,
      });
      return;
    }

    clearPendingCaptcha(groupKey, targetUserId);

    await ctx.answerCallbackQuery({ text: t(lang, "captcha_verified") });
    try {
      await ctx.deleteMessage();
    } catch {
      // Xabar allaqachon o'chirilgan bo'lishi mumkin
    }

    // Tasdiqlangandan keyin foydalanuvchi ismi bilan alohida
    // "guruhga xush kelibsiz" xabari yuboriladi.
    const mention = `[${escapeMarkdown(ctx.from.first_name || t(lang, "default_user_name"))}](tg://user?id=${ctx.from.id})`;
    try {
      await ctx.reply(t(lang, "captcha_welcome_after_verify", { mention }), {
        parse_mode: "Markdown",
      });
    } catch {
      // Guruhda yozish cheklangan bo'lishi mumkin — e'tiborsiz qoldiramiz
    }
  });
}
