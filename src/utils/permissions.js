import { isAdminCached } from "../services/adminCacheService.js";

/**
 * Xabar yuborgan foydalanuvchi shu guruhda admin yoki egasi ekanligini
 * tekshiradi. Adminlar barcha filtrlardan ozod qilinadi.
 *
 * Performance: har bir oddiy xabar uchun Telegram API'ga so'rov
 * yubormaslik uchun avval xotiradagi kesh va `Admin` jadvali
 * tekshiriladi (`adminCacheService.js`); jonli API so'rovi faqat
 * ikkalasida ham ma'lumot topilmagan holatda, oxirgi chora sifatida
 * ishlatiladi.
 */
export async function isChatAdmin(ctx) {
  if (!ctx.from || !ctx.chat) return false;

  return isAdminCached(ctx.chat.id, ctx.from.id, async () => {
    try {
      const member = await ctx.getChatMember(ctx.from.id);
      return member.status === "administrator" || member.status === "creator";
    } catch {
      return false;
    }
  });
}
