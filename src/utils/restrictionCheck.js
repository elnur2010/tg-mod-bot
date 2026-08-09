/**
 * BUG FIX: avval `restrictChatMember` chaqiruvi xato (exception)
 * tashlamasa, kod buni "muvaffaqiyatli ochildi" deb hisoblardi.
 * Amalda Telegram ba'zan so'rovni istisnosiz qabul qiladi-yu, lekin
 * foydalanuvchini haqiqatda "restricted" holatida qoldiradi — masalan:
 *  - Botning "A'zolarni cheklash" admin huquqi vaqtincha olib
 *    qo'yilgan/pasaytirilgan bo'lsa,
 *  - Yoki so'rov Telegram serverida to'liq qo'llanmagan bo'lsa
 *    (tarmoq/keshlash kechikishi).
 * Shu sabab har doim `restrictChatMember`dan keyin `getChatMember`
 * orqali HAQIQIY holatni tekshirish kerak — aks holda foydalanuvchiga
 * yolg'on "muvaffaqiyat" xabari ko'rsatiladi (aynan shu bug sodir bo'lgan).
 *
 * @param {import("grammy").ChatMember} member - `getChatMember` natijasi
 * @returns {boolean} foydalanuvchi haqiqatda yoza olamikan
 */
export function canActuallySendMessages(member) {
  if (!member) return false;

  // "member" / "administrator" / "creator" — cheklov umuman yo'q
  if (member.status === "member" || member.status === "administrator" || member.status === "creator") {
    return true;
  }

  // "restricted" — faqat can_send_messages aniq true bo'lsagina yoza oladi
  if (member.status === "restricted") {
    return member.can_send_messages === true;
  }

  // "left" / "kicked" — guruhda umuman yo'q, yoza olmaydi
  return false;
}

/**
 * `restrictChatMember`ni chaqiradi va DARHOL `getChatMember` orqali
 * natijani tekshiradi. Faqat ikkalasi ham muvaffaqiyatli bo'lsa `true`
 * qaytaradi — aks holda (istisno yoki hali ham cheklangan holat) `false`.
 *
 * MUHIM: grammY'da `ctx.restrictChatMember(user_id, permissions, other)`
 * imzosida ikkinchi argument BEVOSITA ChatPermissions obyekti bo'lishi
 * kerak (masalan `{ can_send_messages: true, ... }`), `permissions`
 * kaliti ichiga o'ralmagan holda! `use_independent_chat_permissions`
 * kabi ixtiyoriy parametrlar esa ALOHIDA, uchinchi ("other") argumentda
 * bo'ladi. Avval bu ikkalasi bitta obyektga aralashtirilgan edi —
 * natijada Telegram haqiqiy ruxsat maydonlarini (can_send_messages va h.k.)
 * umuman ko'rmay, standart bo'yicha HAMMASINI `false` (cheklangan) deb
 * qabul qilardi — xato tashlamasdan!
 */
export async function restrictAndVerify(ctx, userId, permissions) {
  try {
    await ctx.restrictChatMember(userId, permissions, {
      use_independent_chat_permissions: true,
    });
  } catch {
    return false;
  }

  try {
    const member = await ctx.getChatMember(userId);
    return canActuallySendMessages(member);
  } catch {
    // Holatni tasdiqlab bo'lmadi — xavfsiz tomonga (muvaffaqiyatsiz)
    // og'ish afzalroq, aks holda foydalanuvchiga yolg'on xabar beramiz.
    return false;
  }
}
