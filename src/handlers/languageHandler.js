import { isChatAdmin } from "../utils/permissions.js";
import { getGroupByTelegramId } from "../services/groupService.js";
import { setGroupLanguage, setBotUserLanguage, getBotUserLanguage } from "../services/languageService.js";
import { t, isSupportedLanguage } from "../i18n/index.js";
import { languageKeyboard } from "../commands/languageCommand.js";
import { buildGroupStartText, sendStartMenuText } from "../commands/startCommand.js";
import { mainSettingsKeyboard, privateSettingsKeyboard } from "../keyboards/settingsKeyboard.js";

export function registerLanguageHandlers(bot) {
  // ---- Guruh tili ----
  // callback data: lang:group:<uz|ru|en>:<start|settings>
  // oxiridagi <start|settings> — "orqaga" bosilganda qayerga qaytish
  // kerakligini bildiradi (/til dan kelingan bo'lsa "start", sozlamalar
  // menyusidan kelingan bo'lsa "settings")
  bot.callbackQuery(/^lang:group:(uz|ru|en):(start|settings)$/, async (ctx) => {
    const fallbackLang = ctx.lang || "uz";
    try {
      const lang = ctx.match[1];
      const origin = ctx.match[2];
      if (!isSupportedLanguage(lang)) {
        await ctx.answerCallbackQuery({ text: t(fallbackLang, "language_invalid"), show_alert: true });
        return;
      }

      const admin = await isChatAdmin(ctx);
      if (!admin) {
        await ctx.answerCallbackQuery({ text: t(lang, "error_admin_only"), show_alert: true });
        return;
      }

      const group = await getGroupByTelegramId(ctx.chat.id);
      if (!group) {
        await ctx.answerCallbackQuery({ text: t(lang, "error_group_not_found"), show_alert: true });
        return;
      }

      await setGroupLanguage(group.telegramId, lang);

      try {
        await ctx.editMessageText(t(lang, "language_set"), {
          reply_markup: languageKeyboard(lang, "lang:group:", origin),
        });
      } catch (error) {
        // Agar xabar o'zgarmagansa (bir xil til tanlansa) — ignore
        if (!error?.description?.includes("message is not modified")) {
          throw error;
        }
      }
      await ctx.answerCallbackQuery();
    } catch (error) {
      console.error("Guruh tili handler xatosi:", error);
      await ctx.answerCallbackQuery({ text: t(fallbackLang, "error_unexpected"), show_alert: true });
    }
  });

  // ---- Shaxsiy chat tili ----
  // callback data: lang:user:<uz|ru|en>:<start|settings>
  bot.callbackQuery(/^lang:user:(uz|ru|en):(start|settings)$/, async (ctx) => {
    const fallbackLang = ctx.lang || "uz";
    try {
      const lang = ctx.match[1];
      const origin = ctx.match[2];
      if (!isSupportedLanguage(lang)) {
        await ctx.answerCallbackQuery({ text: t(fallbackLang, "language_invalid"), show_alert: true });
        return;
      }

      await setBotUserLanguage(ctx.from.id, lang);

      // Yangilanib saqlandi, confirm xabari
      const newLang = await getBotUserLanguage(ctx.from.id);

      try {
        await ctx.editMessageText(t(newLang, "language_set"), {
          reply_markup: languageKeyboard(newLang, "lang:user:", origin),
        });
      } catch (error) {
        // Agar xabar o'zgarmagansa (bir xil til tanlansa) — ignore
        if (!error?.description?.includes("message is not modified")) {
          throw error;
        }
      }
      await ctx.answerCallbackQuery();
    } catch (error) {
      console.error("Shaxsiy chat tili handler xatosi:", error);
      await ctx.answerCallbackQuery({ text: t(fallbackLang, "error_unexpected"), show_alert: true });
    }
  });

  // ---- "Orqaga" — guruh ----
  // origin="start"    -> /start (guruh) xabariga qaytadi
  // origin="settings" -> sozlamalar asosiy menyusiga qaytadi
  bot.callbackQuery(/^lang:group:back:(start|settings)$/, async (ctx) => {
    const fallbackLang = ctx.lang || "uz";
    try {
      const origin = ctx.match[1];

      if (origin === "settings") {
        const admin = await isChatAdmin(ctx);
        if (!admin) {
          await ctx.answerCallbackQuery({ text: t(fallbackLang, "settings_admin_only"), show_alert: true });
          return;
        }
        const group = await getGroupByTelegramId(ctx.chat.id);
        const lang = group?.language || fallbackLang;
        try {
          await ctx.editMessageText(t(lang, "settings_title"), {
            parse_mode: "Markdown",
            reply_markup: mainSettingsKeyboard(lang),
          });
        } catch (error) {
          if (!error?.description?.includes("message is not modified")) throw error;
        }
        await ctx.answerCallbackQuery();
        return;
      }

      try {
        await ctx.editMessageText(await buildGroupStartText(ctx));
      } catch (error) {
        // Agar xabar o'zgarmagansa — ignore
        if (!error?.description?.includes("message is not modified")) {
          throw error;
        }
      }
      await ctx.answerCallbackQuery();
    } catch (error) {
      console.error("Orqaga (guruh) handler xatosi:", error);
      await ctx.answerCallbackQuery({ text: t(fallbackLang, "error_unexpected"), show_alert: true });
    }
  });

  // ---- "Orqaga" — shaxsiy chat ----
  // origin="start"    -> /start (shaxsiy) xabariga qaytadi
  // origin="settings" -> shaxsiy sozlamalar menyusiga qaytadi
  bot.callbackQuery(/^lang:user:back:(start|settings)$/, async (ctx) => {
    const fallbackLang = ctx.lang || "uz";
    try {
      const origin = ctx.match[1];

      if (origin === "settings") {
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
        return;
      }

      const { text, options } = await sendStartMenuText(ctx);
      try {
        await ctx.editMessageText(text, options);
      } catch (error) {
        // Agar xabar o'zgarmagansa — ignore
        if (!error?.description?.includes("message is not modified")) {
          throw error;
        }
      }
      await ctx.answerCallbackQuery();
    } catch (error) {
      console.error("Orqaga (shaxsiy) handler xatosi:", error);
      await ctx.answerCallbackQuery({ text: t(fallbackLang, "error_unexpected"), show_alert: true });
    }
  });
}