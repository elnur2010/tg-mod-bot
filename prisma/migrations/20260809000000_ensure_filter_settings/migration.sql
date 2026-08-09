-- BUG #2 FIX: Ensure all groups have FilterSettings initialized
-- Problem: FilterSettings could be NULL causing filter handlers to crash
-- Solution: Create FilterSettings for all groups that don't have one

INSERT INTO "filter_settings" (
  "id",
  "groupId",
  "linkFilter",
  "badWordsFilter",
  "apkFilter",
  "zipFilter",
  "exeFilter",
  "rarFilter",
  "xapkFilter",
  "apkmFilter",
  "floodProtection",
  "antiSpam",
  "antiForward",
  "emojiSpamFilter",
  "capsFilter",
  "adFilter",
  "requiredChannelsEnabled",
  "emojiLimit",
  "capsPercentLimit",
  "captchaEnabled",
  "antiRaidEnabled",
  "antiRaidThreshold",
  "antiRaidWindowSeconds",
  "slowModeSeconds",
  "stickerSpamFilter",
  "duplicateSpamFilter",
  "deleteServiceMessages",
  "updatedAt"
)
SELECT
  concat('fs_', gen_random_uuid()::text),
  g."id",
  false,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  true,
  false,
  false,
  5,
  70,
  false,
  false,
  10,
  30,
  0,
  false,
  false,
  false,
  CURRENT_TIMESTAMP
FROM "groups" g
WHERE NOT EXISTS (
  SELECT 1 FROM "filter_settings" fs WHERE fs."groupId" = g."id"
);
