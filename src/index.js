import http from "node:http";
import { run, sequentialize } from "@grammyjs/runner";
import { bot } from "./config/bot.js";
import prisma from "./database/prisma.js";
import { ensureGroup } from "./middlewares/ensureGroup.js";
import { deactivateGroup } from "./services/groupService.js";
import { resolveLanguage } from "./middlewares/resolveLanguage.js";
import { requiredChannelGate } from "./middlewares/requiredChannelGate.js";
import { trackUser } from "./middlewares/trackUser.js";
import { globalChannelGate } from "./middlewares/globalChannelGate.js";
import { moderationFilters } from "./filters/index.js";
import { registerCommands } from "./commands/index.js";
import { registerEvents } from "./events/index.js";
import { registerHandlers } from "./handlers/index.js";

/**
 * Render (va shunga o'xshash hosting'lar) "Web Service" turidagi
 * xizmatlar uchun biror portni tinglashni talab qiladi, aks holda
 * deploy "No open ports detected" bilan vaqt tugab, xizmatni
 * to'xtatadi — natijada bot umuman ishlamay qoladi.
 * Bot o'zi HTTP so'rovlarini qabul qilmasa ham, shu minimal server
 * faqat health-check uchun ochiq turadi.
 */
function startHealthServer() {
  const port = process.env.PORT || 3000;
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bot ishlamoqda ✅");
  });
  server.listen(port, () => {
    console.log(`✅ Health-check server ${port}-portda ishga tushdi`);
  });
  return server;
}

async function main() {
  // Bazaga ulanishni tekshirish
  await prisma.$connect();
  console.log("✅ PostgreSQL bazasiga ulanildi");

  // Render/Railway kabi platformalarda portni tinglash majburiy
  startHealthServer();

  // Yangilanishlarni bir xil chat/foydalanuvchi bo'yicha ketma-ket
  // ishlashni kafolatlaydi — bu quyidagi concurrent runner bilan
  // birga ishlatilganda majburiy (aks holda bir xil guruh/foydalanuvchi
  // uchun race condition yuzaga kelishi mumkin)
  bot.use(sequentialize((ctx) => {
    const chat = ctx.chat?.id?.toString();
    const user = ctx.from?.id?.toString();
    return [chat, user].filter(Boolean);
  }));

  // O'rta dastur: har bir guruh xabari uchun guruh bazada
  // mavjudligini ta'minlaydi
  bot.use(ensureGroup);

  // Har bir yangilanish uchun haqiqiy tanlangan tilni (ctx.lang) bazadan aniqlaydi
  bot.use(resolveLanguage);

  // Majburiy kanal tekshiruvi (guruh ichida): a'zo bo'lmagan foydalanuvchi yozolmaydi
  bot.use(requiredChannelGate);

  // Moderatsiya filtrlari: havola, fayl, yomon so'z, CAPS,
  // emoji spami, flood/spam himoyasi
  bot.use(moderationFilters);

  // Shaxsiy chatda botdan foydalangan har bir kishini bazaga yozadi
  bot.use(trackUser);

  // Majburiy kanal tekshiruvi (shaxsiy chatda, bot egasi belgilagan kanallar)
  bot.use(globalChannelGate);

  // Buyruqlar, hodisalar va callback tugma handlerlarini ulash
  registerCommands(bot);
  registerEvents(bot);
  registerHandlers(bot);

  bot.catch((err) => {
    const grammyError = err?.error;
    const isNotMemberError =
      grammyError?.error_code === 403 &&
      typeof grammyError?.description === "string" &&
      /not a member|chat not found|bot was kicked|blocked/i.test(grammyError.description);

    if (isNotMemberError) {
      // Bot allaqachon guruhdan chiqarilgan/kikklangan, lekin bazada hali
      // faol deb turibdi (masalan, bot o'chiq turgan paytda kikklangan va
      // "my_chat_member" hodisasini eshita olmagan). Katta stack-trace
      // chop etish o'rniga guruhni faolsiz qilib qo'yamiz — shunda bu
      // guruh uchun keyingi urinishlar ham to'xtaydi.
      const chatId = err.ctx?.chat?.id;
      if (chatId) {
        deactivateGroup(chatId).catch(() => {});
        console.warn(`⚠️  Guruh (${chatId}) faolsiz qilindi — bot bu yerda a'zo emas.`);
      } else {
        console.warn("⚠️  Bot a'zo bo'lmagan chatga javob yozishga urindi.");
      }
      return;
    }

    console.error("Bot xatoligi:", err);
  });

  // MUHIM: oldingi `bot.start()` yangilanishlarni KETMA-KET (bittadan)
  // qayta ishlaydi. Agar biror handler ichida bazaga so'rov "osilib
  // qolsa" (masalan DB provayder uzoq vaqt foydalanilmagan ulanishni
  // jimgina yopib qo'ysa — Neon/Supabase kabi bepul PostgreSQL'larda
  // odatiy holat), o'sha bitta yangilanish abadiy kutib turadi va undan
  // keyingi HAMMA /start va boshqa buyruqlar navbatda muzlab qoladi —
  // process esa (va health-check server ham) tirik bo'lib qolaveradi,
  // shuning uchun Render "ishlab turibdi" deb ko'rsataveradi.
  //
  // grammY runner esa yangilanishlarni PARALLEL (bir vaqtda bir nechtasi)
  // qayta ishlaydi, shu sabab bitta "osilib qolgan" so'rov qolgan
  // foydalanuvchilarni endi bloklamaydi.
  await bot.init();
  await bot.api.deleteWebhook({ drop_pending_updates: true });
  console.log(`✅ Bot ishga tushdi: @${bot.botInfo.username}`);

  const runner = run(bot);

  const stop = async (signal) => {
    console.log(`\n${signal} qabul qilindi, bot to'xtatilmoqda...`);
    if (runner.isRunning()) await runner.stop();
    await prisma.$disconnect();
    process.exit(0);
  };
  process.once("SIGINT", () => stop("SIGINT"));
  process.once("SIGTERM", () => stop("SIGTERM"));
}

main().catch(async (err) => {
  console.error("Botni ishga tushirishda xatolik:", err);
  await prisma.$disconnect();
  process.exit(1);
});