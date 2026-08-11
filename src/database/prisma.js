import { PrismaClient } from "@prisma/client";

// Butun ilova bo'ylab bitta Prisma Client nusxasi ishlatiladi
// (har bir modulda qayta yaratilmasligi uchun)
const prisma = new PrismaClient();

// Ba'zi bepul PostgreSQL provayderlar (Neon, Supabase va h.k.) uzoq
// vaqt (odatda 5 daqiqadan ko'p) foydalanilmagan ulanishni jimgina
// yopib qo'yadi. Shu sababli, agar bot bir necha daqiqa xabar
// olmasa, keyingi foydalanuvchi so'rovi "o'lik" ulanishga tushib
// qolishi va sekundlab (yoki abadiy) osilib qolishi mumkin.
// Har 3 daqiqada engil "SELECT 1" yuborib, ulanishni doim tirik
// ushlab turamiz.
setInterval(() => {
  prisma.$queryRaw`SELECT 1`.catch((err) => {
    console.warn("⚠️  DB keepalive so'rovi muvaffaqiyatsiz:", err?.message ?? err);
  });
}, 3 * 60 * 1000);

export default prisma;