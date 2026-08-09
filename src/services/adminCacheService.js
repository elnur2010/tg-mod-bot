import prisma from "../database/prisma.js";
import { getGroupByTelegramId } from "./groupService.js";

/**
 * Admin holatini xotirada keshlash uchun.
 *
 * Muammo: avval `isChatAdmin(ctx)` HAR BIR oddiy xabar uchun Telegram
 * API'ga (`ctx.getChatMember`) so'rov yuborardi — faol, minglab a'zoli
 * guruhda bu Telegram'ning rate-limit'iga tez uchrash xavfini oshiradi.
 *
 * Yechim: ikki bosqichli kesh —
 *  1) Xotiradagi TTL kesh (eng tez, I/O yo'q) — bir necha daqiqa davomida
 *     bir xil foydalanuvchi uchun qayta so'rov yubormaydi.
 *  2) `Admin` jadvali (bazada) — `chat_member` hodisasi orqali doimiy
 *     yangilanadi, shuning uchun Telegram API'ga umuman murojaat
 *     qilmasdan admin ekanligini aniqlash mumkin.
 *
 * Faqat ikkalasi ham "bilmayman" desa (masalan, bot hali chat_member
 * hodisasini ko'rmagan eski guruh), oxirgi chora sifatida jonli
 * Telegram API so'rovi ishlatiladi — va natija darhol ikkala keshga
 * ham yozib qo'yiladi (o'z-o'zini davolovchi kesh).
 */

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 daqiqa
const memoryCache = new Map(); // key: `${chatId}:${userId}` -> { isAdmin, expiresAt }

function cacheKey(chatId, userId) {
  return `${chatId}:${userId}`;
}

function getFromMemory(chatId, userId) {
  const entry = memoryCache.get(cacheKey(chatId, userId));
  if (!entry) return undefined;
  if (entry.expiresAt < Date.now()) {
    memoryCache.delete(cacheKey(chatId, userId));
    return undefined;
  }
  return entry.isAdmin;
}

function setInMemory(chatId, userId, isAdmin) {
  memoryCache.set(cacheKey(chatId, userId), {
    isAdmin,
    expiresAt: Date.now() + CACHE_TTL_MS,
  });
}

/** Xotiradagi keshni tozalaydi (masalan, foydalanuvchi guruhdan chiqarilganda) */
export function invalidateMemoryCache(chatId, userId) {
  memoryCache.delete(cacheKey(chatId, userId));
}

/**
 * `chat_member` hodisasi kelganda `Admin` jadvalini va xotiradagi
 * keshni yangilaydi. Faqat admin/egalar jadvalda saqlanadi — oddiy
 * a'zolar uchun yozuv yaratilmaydi (jadval kichik va tez qoladi).
 */
export async function syncAdminStatus(chatTelegramId, userId, status) {
  const isAdmin = status === "administrator" || status === "creator";
  setInMemory(chatTelegramId, userId, isAdmin);

  const group = await getGroupByTelegramId(chatTelegramId);
  if (!group) return;

  if (isAdmin) {
    await prisma.admin.upsert({
      where: { groupId_userId: { groupId: group.id, userId: BigInt(userId) } },
      update: { isOwner: status === "creator" },
      create: { groupId: group.id, userId: BigInt(userId), isOwner: status === "creator" },
    });
  } else {
    await prisma.admin
      .delete({
        where: { groupId_userId: { groupId: group.id, userId: BigInt(userId) } },
      })
      .catch(() => {
        // Yozuv umuman bo'lmasligi mumkin — bu normal holat
      });
  }
}

/**
 * Foydalanuvchi shu guruhda admin/ega ekanligini aniqlaydi.
 * Tartib: xotiradagi kesh -> `Admin` jadvali -> (oxirgi chora) jonli API.
 *
 * `liveCheckFn` — cache-miss holatida chaqiriladigan, `ctx.getChatMember`
 * orqali natija qaytaradigan funksiya (dependency injection — testlash
 * va permissions.js bilan bog'liqlikni kamaytirish uchun).
 */
export async function isAdminCached(chatTelegramId, userId, liveCheckFn) {
  const fromMemory = getFromMemory(chatTelegramId, userId);
  if (fromMemory !== undefined) return fromMemory;

  const group = await getGroupByTelegramId(chatTelegramId);
  if (group) {
    const dbAdmin = await prisma.admin.findUnique({
      where: { groupId_userId: { groupId: group.id, userId: BigInt(userId) } },
    });
    if (dbAdmin) {
      setInMemory(chatTelegramId, userId, true);
      return true;
    }
  }

  // Bazada topilmadi — bu "admin emas" yoki "hali sinxronlanmagan" degani
  // bo'lishi mumkin. Aniqlik uchun jonli API'ga murojaat qilamiz va
  // natijani ikkala keshga ham yozamiz (keyingi so'rovlar tezlashadi).
  const isAdmin = await liveCheckFn();
  setInMemory(chatTelegramId, userId, isAdmin);
  if (group) {
    if (isAdmin) {
      await prisma.admin
        .upsert({
          where: { groupId_userId: { groupId: group.id, userId: BigInt(userId) } },
          update: {},
          create: { groupId: group.id, userId: BigInt(userId), isOwner: false },
        })
        .catch(() => {});
    }
  }
  return isAdmin;
}
