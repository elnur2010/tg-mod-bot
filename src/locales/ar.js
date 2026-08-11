export default {
  // ===== LANGUAGE SYSTEM =====
  language_prompt: "🌐 اختر اللغة:",
  language_current: "اللغة الحالية: 🇸🇦 العربية",
  language_set: "✅ تم ضبط اللغة على 🇸🇦 العربية.",
  language_name: "العربية",
  language_back: "⬅️ رجوع",

  // ===== START COMMAND =====
  start_welcome: "👋 مرحبًا، {{displayName}}!\n\n🛡️ *مرحبًا بك في بوت TOZAA GURUH*.\n\nأنا بوت مشرف يحمي مجموعات تيليجرام تلقائيًا.\n\n👇 اضغط الزر أدناه لإضافة البوت إلى مجموعتك.",
  start_group_response: "✅ أنا جاهز للعمل في هذه المجموعة!",
  start_add_to_group: "➕ إضافة إلى المجموعة",
  start_settings_button: "⚙️ الإعدادات",

  // ===== HELP COMMAND =====
  help_title: "🤖 *المساعدة*\n\n",
  help_public_commands: "*الأوامر العامة:*\n",
  help_start: "`/start` — تشغيل البوت\n",
  help_help: "`/yordam` — هذه الرسالة\n",
  help_admin: "`/admin` — لوحة مالك البوت\n",
  help_rules: "`/qoidalar` — عرض قواعد المجموعة\n",
  help_report: "`/hisobot` — الإبلاغ بالرد على رسالة\n",
  help_stats: "`/statistika` — إحصائيات اليوم\n",
  help_members: "`/azolar` — عدد الأعضاء الذين انضموا وغادروا خلال يوم/أسبوع/شهر\n",
  help_language: "`/til` — اختيار لغة ردود البوت\n\n",
  help_user_management: "*للمشرفين: إدارة المستخدمين* (تُرسل بالرد على رسالة):\n",
  help_warn: "`/ogohlantirish` — إعطاء تحذير\n",
  help_unwarn: "`/ogohlantirmaslik` — إزالة آخر تحذير\n",
  help_mute: "`/ovozsiz [المدة]` — كتم الصوت، مثال: `/ovozsiz 2soat`\n",
  help_unmute: "`/ovoz_yoqish` — إعادة تفعيل الصوت\n",
  help_ban: "`/taqiqlash [المدة]` — الحظر، مثال: `/taqiqlash 1kun`\n",
  help_unban: "`/taqiq_bekor` — إلغاء الحظر\n",
  help_kick: "`/tepish` — الطرد من المجموعة\n",
  help_whois: "`/kim` — عرض ملف المستخدم\n",
  help_delete: "`/ochirish` — حذف رسالة بالرد عليها\n\n",
  help_lists: "*للمشرفين: القوائم* (تُرسل بالرد على رسالة):\n",
  help_whitelist_add: "`/royxat_qoshish` — إضافة إلى القائمة البيضاء\n",
  help_whitelist_remove: "`/royxatdan_chiqarish` — إزالة من القائمة البيضاء\n",
  help_blacklist_add: "`/qora_royxat_qoshish` — إضافة إلى القائمة السوداء\n",
  help_blacklist_remove: "`/qora_royxat_ochirish` — إزالة من القائمة السوداء\n\n",
  help_badwords: "*للمشرفين: الكلمات السيئة:*\n",
  help_badword_add: "`/yomon_soz_qoshish <كلمة>` — إضافة إلى القائمة\n",
  help_badword_remove: "`/yomon_soz_ochirish <كلمة>` — إزالة من القائمة\n\n",
  help_channels: "*للمشرفين: القواعد والقنوات:*\n",
  help_set_rules: "`/qoidalarni_ornatish <نص>` — تحديث القواعد\n",
  help_add_channel: "`/kanal_qoshish @username` — إضافة قناة إلزامية\n",
  help_log_channel: "`/log_kanal @username` — تعيين قناة لسجلات الإشراف\n\n",
  help_advanced: "الإعدادات المتقدمة تُفتح عبر `/sozlamalar`.",

  // ===== SETTINGS COMMAND =====
  settings_only_groups: "هذا الأمر يعمل فقط في المجموعات.",
  settings_admin_only: "⛔ يمكن للمشرفين فقط فتح الإعدادات.",
  settings_title: "⚙️ *إعدادات البوت*\n\nاختر القسم المطلوب:",
  private_settings_title: "⚙️ *الإعدادات*\n\nاختر القسم المطلوب:",

  // ===== ERROR MESSAGES =====
  error_admin_only: "⛔ هذا الأمر للمشرفين فقط.",
  error_not_admin: "⛔ أنت لست مشرفًا.",
  error_reply_required: "اختر رسالة للرد عليها.",
  error_user_not_found: "❌ المستخدم غير موجود.",
  error_invalid_duration: "❌ صيغة المدة غير صحيحة. مثال: 2ساعة، 30دقيقة، 1يوم",
  error_invalid_format: "❌ الصيغة غير صحيحة.",
  error_group_only: "هذا الأمر يعمل فقط في المجموعات.",
  error_target_required: "حدد المستخدم: أرسل الأمر بالرد على رسالته، أو أضف رقم معرّفه (ID) في النهاية.\\nمثال: `/taqiqlash 123456789 السبب`",
  error_group_not_found: "المجموعة غير موجودة، يرجى المحاولة مرة أخرى بعد قليل.",
  error_restrict_failed: "تعذر تقييد المستخدم (تحقق من صلاحيات المشرف الممنوحة للبوت).",
  error_unmute_failed: "تعذر إعادة تفعيل الصوت (تحقق من صلاحيات المشرف الممنوحة للبوت).",
  error_unban_failed: "تعذر إلغاء الحظر.",
  error_kick_failed: "تعذر طرد المستخدم (تحقق من صلاحيات المشرف الممنوحة للبوت).",

  // ===== SUCCESS MESSAGES =====
  success_saved: "✅ تم الحفظ.",
  success_updated: "✅ تم التحديث.",
  success_deleted: "✅ تم الحذف.",

  // ===== KEYBOARD BUTTONS =====
  keyboard_moderation: "🛡 الإشراف",
  keyboard_users: "👥 المستخدمون",
  keyboard_reports: "🚨 البلاغات",
  keyboard_channels: "📢 القناة الإلزامية",
  keyboard_rules: "📋 القواعد",
  keyboard_stats: "📊 الإحصائيات",
  keyboard_language: "🌐 اللغة",
  keyboard_advanced: "🔧 متقدم",
  keyboard_close: "❌ إغلاق",

  // ===== MODERATION COMMANDS =====
  warn_title: "⚠️ *تم تحذير المستخدم*",
  warn_message: "⚠️ تم تحذير {username}.\n\nالسبب: {reason}\nالتحذيرات: {warns}",
  warn_banned: "🚫 تم حظر {username} لتجاوزه حد التحذيرات.",
  warn_user_dm: "⚠️ تم تحذيرك في مجموعة {group}.\n\nالسبب: {reason}",
  warn_error: "❌ تعذر تحذير المستخدم.",

  unwarn_title: "✅ *تمت إزالة التحذير*",
  unwarn_message: "✅ تمت إزالة تحذير واحد من {username}.\nالتحذيرات المتبقية: {warns}",
  unwarn_no_warns: "لا توجد تحذيرات لهذا المستخدم.",

  ban_title: "🚫 *تم حظر المستخدم*",
  ban_message: "🚫 تم حظر {username} من المجموعة{duration}.\nالسبب: {reason}",
  ban_message_timed: "🚫 تم حظر @{username} لمدة {duration}.\n\nالسبب: {reason}",
  ban_user_dm: "🚫 تم حظرك من مجموعة {group}.\n\nالسبب: {reason}",

  unban_title: "✅ *تم إلغاء الحظر*",
  unban_message: "✅ تم إلغاء حظر {username}.",
  unban_not_banned: "هذا المستخدم غير محظور.",

  mute_title: "🔇 *تم كتم صوت المستخدم*",
  mute_message: "🔇 تم كتم صوت {username}{duration}.\nالسبب: {reason}",
  mute_user_dm: "🔇 تم كتم صوتك في مجموعة {group} لمدة {duration}.\n\nالسبب: {reason}",

  unmute_title: "🔊 *تم إلغاء كتم الصوت*",
  unmute_message: "🔊 تم إعادة تفعيل صوت {username}.",
  unmute_not_muted: "❌ صوت هذا المستخدم غير مكتوم.",

  kick_title: "👉 *تم طرد المستخدم من المجموعة*",
  kick_message: "👢 تم طرد {username} من المجموعة (يمكنه الانضمام مجددًا).\nالسبب: {reason}",
  kick_user_dm: "👉 تم طردك من مجموعة {group}.\n\nالسبب: {reason}",

  // ===== RULES COMMAND =====
  rules_title: "📋 *قواعد المجموعة*\n\n",
  rules_no_rules: "❌ لم يتم تعيين قواعد لهذه المجموعة.",
  rules_set_success: "✅ تم حفظ القواعد.",
  rules_set_error: "❌ حدث خطأ أثناء حفظ القواعد.",

  // ===== REPORT COMMAND =====
  report_title: "🚨 *بلاغ*",
  report_success: "✅ تم إرسال بلاغك إلى المشرفين.",
  report_message: "🚨 *بلاغ جديد*\n\nالمجموعة: {group}\nالمستخدم: @{username}\nالبلاغ: {reason}",
  report_no_reply: "❌ اختر رسالة للرد عليها.",
  report_self: "❌ لا يمكنك الإبلاغ عن نفسك.",

  // ===== STATS COMMAND =====
  stats_title: "📊 *إحصائيات اليوم*",
  stats_messages_today: "📨 رسائل اليوم: {count}",
  stats_members_joined: "➕ المنضمون: {count}",
  stats_members_left: "➖ المغادرون: {count}",
  stats_warns: "⚠️ التحذيرات: {count}",
  stats_bans: "🚫 الحظر: {count}",
  stats_mutes: "🔇 الكتم: {count}",
  stats_deleted_messages: "🗑 الرسائل المحذوفة: {count}",
  stats_spam_detected: "🕵️ السبام المكتشف: {count}",
  stats_reports_received: "🚨 البلاغات: {count}",
  stats_links_deleted: "🔗 الروابط المحذوفة: {count}",
  stats_files_deleted: "📁 الملفات المحذوفة: {count}",

  // ===== MEMBER STATS =====
  member_stats_title: "👤 *إحصائيات المستخدم*",
  member_stats_user: "المستخدم: @{username}",
  member_stats_messages: "الرسائل: {count}",
  member_stats_warns: "التحذيرات: {count}",
  member_stats_joined: "تاريخ الانضمام: {date}",

  // ===== MEMBERS ACTIVITY (/azolar) =====
  members_stats_title: "👥 *إحصائيات الأعضاء*",
  members_period_day: "خلال يوم",
  members_period_week: "خلال أسبوع",
  members_period_month: "خلال شهر",
  members_stats_line: "*{label}:* ➕ انضم {joins} / ➖ غادر {leaves}",

  // ===== FILTERS =====
  filter_bad_words: "🚫 تم اكتشاف كلمة سيئة.",
  filter_bad_words_deleted: "🚫 تم حذف الرسالة بسبب كلمة سيئة.",
  filter_spam_link: "🔗 تم اكتشاف رابط سبام.",
  filter_spam_link_deleted: "🔗 تم حذف الرسالة بسبب رابط سبام.",
  filter_flood: "💬 تم اكتشاف فيضان رسائل.",
  filter_flood_deleted: "💬 تم حذف الرسالة بسبب فيضان الرسائل.",
  filter_caps: "🔤 تجاوزت نسبة الأحرف الكبيرة الحد المسموح.",
  filter_caps_deleted: "🔤 تم حذف الرسالة بسبب الأحرف الكبيرة.",
  filter_emoji: "😂 عدد كبير جدًا من الرموز التعبيرية.",
  filter_emoji_deleted: "😂 تم حذف الرسالة بسبب الرموز التعبيرية.",
  filter_forward: "↩️ إعادة توجيه الرسائل ممنوعة.",
  filter_forward_deleted: "↩️ تم حذف الرسالة المُعاد توجيهها.",

  // ===== CHANNELS =====
  channels_title: "📢 *القنوات الإلزامية*",
  channels_add_success: "✅ تمت إضافة القناة.",
  channels_remove_success: "✅ تمت إزالة القناة.",
  channels_list: "📢 القنوات:\n{list}",
  channels_no_channels: "❌ لم يتم تحديد قنوات إلزامية.",
  channels_join_required: "❌ يرجى الاشتراك في القنوات التالية قبل الانضمام إلى المجموعة:\n{channels}",

  // ===== ADMIN PANEL =====
  admin_title: "🔧 *لوحة الإدارة*",
  admin_unauthorized: "❌ ليس لديك صلاحية فتح لوحة الإدارة.",
  admin_back: "⬅️ رجوع",

  // ===== WHOIS COMMAND =====
  whois_title: "👤 *معلومات المستخدم*",
  whois_user_id: "المعرّف: {id}",
  whois_username: "المستخدم: @{username}",
  whois_first_name: "الاسم: {first_name}",
  whois_last_name: "اسم العائلة: {last_name}",
  whois_status: "الحالة: {status}",
  whois_warns: "التحذيرات: {warns}",
  whois_banned: "الحظر: {banned}",
  whois_muted: "الكتم: {muted}",
  whois_joined: "تاريخ الانضمام: {date}",
  whois_user_word: "المستخدم",
  whois_reply_required: "أرسل `/kim` بالرد على رسالة المستخدم.",
  whois_profile_title: "👤 الملف الشخصي لـ {user}",
  whois_status_label: "الحالة: {status}",
  whois_status_banned: "🚫 محظور",
  whois_status_muted: "🔇 مكتوم الصوت",
  whois_status_normal: "🟢 حالة طبيعية",
  whois_warnings_line: "⚠️ التحذيرات: {count}",
  whois_deleted_line: "🗑 الرسائل المحذوفة: {count}",
  whois_joined_line: "📅 أول انضمام إلى المجموعة: {date}",
  whois_unknown_date: "غير معروف",

  // ===== DELETE COMMAND =====
  delete_success: "✅ تم حذف الرسالة.",
  delete_error: "❌ تعذر حذف الرسالة (ربما تم حذفها بالفعل أو قديمة جدًا).",
  delete_no_reply: "أرسل `/ochirish` بالرد على الرسالة التي تريد حذفها.",

  // ===== SETTINGS HANDLER =====
  settings_moderation: "🛡 الإشراف",
  settings_filters: "🔒 الفلاتر",
  settings_automod: "🤖 الإشراف التلقائي",
  settings_captcha: "✅ التحقق (Captcha)",
  settings_bad_words: "❌ الكلمات السيئة",
  settings_links: "🔗 الروابط",
  settings_flood: "💬 فيضان الرسائل",
  settings_caps: "🔤 الأحرف الكبيرة",

  // ===== USER MANAGEMENT =====
  users_list: "👥 *المستخدمون*",
  users_whitelist: "⚪ القائمة البيضاء",
  users_blacklist: "⚫ القائمة السوداء",
  users_add_whitelist: "✅ تمت الإضافة إلى القائمة البيضاء.",
  users_remove_whitelist: "❌ تمت الإزالة من القائمة البيضاء.",
  users_add_blacklist: "🚫 تمت الإضافة إلى القائمة السوداء.",
  users_remove_blacklist: "⚫ تمت الإزالة من القائمة السوداء.",

  // ===== ADVANCED SETTINGS =====
  advanced_title: "🔧 *الإعدادات المتقدمة*",
  advanced_raid_protection: "🛡 الحماية من الهجمات الجماعية",
  advanced_captcha_required: "✅ التحقق إلزامي",
  advanced_global_channels: "📡 القنوات العامة",
  advanced_save_logs: "📝 حفظ السجلات",

  // ===== LIST COMMANDS =====
  whitelist_add_success: "تمت الإضافة إلى القائمة البيضاء.",
  whitelist_remove_success: "تمت الإزالة من القائمة البيضاء.",
  blacklist_add_success: "تمت الإضافة إلى القائمة السوداء وتم الحظر.",
  blacklist_add_reason: "أُضيف بواسطة المشرف",
  blacklist_remove_success: "تمت الإزالة من القائمة السوداء.",
  badword_add_usage: "أدخل الكلمة.\nمثال: `/yomon_soz_qoshish كلمة`",
  badword_add_success: "تمت إضافة {word} إلى قائمة الكلمات السيئة.",
  badword_remove_usage: "أدخل الكلمة.\nمثال: `/yomon_soz_ochirish كلمة`",
  badword_remove_success: "تمت إزالة {word} من قائمة الكلمات السيئة.",

  // ===== CHANNEL COMMANDS =====
  channel_add_usage: "أدخل معرّف القناة.\nمثال: `/kanal_qoshish @my_channel`\n\nملاحظة: يجب أن يكون البوت مشرفًا في تلك القناة.",
  channel_not_found: "القناة غير موجودة. تحقق من صحة المعرّف ومن أن البوت مشرف في تلك القناة.",
  channel_add_success: "✅ تمت إضافة القناة: {title}",

  // ===== LOG CHANNEL COMMAND =====
  log_channel_usage:
    "أدخل معرّف القناة.\nمثال: `/log_kanal @my_log_channel`\nللإلغاء: `/log_kanal off`\n\nملاحظة: يجب أن يكون البوت مشرفًا في تلك القناة.",
  log_channel_removed: "✅ تمت إزالة قناة السجل.",
  log_channel_set: "✅ تم تعيين قناة السجل: {{title}}",

  // ===== ERROR MESSAGES =====
  error_owner_only: "⛔ هذا الأمر لمالك البوت فقط.",
  error_reply_user: "❌ أرسله بالرد على رسالة المستخدم.",
  admin_choose_section: "اختر أحد الأقسام التالية:",

  // ===== HANDLERS =====
  captcha_not_for_you: "❗ هذا التحقق ليس موجهًا لك.",
  captcha_verified: "✅ تم التحقق! يمكنك الآن الكتابة.",
  captcha_verify_failed: "⚠️ تم التحقق منك، لكن تعذر على البوت إلغاء كتم صوتك — امنح البوت صلاحية \"تقييد الأعضاء\" في المجموعة وحاول مرة أخرى.",
  channels_not_joined: "❗ لم تنضم بعد إلى جميع القنوات.",
  thank_you: "✅ شكرًا لك!",
  rules_title: "القواعد الحالية:",
  rules_change_instruction: "لتغيير القواعد:\n`/qoidalarni_ornatish <النص الجديد>`",
  list_empty: "القائمة فارغة.",
  users_description: "⚪ *القائمة البيضاء* — المستخدمون المعفون من جميع الفلاتر.\n⚫ *القائمة السوداء* — المستخدمون الذين سيُحظرون فور محاولتهم الكتابة في المجموعة.\n\nللإضافة، أرسل الأمر بالرد على رسالة المستخدم:\n`/royxat_qoshish` — إلى القائمة البيضاء\n`/royxatdan_chiqarish` — من القائمة البيضاء\n`/qora_royxat_qoshish` — إلى القائمة السوداء\n`/qora_royxat_ochirish` — من القائمة السوداء",

  // ===== SETTINGS HANDLERS =====
  settings_error_not_found: "خطأ: الإعدادات غير موجودة.",
  settings_moderation_title: "🛡 *الإشراف*\n\nاضغط لتفعيل/تعطيل الفلتر:",
  settings_filter_unknown: "إعداد غير معروف.",
  settings_toggle_on: "✅ مُفعّل",
  settings_toggle_off: "⛔ مُعطّل",

  // ===== CHANNELS HANDLERS =====
  channels_empty: "📋 لم تتم إضافة قنوات إلزامية بعد.",
  channels_list_title: "📋 *قائمة القنوات* (اضغط للحذف):",

  // ===== USERS HANDLERS =====
  users_whitelist_title: "⚪ *القائمة البيضاء*",
  users_blacklist_title: "⚫ *القائمة السوداء*",
  users_whitelist_empty: "⚪ القائمة البيضاء فارغة.",
  users_blacklist_empty: "⚫ القائمة السوداء فارغة.",

  // ===== REPORTS HANDLERS =====
  reports_title: "🚨 *البلاغات*\n\n",
  reports_limit_info: "الحد الحالي: *{limit}* بلاغ\n\nالبلاغات المعلّقة: *{pending}*\n\n",
  reports_set_limit_title: "🔢 اختر حد البلاغات:",
  reports_limit_set: "✅ تم تعيين الحد إلى {limit}.",
  reports_no_pending: "❌ تم إلغاء البلاغات، ولم يُتخذ أي إجراء.",

  // ===== RULES HANDLERS =====
  rules_set_title: "📋 القواعد الحالية:",

  // ===== ADMIN HANDLERS =====
  admin_menu: "👑 *لوحة الإدارة*\n\nاختر القسم المطلوب:",
  admin_menu_closed: "تم إغلاق اللوحة.",
  admin_stats_title: "📊 *إحصائيات البوت (عامة)*",
  admin_broadcast_title: "📢 *إرسال رسالة إلى جميع المجموعات*",
  admin_broadcast_success: "✅ تم إرسال الرسالة إلى {target}.\n\n📨 تم الإرسال: *{sent}*\n❌ فشل الإرسال: *{failed}*",
  admin_channels_title: "📡 *القنوات العامة*",
  admin_channels_empty: "لا توجد أي قناة عامة.",
  admin_close_panel: "❌ إغلاق اللوحة",

  // ===== ADVANCED HANDLERS =====
  advanced_warns_title: "⚠️ بعد كم تحذيرًا يتم الحظر التلقائي؟",
  advanced_warns_set: "✅ تم التعيين إلى {value}.",
  advanced_flood_title: "🚫 بعد كم رسالة يُعتبر ذلك سبام؟",
  advanced_flood_set: "✅ تم التعيين إلى {value}.",
  advanced_flood_time_title: "⏱ ضمن نافذة زمنية مدتها كم ثانية يتم الحساب؟",
  advanced_flood_time_set: "✅ تم التعيين إلى {value} ثانية.",
  advanced_emoji_title: "😊 ما الحد الأقصى للرموز التعبيرية في رسالة واحدة؟",
  advanced_emoji_set: "✅ تم التعيين إلى {value}.",
  advanced_caps_title: "🔠 عند أي نسبة من الأحرف الكبيرة يتم الحذف؟",
  advanced_caps_set: "✅ تم التعيين إلى {value}%.",
  advanced_slow_mode_title: "🐢 كم ثانية على الأقل يجب الانتظار بين الرسائل؟ (0 — معطّل)",
  advanced_slow_mode_set: "✅ تم التعيين إلى {value} ثانية.",

  // ===== STATS HANDLERS =====
  stats_loading: "⏳ جارٍ التحميل...",

  // ===== KEYBOARDS =====
  keyboard_settings: "⚙️ الإعدادات",
  keyboard_moderation_filter: "🛡 الإشراف",
  keyboard_users_list: "👥 المستخدمون",
  keyboard_channels_list: "📡 القنوات",
  keyboard_rules_view: "📋 القواعد",
  keyboard_stats_view: "📊 الإحصائيات",
  keyboard_advanced_settings: "🔧 متقدم",
  keyboard_admin_panel: "👑 الإدارة",
  keyboard_back: "⬅️ رجوع",
  keyboard_on: "✅ مُفعّل",
  keyboard_off: "⛔ مُعطّل",

  // ===== FILTERS =====
  link_filter: "فلتر الروابط",
  badwords_filter: "فلتر الكلمات السيئة",
  apk_filter: "فلتر APK",
  zip_filter: "فلتر ZIP",
  exe_filter: "فلتر EXE",
  rar_filter: "فلتر RAR",
  xapk_filter: "فلتر XAPK",
  apkm_filter: "فلتر APKM",
  flood_filter: "الحماية من فيضان الرسائل",
  spam_filter: "مكافحة السبام",
  forward_filter: "الحماية من إعادة التوجيه",
  emoji_filter: "سبام الرموز التعبيرية",
  caps_filter: "فلتر الأحرف الكبيرة (CAPS)",
  ad_filter: "فلتر الإعلانات",
  sticker_filter: "سبام الملصقات/GIF",
  duplicate_filter: "سبام الرسائل المكررة",
  captcha_filter: "التحقق (للأعضاء الجدد)",
  raid_filter: "الحماية من الهجمات الجماعية",
  service_messages_filter: "حذف رسائل الانضمام/المغادرة",

  // ===== MODERATION FILTER MESSAGES =====
  reason_blacklisted: "مستخدم في القائمة السوداء",
  reason_blocked_file: "تم إرسال نوع ملف محظور",
  reason_link: "إرسال الروابط ممنوع",
  reason_badword: "تم استخدام كلمة سيئة",
  reason_caps: "الكتابة بأحرف كبيرة مفرطة",
  reason_emoji: "سبام الرموز التعبيرية",
  reason_forward: "إعادة توجيه الرسائل ممنوعة",
  reason_ad: "تم اكتشاف رسالة إعلانية",
  reason_sticker_spam: "سبام الملصقات/GIF",
  reason_duplicate: "إرسال نفس الرسالة بشكل متكرر",
  reason_slowmode: "الوضع البطيء: يجب الانتظار {{seconds}} ثانية على الأقل بين الرسائل",
  reason_flood: "تم اكتشاف فيضان رسائل/سبام",
  moderation_mention_user: "المستخدم",
  moderation_banned: "🚫 تم حظر {{mention}} لتجاوزه حد التحذيرات.\nالسبب: {{reason}}",
  moderation_warned: "⚠️ {{mention}}، تم حذف رسالتك.\nالسبب: {{reason}}\nالتحذيرات: {{current}}/{{max}}",
  log_message_deleted: "🗑 *تم حذف الرسالة*\nالمستخدم: `{{userId}}`\nالسبب: {{reason}}",

  // ===== REPORTS HANDLER (إضافي) =====
  reports_footer_hint: "يرسل المستخدمون `/hisobot` بالرد على رسالة.",
  report_ban_confirmed: "🚫 تم حظر [{{label}}](tg://user?id={{userId}}) بعد تأكيد البلاغات.",
  report_warn_confirmed: "⚠️ تم تحذير [{{label}}](tg://user?id={{userId}}) ({{current}}/{{max}}).",
  reason_reports_limit: "تجاوز حد البلاغات",
  report_user_label: "المستخدم",

  // ===== STATS HANDLER (إضافي) =====
  stats_weekly_title: "📅 *إحصائيات أسبوعية (7 أيام)*\n\n{{stats}}",
  stats_monthly_title: "🗓 *إحصائيات شهرية (30 يومًا)*\n\n{{stats}}",
  stats_members_title:
    "👥 *إحصائيات الأعضاء*\n\n*خلال يوم:* ➕ انضم {{dayJoins}} / ➖ غادر {{dayLeaves}}\n*خلال أسبوع:* ➕ انضم {{weekJoins}} / ➖ غادر {{weekLeaves}}\n*خلال شهر:* ➕ انضم {{monthJoins}} / ➖ غادر {{monthLeaves}}",
  stats_top_admins_title: "🏆 *أكثر المشرفين نشاطًا*\n\n{{list}}",
  stats_no_admin_actions: "لم يتم تسجيل أي إجراء إشرافي حتى الآن.",
  stats_top_admin_line: "{{rank}}. [مشرف](tg://user?id={{adminId}}) — *{{count}}* إجراء",

  // ===== ADVANCED HANDLER (إضافي) =====
  advanced_badwords_list_title:
    "🤬 *الكلمات السيئة* ({{count}}):\n\n{{list}}\n\nللإضافة: `/yomon_soz_qoshish <كلمة>`\nللإزالة: `/yomon_soz_ochirish <كلمة>`",

  // ===== CHANNELS HANDLER (إضافي) =====
  channels_status_title:
    "📢 *القناة الإلزامية*\n\nالحالة: {{status}}\n\nلإضافة قناة، أضف البوت كـ*مشرف* في تلك القناة ثم اكتب هنا:\n`/kanal_qoshish @channel_username`",
  channels_add_hint: "أضف البوت كمشرف في القناة المطلوبة، ثم: /kanal_qoshish @username",
  channels_check_thanks: "✅ شكرًا لك! جرّب الآن إرسال رسالة في المجموعة.",

  // ===== ADMIN HANDLER (إضافي) =====
  admin_channel_list_title: "📡 *القنوات الإلزامية*\n\n{{list}}",
  admin_broadcast_prompt_users:
    "📢 أرسل الآن هنا الرسالة التي تريد إرسالها إلى جميع المستخدمين.\n\nنص، صورة، فيديو، ملف — يمكنك إرسال أي نوع من الرسائل.",
  admin_broadcast_prompt_groups:
    "📣 أرسل الآن هنا الرسالة التي تريد إرسالها إلى جميع المجموعات المرتبطة.\n\nنص، صورة، فيديو، ملف — يمكنك إرسال أي نوع من الرسائل.",
  admin_broadcast_cancelled: "تم الإلغاء",
  admin_channels_intro:
    "📡 *القنوات الإلزامية*\n\nالمستخدمون غير المشتركين في القنوات المضافة هنا لن يتمكنوا من استخدام البوت في الدردشة الخاصة.\n\n⚠️ يجب أن يكون البوت *مشرفًا* في القناة المُضافة.",
  admin_channel_removed: "✅ تمت إزالة القناة",
  admin_channel_add_prompt:
    "➕ أرسل معرّف القناة (مثال: `@my_channel`).\n\n⚠️ يجب أن يكون البوت *مشرفًا* في تلك القناة، وإلا فلن يتمكن من التحقق من العضوية.",
  admin_channel_username_required: "يرجى إرسال معرّف القناة كنص.",
  admin_channel_not_found:
    "❌ القناة غير موجودة. تحقق من صحة المعرّف ومن أن البوت مشرف في تلك القناة.",
  admin_channel_added: "✅ تمت إضافة القناة: {{title}}",
  admin_broadcast_sending: "⏳ جارٍ إرسال الرسالة، يرجى الانتظار...",
  admin_broadcast_target_users: "مستخدم(ين)",
  admin_broadcast_target_groups: "مجموعة (مجموعات)",

  // ===== ADMIN KEYBOARD (أزرار إضافية) =====
  admin_btn_broadcast_users: "📢 رسالة إلى المستخدمين",
  admin_btn_broadcast_groups: "📣 رسالة إلى المجموعات",
  admin_btn_channels: "📡 القنوات الإلزامية",
  admin_btn_cancel: "✖️ إلغاء",
  admin_btn_channel_add: "➕ إضافة قناة",
  admin_btn_channel_list: "📋 قائمة القنوات",

  // ===== ADVANCED KEYBOARD (أزرار إضافية) =====
  advanced_btn_warnings: "⚠️ عدد التحذيرات",
  advanced_btn_spamcount: "🚫 السبام: عدد الرسائل",
  advanced_btn_spamwindow: "⏱ السبام: النافذة الزمنية",
  advanced_btn_emoji: "😊 حد الرموز التعبيرية",
  advanced_btn_caps: "🔠 نسبة الأحرف الكبيرة",
  advanced_btn_slowmode: "🐢 الوضع البطيء",
  advanced_btn_badwords: "🤬 قائمة الكلمات السيئة",

  // ===== REPORTS KEYBOARD (أزرار إضافية) =====
  reports_btn_setlimit: "🔢 تغيير حد البلاغات",

  // ===== STATS KEYBOARD (أزرار إضافية) =====
  stats_btn_weekly: "📅 أسبوعي",
  stats_btn_monthly: "🗓 شهري",
  stats_btn_members: "👥 الأعضاء (انضموا/غادروا)",
  stats_btn_topadmins: "🏆 أكثر المشرفين نشاطًا",

  // ===== LANGUAGE COMMAND/HANDLER (إضافي) =====
  language_invalid: "❌ لغة غير صحيحة.",
  error_unexpected: "❌ حدث خطأ.",
  error_unexpected_retry: "❌ حدث خطأ، يرجى المحاولة مرة أخرى بعد قليل.",

  // ===== REPORT COMMAND (إضافي) =====
  report_admin_cannot_report: "لا يمكن الإبلاغ عن المشرفين.",
  report_confirm_btn: "✅ تأكيد",
  report_reject_btn: "❌ إلغاء",
  default_group_name: "المجموعة",

  // ===== GLOBAL/GROUP CHANNEL GATE (إضافي) =====
  private_join_channels_prompt: "👋 يرجى الاشتراك في القناة/القنوات التالية قبل استخدام البوت:",
  group_join_channels_prompt: "👋 {{mention}}، اشترك في القناة/القنوات التالية للكتابة في المجموعة:",
  join_channel_btn: "✅ اشتركت",
  default_channel_name: "القناة",
  default_user_name: "المستخدم",

  // ===== CAPTCHA (إضافي) =====
  captcha_not_bot_btn: "✅ لست بوتًا",
  captcha_join_prompt: "👋 {{mention}}، يرجى تأكيد أنك لست بوتًا.\n\nاضغط الزر أدناه خلال {{minutes}} دقيقة.",
  captcha_welcome_after_verify: "🎉 {{mention}}، مرحبًا بك في مجموعتنا!",
  raid_detected: "🚨 *تم اكتشاف هجوم جماعي!* تمت إضافة {{threshold}}+ عضو خلال وقت قصير. يُنصح المشرفون بالانتباه.",

  // ===== BOT ADDED TO GROUP (إضافي) =====
  bot_added_welcome:
    "👋 مرحبًا! أنا بوت للإشراف.\n\nلكي أعمل بكامل صلاحياتي، يرجى منحي صلاحية *المشرف*.\nلفتح الإعدادات: /sozlamalar\nللمساعدة: /yordam",

};