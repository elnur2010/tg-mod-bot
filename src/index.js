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

// ============================================================
// HEALTH CHECK SERVER
// ============================================================

function startHealthServer() {
  const port = Number(process.env.PORT) || 3000;

  const server = http.createServer((req, res) => {
    if (req.url === "/health" || req.url === "/") {
      res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
      });

      res.end(
        JSON.stringify({
          status: "ok",
          service: "telegram-bot",
          time: new Date().toISOString(),
        })
      );

      return;
    }

    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
    });

    res.end("Not Found");
  });

  server.listen(port, "0.0.0.0", () => {
    console.log(`✅ Health-check server ${port}-portda ishga tushdi`);
  });

  return server;
}

// ============================================================
// WATCHDOG
// ============================================================

let lastSuccessfulTelegramCheck = Date.now();
let lastSuccessfulDatabaseCheck = Date.now();

async function checkTelegram() {
  await Promise.race([
    bot.api.getMe(),
    new Promise((_, reject) => {
      setTimeout(
        () => reject(new Error("Telegram API timeout")),
        10000
      );
    }),
  ]);

  lastSuccessfulTelegramCheck = Date.now();
}

async function checkDatabase() {
  await Promise.race([
    prisma.$queryRaw`SELECT 1`,
    new Promise((_, reject) => {
      setTimeout(
        () => reject(new Error("PostgreSQL timeout")),
        10000
      );
    }),
  ]);

  lastSuccessfulDatabaseCheck = Date.now();
}

function startWatchdog() {
  setInterval(async () => {
    try {
      await checkTelegram();
      console.log("💚 Watchdog: Telegram API OK");

      await checkDatabase();
      console.log("💚 Watchdog: PostgreSQL OK");
    } catch (error) {
      console.error(
        "🚨 WATCHDOG XATOSI:",
        error?.message ?? error
      );

      console.error(
        `Telegram oxirgi OK: ${new Date(
          lastSuccessfulTelegramCheck
        ).toISOString()}`
      );

      console.error(
        `PostgreSQL oxirgi OK: ${new Date(
          lastSuccessfulDatabaseCheck
        ).toISOString()}`
      );

      /*
       * Render process 1 chiqishi bilan servisni qayta ishga
       * tushiradi. PM2 kerak emas.
       */
      process.exit(1);
    }
  }, 2 * 60 * 1000);
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  console.log("🚀 Bot ishga tushmoqda...");

  // ----------------------------------------------------------
  // DATABASE
  // ----------------------------------------------------------

  await prisma.$connect();

  console.log("✅ PostgreSQL bazasiga ulanildi");

  // ----------------------------------------------------------
  // RENDER HEALTH SERVER
  // ----------------------------------------------------------

  startHealthServer();

  // ----------------------------------------------------------
  // MIDDLEWARE
  // ----------------------------------------------------------

  bot.use(
    sequentialize((ctx) => {
      const chat = ctx.chat?.id?.toString();
      const user = ctx.from?.id?.toString();

      return [chat, user].filter(Boolean);
    })
  );

  bot.use(ensureGroup);

  bot.use(resolveLanguage);

  bot.use(requiredChannelGate);

  bot.use(moderationFilters);

  bot.use(trackUser);

  bot.use(globalChannelGate);

  // ----------------------------------------------------------
  // COMMANDS / EVENTS / HANDLERS
  // ----------------------------------------------------------

  registerCommands(bot);
  registerEvents(bot);
  registerHandlers(bot);

  // ----------------------------------------------------------
  // ERROR HANDLER
  // ----------------------------------------------------------

  bot.catch((err) => {
    const grammyError = err?.error;

    const isNotMemberError =
      grammyError?.error_code === 403 &&
      typeof grammyError?.description === "string" &&
      /not a member|chat not found|bot was kicked|blocked/i.test(
        grammyError.description
      );

    if (isNotMemberError) {
      const chatId = err.ctx?.chat?.id;

      if (chatId) {
        deactivateGroup(chatId).catch(() => {});

        console.warn(
          `⚠️ Guruh (${chatId}) faolsiz qilindi — bot bu yerda a'zo emas.`
        );
      } else {
        console.warn(
          "⚠️ Bot a'zo bo'lmagan chatga javob yozishga urindi."
        );
      }

      return;
    }

    console.error("❌ Bot xatoligi:", err);
  });

  // ----------------------------------------------------------
  // BOT INIT
  // ----------------------------------------------------------

  await bot.init();

  console.log(
    `🤖 Bot ma'lumotlari olindi: @${bot.botInfo.username}`
  );

  // ----------------------------------------------------------
  // WEBHOOKNI O'CHIRISH
  // ----------------------------------------------------------

  await bot.api.deleteWebhook({
    drop_pending_updates: true,
  });

  console.log("✅ Telegram webhook tozalandi");

  // ----------------------------------------------------------
  // RUNNER
  // ----------------------------------------------------------

  console.log("🔄 Telegram polling ishga tushmoqda...");

  const runner = run(bot);

  console.log(
    `✅ Bot ishga tushdi: @${bot.botInfo.username}`
  );

  // ----------------------------------------------------------
  // RUNNER ERROR MONITOR
  // ----------------------------------------------------------

  runner.task().catch((error) => {
    console.error(
      "🚨 Telegram polling/runner to'xtadi:",
      error
    );

    /*
     * Polling to'xtasa Render processni qayta ishga tushiradi.
     */
    process.exit(1);
  });

  // ----------------------------------------------------------
  // WATCHDOG
  // ----------------------------------------------------------

  startWatchdog();

  // Dastlabki tekshiruvlarni darhol bajarish
  try {
    await checkTelegram();
    console.log("💚 Initial Telegram API check: OK");
  } catch (error) {
    console.error(
      "🚨 Initial Telegram check failed:",
      error?.message ?? error
    );
  }

  try {
    await checkDatabase();
    console.log("💚 Initial PostgreSQL check: OK");
  } catch (error) {
    console.error(
      "🚨 Initial PostgreSQL check failed:",
      error?.message ?? error
    );
  }

  // ----------------------------------------------------------
  // SHUTDOWN
  // ----------------------------------------------------------

  const stop = async (signal) => {
    console.log(
      `\n🛑 ${signal} qabul qilindi, bot to'xtatilmoqda...`
    );

    try {
      if (runner.isRunning()) {
        await runner.stop();
      }
    } catch (error) {
      console.error(
        "Runner to'xtatishda xato:",
        error?.message ?? error
      );
    }

    try {
      await prisma.$disconnect();
      console.log("✅ PostgreSQL ulanishi yopildi");
    } catch (error) {
      console.error(
        "PostgreSQL disconnect xatosi:",
        error?.message ?? error
      );
    }

    process.exit(0);
  };

  process.once("SIGINT", () => stop("SIGINT"));
  process.once("SIGTERM", () => stop("SIGTERM"));

  // ----------------------------------------------------------
  // PROCESS LEVEL ERRORS
  // ----------------------------------------------------------

  process.on("unhandledRejection", (reason) => {
    console.error(
      "🚨 UNHANDLED REJECTION:",
      reason
    );
  });

  process.on("uncaughtException", (error) => {
    console.error(
      "🚨 UNCAUGHT EXCEPTION:",
      error
    );

    /*
     * Noma'lum process xatosida Render qayta ishga tushiradi.
     */
    process.exit(1);
  });
}

// ============================================================
// START
// ============================================================

main().catch(async (error) => {
  console.error(
    "🚨 Botni ishga tushirishda xatolik:",
    error
  );

  try {
    await prisma.$disconnect();
  } catch {}

  process.exit(1);
});