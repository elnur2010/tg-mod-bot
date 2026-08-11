export default {
  // ===== LANGUAGE SYSTEM =====
  language_prompt: "🌐 Dili seçin:",
  language_current: "Mevcut dil: 🇹🇷 Türkçe",
  language_set: "✅ Dil 🇹🇷 Türkçe olarak ayarlandı.",
  language_name: "Türkçe",
  language_back: "⬅️ Geri",

  // ===== START COMMAND =====
  start_welcome: "👋 Merhaba, {{displayName}}!\n\n🛡️ *TOZAA GRUP BOT*'a hoş geldiniz.\n\nBen Telegram gruplarını otomatik olarak koruyan bir moderatör botuyum.\n\n👇 Botu grubunuza eklemek için aşağıdaki düğmeye tıklayın.",
  start_group_response: "✅ Bu grupta çalışmaya hazırım!",
  start_add_to_group: "➕ Gruba ekle",
  start_settings_button: "⚙️ Ayarlar",

  // ===== HELP COMMAND =====
  help_title: "🤖 *Yardım*\n\n",
  help_public_commands: "*Genel komutlar:*\n",
  help_start: "`/start` — botu başlat\n",
  help_help: "`/yordam` — bu mesaj\n",
  help_admin: "`/admin` — bot sahibi paneli\n",
  help_rules: "`/qoidalar` — grup kurallarını görüntüle\n",
  help_report: "`/hisobot` — bir mesaja yanıt vererek şikayet et\n",
  help_stats: "`/statistika` — bugünkü istatistikler\n",
  help_members: "`/azolar` — 1 gün/hafta/ayda katılan-ayrılan üye sayısı\n",
  help_language: "`/til` — bot yanıt dilini seç\n\n",
  help_user_management: "*Admin: kullanıcı yönetimi* (bir mesaja yanıt vererek gönderilir):\n",
  help_warn: "`/ogohlantirish` — uyarı ver\n",
  help_unwarn: "`/ogohlantirmaslik` — son uyarıyı kaldır\n",
  help_mute: "`/ovozsiz [süre]` — susturma, örnek: `/ovozsiz 2soat`\n",
  help_unmute: "`/ovoz_yoqish` — sesi tekrar aç\n",
  help_ban: "`/taqiqlash [süre]` — engelleme, örnek: `/taqiqlash 1kun`\n",
  help_unban: "`/taqiq_bekor` — engeli kaldır\n",
  help_kick: "`/tepish` — gruptan çıkar\n",
  help_whois: "`/kim` — kullanıcı profilini görüntüle\n",
  help_delete: "`/ochirish` — bir mesaja yanıt vererek o mesajı sil\n\n",
  help_lists: "*Admin: listeler* (bir mesaja yanıt vererek gönderilir):\n",
  help_whitelist_add: "`/royxat_qoshish` — beyaz listeye ekle\n",
  help_whitelist_remove: "`/royxatdan_chiqarish` — beyaz listeden çıkar\n",
  help_blacklist_add: "`/qora_royxat_qoshish` — kara listeye ekle\n",
  help_blacklist_remove: "`/qora_royxat_ochirish` — kara listeden çıkar\n\n",
  help_badwords: "*Admin: kötü kelimeler:*\n",
  help_badword_add: "`/yomon_soz_qoshish <kelime>` — listeye ekle\n",
  help_badword_remove: "`/yomon_soz_ochirish <kelime>` — listeden çıkar\n\n",
  help_channels: "*Admin: kurallar ve kanallar:*\n",
  help_set_rules: "`/qoidalarni_ornatish <metin>` — kuralları güncelle\n",
  help_add_channel: "`/kanal_qoshish @kullaniciadi` — zorunlu kanal ekle\n",
  help_log_channel: "`/log_kanal @kullaniciadi` — moderasyon günlükleri için kanal ayarla\n\n",
  help_advanced: "Gelişmiş ayarlar `/sozlamalar` üzerinden açılır.",

  // ===== SETTINGS COMMAND =====
  settings_only_groups: "Bu komut yalnızca gruplarda çalışır.",
  settings_admin_only: "⛔ Ayarları yalnızca yöneticiler açabilir.",
  settings_title: "⚙️ *Bot Ayarları*\n\nGerekli bölümü seçin:",
  private_settings_title: "⚙️ *Ayarlar*\n\nGerekli bölümü seçin:",

  // ===== ERROR MESSAGES =====
  error_admin_only: "⛔ Bu komut yalnızca yöneticiler içindir.",
  error_not_admin: "⛔ Siz yönetici değilsiniz.",
  error_reply_required: "Mesajı yanıt olarak seçin.",
  error_user_not_found: "❌ Kullanıcı bulunamadı.",
  error_invalid_duration: "❌ Süre biçimi yanlış. Örnek: 2saat, 30dakika, 1gun",
  error_invalid_format: "❌ Biçim yanlış.",
  error_group_only: "Bu komut yalnızca gruplarda çalışır.",
  error_target_required: "Kullanıcıyı belirtin: onun mesajına *yanıt* (reply) vererek komutu gönderin ya da sonuna kullanıcı ID numarasını ekleyin.\\nÖrnek: `/taqiqlash 123456789 sebep`",
  error_group_not_found: "Grup bulunamadı, lütfen kısa süre sonra tekrar deneyin.",
  error_restrict_failed: "Kullanıcı kısıtlanamadı (botun yönetici yetkilerini kontrol edin).",
  error_unmute_failed: "Ses açılamadı (botun yönetici yetkilerini kontrol edin).",
  error_unban_failed: "Engel kaldırılamadı.",
  error_kick_failed: "Kullanıcı çıkarılamadı (botun yönetici yetkilerini kontrol edin).",

  // ===== SUCCESS MESSAGES =====
  success_saved: "✅ Kaydedildi.",
  success_updated: "✅ Güncellendi.",
  success_deleted: "✅ Silindi.",

  // ===== KEYBOARD BUTTONS =====
  keyboard_moderation: "🛡 Moderasyon",
  keyboard_users: "👥 Kullanıcılar",
  keyboard_reports: "🚨 Şikayetler",
  keyboard_channels: "📢 Zorunlu kanal",
  keyboard_rules: "📋 Kurallar",
  keyboard_stats: "📊 İstatistik",
  keyboard_language: "🌐 Dil",
  keyboard_advanced: "🔧 Gelişmiş",
  keyboard_close: "❌ Kapat",

  // ===== MODERATION COMMANDS =====
  warn_title: "⚠️ *Kullanıcı uyarıldı*",
  warn_message: "⚠️ {username} uyarıldı.\n\nSebep: {reason}\nUyarı: {warns}",
  warn_banned: "🚫 {username} uyarı limitini aştığı için engellendi.",
  warn_user_dm: "⚠️ {group} grubunda uyarıldınız.\n\nSebep: {reason}",
  warn_error: "❌ Kullanıcı uyarılamadı.",

  unwarn_title: "✅ *Uyarı kaldırıldı*",
  unwarn_message: "✅ {username} için bir uyarı kaldırıldı.\nKalan uyarılar: {warns}",
  unwarn_no_warns: "Bu kullanıcıda uyarı bulunamadı.",

  ban_title: "🚫 *Kullanıcı yasaklandı*",
  ban_message: "🚫 {username} gruptan engellendi{duration}.\nSebep: {reason}",
  ban_message_timed: "🚫 @{username} {duration} süreyle yasaklandı.\n\nSebep: {reason}",
  ban_user_dm: "🚫 {group} grubunda yasaklandınız.\n\nSebep: {reason}",

  unban_title: "✅ *Yasak kaldırıldı*",
  unban_message: "✅ {username} engeli kaldırıldı.",
  unban_not_banned: "Bu kullanıcı engellenmemiş.",

  mute_title: "🔇 *Kullanıcı susturuldu*",
  mute_message: "🔇 {username} susturuldu{duration}.\nSebep: {reason}",
  mute_user_dm: "🔇 {group} grubunda {duration} süreyle susturuldunuz.\n\nSebep: {reason}",

  unmute_title: "🔊 *Susturma kaldırıldı*",
  unmute_message: "🔊 {username} sesi tekrar açıldı.",
  unmute_not_muted: "❌ Bu kullanıcı susturulmamış.",

  kick_title: "👉 *Kullanıcı gruptan çıkarıldı*",
  kick_message: "👢 {username} gruptan çıkarıldı (tekrar katılabilir).\nSebep: {reason}",
  kick_user_dm: "👉 {group} grubundan çıkarıldınız.\n\nSebep: {reason}",

  // ===== RULES COMMAND =====
  rules_title: "📋 *Grup Kuralları*\n\n",
  rules_no_rules: "❌ Bu grupta kurallar ayarlanmamış.",
  rules_set_success: "✅ Kurallar kaydedildi.",
  rules_set_error: "❌ Kurallar kaydedilirken hata oluştu.",

  // ===== REPORT COMMAND =====
  report_title: "🚨 *Şikayet*",
  report_success: "✅ Şikayetiniz yöneticilere iletildi.",
  report_message: "🚨 *Yeni Şikayet*\n\nGrup: {group}\nKullanıcı: @{username}\nŞikayet: {reason}",
  report_no_reply: "❌ Mesajı yanıt olarak seçin.",
  report_self: "❌ Kendiniz hakkında şikayette bulunamazsınız.",

  // ===== STATS COMMAND =====
  stats_title: "📊 *Bugünkü istatistikler*",
  stats_messages_today: "📨 Bugünkü mesajlar: {count}",
  stats_members_joined: "➕ Katılanlar: {count}",
  stats_members_left: "➖ Ayrılanlar: {count}",
  stats_warns: "⚠️ Uyarılar: {count}",
  stats_bans: "🚫 Yasaklamalar: {count}",
  stats_mutes: "🔇 Susturmalar: {count}",
  stats_deleted_messages: "🗑 Silinen mesajlar: {count}",
  stats_spam_detected: "🕵️ Tespit edilen spam: {count}",
  stats_reports_received: "🚨 Şikayetler: {count}",
  stats_links_deleted: "🔗 Silinen bağlantılar: {count}",
  stats_files_deleted: "📁 Silinen dosyalar: {count}",

  // ===== MEMBER STATS =====
  member_stats_title: "👤 *Kullanıcı İstatistiği*",
  member_stats_user: "Kullanıcı: @{username}",
  member_stats_messages: "Mesajlar: {count}",
  member_stats_warns: "Uyarı: {count}",
  member_stats_joined: "Katılma tarihi: {date}",

  // ===== MEMBERS ACTIVITY (/azolar) =====
  members_stats_title: "👥 *Üye istatistiği*",
  members_period_day: "1 günde",
  members_period_week: "1 haftada",
  members_period_month: "1 ayda",
  members_stats_line: "*{label}:* ➕ katıldı {joins} / ➖ ayrıldı {leaves}",

  // ===== FILTERS =====
  filter_bad_words: "🚫 Kötü kelime tespit edildi.",
  filter_bad_words_deleted: "🚫 Mesaj kötü kelime nedeniyle silindi.",
  filter_spam_link: "🔗 Spam bağlantı tespit edildi.",
  filter_spam_link_deleted: "🔗 Mesaj spam bağlantı nedeniyle silindi.",
  filter_flood: "💬 Flood tespit edildi.",
  filter_flood_deleted: "💬 Mesaj flood nedeniyle silindi.",
  filter_caps: "🔤 Büyük harf oranı aşıldı.",
  filter_caps_deleted: "🔤 Mesaj büyük harfler nedeniyle silindi.",
  filter_emoji: "😂 Çok fazla emoji.",
  filter_emoji_deleted: "😂 Mesaj emoji nedeniyle silindi.",
  filter_forward: "↩️ Mesaj yönlendirme yasaktır.",
  filter_forward_deleted: "↩️ Yönlendirilen mesaj silindi.",

  // ===== CHANNELS =====
  channels_title: "📢 *Zorunlu Kanallar*",
  channels_add_success: "✅ Kanal eklendi.",
  channels_remove_success: "✅ Kanal kaldırıldı.",
  channels_list: "📢 Kanallar:\n{list}",
  channels_no_channels: "❌ Zorunlu kanal belirlenmemiş.",
  channels_join_required: "❌ Gruba katılmadan önce aşağıdaki kanallara abone olun:\n{channels}",

  // ===== ADMIN PANEL =====
  admin_title: "🔧 *Yönetici Paneli*",
  admin_unauthorized: "❌ Yönetici panelini açma yetkiniz yok.",
  admin_back: "⬅️ Geri",

  // ===== WHOIS COMMAND =====
  whois_title: "👤 *Kullanıcı Bilgileri*",
  whois_user_id: "ID: {id}",
  whois_username: "Kullanıcı: @{username}",
  whois_first_name: "Adı: {first_name}",
  whois_last_name: "Soyadı: {last_name}",
  whois_status: "Durum: {status}",
  whois_warns: "Uyarı: {warns}",
  whois_banned: "Yasak: {banned}",
  whois_muted: "Susturuldu: {muted}",
  whois_joined: "Katılma: {date}",
  whois_user_word: "Kullanıcı",
  whois_reply_required: "Kullanıcının mesajına *yanıt* (reply) vererek `/kim` gönderin.",
  whois_profile_title: "👤 {user} profili",
  whois_status_label: "Durumu: {status}",
  whois_status_banned: "🚫 Engellendi",
  whois_status_muted: "🔇 Susturuldu",
  whois_status_normal: "🟢 Normal durum",
  whois_warnings_line: "⚠️ Uyarılar: {count}",
  whois_deleted_line: "🗑 Silinen mesajlar: {count}",
  whois_joined_line: "📅 Gruba ilk katılım: {date}",
  whois_unknown_date: "Bilinmiyor",

  // ===== DELETE COMMAND =====
  delete_success: "✅ Mesaj silindi.",
  delete_error: "❌ Mesaj silinemedi (zaten silinmiş veya çok eski olabilir).",
  delete_no_reply: "Silmek istediğiniz mesaja *yanıt* (reply) vererek `/ochirish` gönderin.",

  // ===== SETTINGS HANDLER =====
  settings_moderation: "🛡 Moderasyon",
  settings_filters: "🔒 Filtreler",
  settings_automod: "🤖 OtoMod",
  settings_captcha: "✅ Captcha",
  settings_bad_words: "❌ Kötü kelimeler",
  settings_links: "🔗 Bağlantılar",
  settings_flood: "💬 Flood",
  settings_caps: "🔤 Büyük harfler",

  // ===== USER MANAGEMENT =====
  users_list: "👥 *Kullanıcılar*",
  users_whitelist: "⚪ Beyaz Liste",
  users_blacklist: "⚫ Kara Liste",
  users_add_whitelist: "✅ Beyaz listeye eklendi.",
  users_remove_whitelist: "❌ Beyaz listeden çıkarıldı.",
  users_add_blacklist: "🚫 Kara listeye eklendi.",
  users_remove_blacklist: "⚫ Kara listeden çıkarıldı.",

  // ===== ADVANCED SETTINGS =====
  advanced_title: "🔧 *Gelişmiş Ayarlar*",
  advanced_raid_protection: "🛡 Baskın Koruması",
  advanced_captcha_required: "✅ Captcha Zorunlu",
  advanced_global_channels: "📡 Genel Kanallar",
  advanced_save_logs: "📝 Günlükleri Kaydet",

  // ===== LIST COMMANDS =====
  whitelist_add_success: "beyaz listeye eklendi.",
  whitelist_remove_success: "beyaz listeden çıkarıldı.",
  blacklist_add_success: "kara listeye eklendi ve engellendi.",
  blacklist_add_reason: "Yönetici tarafından eklendi",
  blacklist_remove_success: "kara listeden çıkarıldı.",
  badword_add_usage: "Kelimeyi girin.\nÖrnek: `/yomon_soz_qoshish kelime`",
  badword_add_success: "{word} kötü kelimeler listesine eklendi.",
  badword_remove_usage: "Kelimeyi girin.\nÖrnek: `/yomon_soz_ochirish kelime`",
  badword_remove_success: "{word} kötü kelimeler listesinden çıkarıldı.",

  // ===== CHANNEL COMMANDS =====
  channel_add_usage: "Kanal kullanıcı adını girin.\nÖrnek: `/kanal_qoshish @kanalim`\n\nNot: bot o kanalda yönetici olmalıdır.",
  channel_not_found: "Kanal bulunamadı. Kullanıcı adının doğruluğunu ve botun o kanalda yönetici olduğunu kontrol edin.",
  channel_add_success: "✅ Kanal eklendi: {title}",

  // ===== LOG CHANNEL COMMAND =====
  log_channel_usage:
    "Kanal kullanıcı adını girin.\nÖrnek: `/log_kanal @logkanalim`\nKaldırmak için: `/log_kanal off`\n\nNot: bot o kanalda yönetici olmalıdır.",
  log_channel_removed: "✅ Günlük kanalı kaldırıldı.",
  log_channel_set: "✅ Günlük kanalı ayarlandı: {{title}}",

  // ===== ERROR MESSAGES =====
  error_owner_only: "⛔ Bu komut yalnızca bot sahibi içindir.",
  error_reply_user: "❌ Kullanıcının mesajına yanıt vererek gönderin.",
  admin_choose_section: "Aşağıdaki bölümlerden birini seçin:",

  // ===== HANDLERS =====
  captcha_not_for_you: "❗ Bu captcha size ait değil.",
  captcha_verified: "✅ Doğrulandı! Artık yazabilirsiniz.",
  captcha_verify_failed: "⚠️ Doğrulandınız, ancak bot sizin susturmanızı kaldıramadı — bota grupta \"Üyeleri Kısıtlama\" yönetici yetkisini verin ve tekrar deneyin.",
  channels_not_joined: "❗ Henüz tüm kanallara katılmadınız.",
  thank_you: "✅ Teşekkürler!",
  rules_title: "Mevcut kurallar:",
  rules_change_instruction: "Kuralları değiştirmek için:\n`/qoidalarni_ornatish <yeni metin>`",
  list_empty: "Liste boş.",
  users_description: "⚪ *Beyaz liste* — tüm filtrelerden muaf tutulan kullanıcılar.\n⚫ *Kara liste* — gruba yazmaya çalıştığı anda engellenecek kullanıcılar.\n\nEklemek için kullanıcının mesajına yanıt vererek komutu gönderin:\n`/royxat_qoshish` — beyaz listeye\n`/royxatdan_chiqarish` — beyaz listeden\n`/qora_royxat_qoshish` — kara listeye\n`/qora_royxat_ochirish` — kara listeden",

  // ===== SETTINGS HANDLERS =====
  settings_error_not_found: "Hata: ayarlar bulunamadı.",
  settings_moderation_title: "🛡 *Moderasyon*\n\nFiltreyi açmak/kapatmak için tıklayın:",
  settings_filter_unknown: "Bilinmeyen ayar.",
  settings_toggle_on: "✅ Açık",
  settings_toggle_off: "⛔ Kapalı",

  // ===== CHANNELS HANDLERS =====
  channels_empty: "📋 Henüz zorunlu kanal eklenmemiş.",
  channels_list_title: "📋 *Kanal listesi* (silmek için tıklayın):",

  // ===== USERS HANDLERS =====
  users_whitelist_title: "⚪ *Beyaz Liste*",
  users_blacklist_title: "⚫ *Kara Liste*",
  users_whitelist_empty: "⚪ Beyaz liste boş.",
  users_blacklist_empty: "⚫ Kara liste boş.",

  // ===== REPORTS HANDLERS =====
  reports_title: "🚨 *Şikayetler*\n\n",
  reports_limit_info: "Mevcut limit: *{limit}* şikayet\n\nBekleyen şikayetler: *{pending}*\n\n",
  reports_set_limit_title: "🔢 Şikayet limitini seçin:",
  reports_limit_set: "✅ Limit {limit} olarak ayarlandı.",
  reports_no_pending: "❌ Şikayetler iptal edildi, herhangi bir işlem yapılmadı.",

  // ===== RULES HANDLERS =====
  rules_set_title: "📋 Mevcut kurallar:",

  // ===== ADMIN HANDLERS =====
  admin_menu: "👑 *Yönetici Paneli*\n\nGerekli bölümü seçin:",
  admin_menu_closed: "Panel kapatıldı.",
  admin_stats_title: "📊 *Bot İstatistikleri (Genel)*",
  admin_broadcast_title: "📢 *Tüm gruplara mesaj gönderme*",
  admin_broadcast_success: "✅ Mesaj {target} gönderildi.\n\n📨 Gönderildi: *{sent}*\n❌ Gönderilemedi: *{failed}*",
  admin_channels_title: "📡 *Genel Kanallar*",
  admin_channels_empty: "Herhangi bir genel kanal yok.",
  admin_close_panel: "❌ Paneli Kapat",

  // ===== ADVANCED HANDLERS =====
  advanced_warns_title: "⚠️ Kaç uyarıdan sonra otomatik yasaklama uygulansın?",
  advanced_warns_set: "✅ {value} olarak ayarlandı.",
  advanced_flood_title: "🚫 Kaç mesajdan sonra spam sayılsın?",
  advanced_flood_set: "✅ {value} olarak ayarlandı.",
  advanced_flood_time_title: "⏱ Kaç saniyelik pencerede hesaplansın?",
  advanced_flood_time_set: "✅ {value}s olarak ayarlandı.",
  advanced_emoji_title: "😊 Bir mesajda en fazla kaç emoji olsun?",
  advanced_emoji_set: "✅ {value} olarak ayarlandı.",
  advanced_caps_title: "🔠 Büyük harf oranı ne kadarı aşınca silinsin?",
  advanced_caps_set: "✅ {value}% olarak ayarlandı.",
  advanced_slow_mode_title: "🐢 Mesajlar arasında en az kaç saniye beklensin? (0 — kapalı)",
  advanced_slow_mode_set: "✅ {value}s olarak ayarlandı.",

  // ===== STATS HANDLERS =====
  stats_loading: "⏳ Yükleniyor...",

  // ===== KEYBOARDS =====
  keyboard_settings: "⚙️ Ayarlar",
  keyboard_moderation_filter: "🛡 Moderasyon",
  keyboard_users_list: "👥 Kullanıcılar",
  keyboard_channels_list: "📡 Kanallar",
  keyboard_rules_view: "📋 Kurallar",
  keyboard_stats_view: "📊 İstatistik",
  keyboard_advanced_settings: "🔧 Gelişmiş",
  keyboard_admin_panel: "👑 Yönetici",
  keyboard_back: "⬅️ Geri",
  keyboard_on: "✅ Açık",
  keyboard_off: "⛔ Kapalı",

  // ===== FILTERS =====
  link_filter: "Bağlantı filtresi",
  badwords_filter: "Kötü kelimeler filtresi",
  apk_filter: "APK filtresi",
  zip_filter: "ZIP filtresi",
  exe_filter: "EXE filtresi",
  rar_filter: "RAR filtresi",
  xapk_filter: "XAPK filtresi",
  apkm_filter: "APKM filtresi",
  flood_filter: "Flood koruması",
  spam_filter: "Spam önleyici",
  forward_filter: "Yönlendirme koruması",
  emoji_filter: "Emoji spamı",
  caps_filter: "CAPS (büyük harf) filtresi",
  ad_filter: "Reklam filtresi",
  sticker_filter: "Çıkartma/GIF spamı",
  duplicate_filter: "Tekrar eden mesaj spamı",
  captcha_filter: "Captcha (yeni üyeler)",
  raid_filter: "Baskın önleme koruması",
  service_messages_filter: "Katıldı/ayrıldı mesajlarını sil",

  // ===== MODERATION FILTER MESSAGES =====
  reason_blacklisted: "Kara listedeki kullanıcı",
  reason_blocked_file: "Yasaklı dosya türü gönderildi",
  reason_link: "Bağlantı gönderme yasak",
  reason_badword: "Kötü kelime kullanıldı",
  reason_caps: "Aşırı büyük harfle yazma",
  reason_emoji: "Emoji spamı",
  reason_forward: "Yönlendirilen mesajlar yasak",
  reason_ad: "Reklam mesajı tespit edildi",
  reason_sticker_spam: "Çıkartma/GIF spamı",
  reason_duplicate: "Aynı mesajı tekrar tekrar gönderme",
  reason_slowmode: "Slow mode: mesajlar arasında en az {{seconds}}s beklenmeli",
  reason_flood: "Flood/spam tespit edildi",
  moderation_mention_user: "kullanıcı",
  moderation_banned: "🚫 {{mention}} uyarı limitini aştığı için engellendi.\nSebep: {{reason}}",
  moderation_warned: "⚠️ {{mention}}, mesajınız silindi.\nSebep: {{reason}}\nUyarı: {{current}}/{{max}}",
  log_message_deleted: "🗑 *Mesaj silindi*\nKullanıcı: `{{userId}}`\nSebep: {{reason}}",

  // ===== REPORTS HANDLER (ek) =====
  reports_footer_hint: "Kullanıcılar bir mesaja yanıt vererek `/hisobot` gönderir.",
  report_ban_confirmed: "🚫 [{{label}}](tg://user?id={{userId}}) şikayetler onaylandığı için engellendi.",
  report_warn_confirmed: "⚠️ [{{label}}](tg://user?id={{userId}}) uyarıldı ({{current}}/{{max}}).",
  reason_reports_limit: "Şikayet limitini aştı",
  report_user_label: "Kullanıcı",

  // ===== STATS HANDLER (ek) =====
  stats_weekly_title: "📅 *Haftalık istatistik (7 gün)*\n\n{{stats}}",
  stats_monthly_title: "🗓 *Aylık istatistik (30 gün)*\n\n{{stats}}",
  stats_members_title:
    "👥 *Üye istatistiği*\n\n*1 günde:* ➕ katıldı {{dayJoins}} / ➖ ayrıldı {{dayLeaves}}\n*1 haftada:* ➕ katıldı {{weekJoins}} / ➖ ayrıldı {{weekLeaves}}\n*1 ayda:* ➕ katıldı {{monthJoins}} / ➖ ayrıldı {{monthLeaves}}",
  stats_top_admins_title: "🏆 *En aktif yöneticiler*\n\n{{list}}",
  stats_no_admin_actions: "Henüz herhangi bir moderasyon işlemi kaydedilmedi.",
  stats_top_admin_line: "{{rank}}. [Yönetici](tg://user?id={{adminId}}) — *{{count}}* işlem",

  // ===== ADVANCED HANDLER (ek) =====
  advanced_badwords_list_title:
    "🤬 *Kötü kelimeler* ({{count}}):\n\n{{list}}\n\nEklemek: `/yomon_soz_qoshish <kelime>`\nÇıkarmak: `/yomon_soz_ochirish <kelime>`",

  // ===== CHANNELS HANDLER (ek) =====
  channels_status_title:
    "📢 *Zorunlu kanal*\n\nDurum: {{status}}\n\nKanal eklemek için botu o kanala *yönetici* olarak ekleyin, ardından buraya yazın:\n`/kanal_qoshish @kanal_kullaniciadi`",
  channels_add_hint: "Botu gerekli kanala yönetici olarak ekleyin, ardından: /kanal_qoshish @kullaniciadi",
  channels_check_thanks: "✅ Teşekkürler! Şimdi gruba mesaj göndermeyi deneyin.",

  // ===== ADMIN HANDLER (ek) =====
  admin_channel_list_title: "📡 *Zorunlu kanallar*\n\n{{list}}",
  admin_broadcast_prompt_users:
    "📢 Tüm kullanıcılara göndermek istediğiniz mesajı şimdi buraya gönderin.\n\nMetin, resim, video, dosya — istediğiniz türde bir mesaj gönderebilirsiniz.",
  admin_broadcast_prompt_groups:
    "📣 Bağlı tüm gruplara göndermek istediğiniz mesajı şimdi buraya gönderin.\n\nMetin, resim, video, dosya — istediğiniz türde bir mesaj gönderebilirsiniz.",
  admin_broadcast_cancelled: "İptal edildi",
  admin_channels_intro:
    "📡 *Zorunlu kanallar*\n\nBurada eklenen kanallara üye olmayan kullanıcılar botu özel sohbette kullanamaz.\n\n⚠️ Botun eklenen kanalda *yönetici* olması gerekir.",
  admin_channel_removed: "✅ Kanal kaldırıldı",
  admin_channel_add_prompt:
    "➕ Kanal kullanıcı adını gönderin (örnek: `@kanalim`).\n\n⚠️ Botun o kanalda *yönetici* olması gerekir, aksi halde üyeliği kontrol edemez.",
  admin_channel_username_required: "Lütfen kanal kullanıcı adını metin olarak gönderin.",
  admin_channel_not_found:
    "❌ Kanal bulunamadı. Kullanıcı adının doğruluğunu ve botun o kanalda yönetici olduğunu kontrol edin.",
  admin_channel_added: "✅ Kanal eklendi: {{title}}",
  admin_broadcast_sending: "⏳ Mesaj gönderiliyor, lütfen bekleyin...",
  admin_broadcast_target_users: "kullanıcı(lar)a",
  admin_broadcast_target_groups: "grup(lar)a",

  // ===== ADMIN KEYBOARD (ek düğmeler) =====
  admin_btn_broadcast_users: "📢 Kullanıcılara mesaj",
  admin_btn_broadcast_groups: "📣 Gruplara mesaj",
  admin_btn_channels: "📡 Zorunlu kanallar",
  admin_btn_cancel: "✖️ İptal",
  admin_btn_channel_add: "➕ Kanal ekle",
  admin_btn_channel_list: "📋 Kanal listesi",

  // ===== ADVANCED KEYBOARD (ek düğmeler) =====
  advanced_btn_warnings: "⚠️ Uyarı sayısı",
  advanced_btn_spamcount: "🚫 Spam: mesaj sayısı",
  advanced_btn_spamwindow: "⏱ Spam: zaman penceresi",
  advanced_btn_emoji: "😊 Emoji limiti",
  advanced_btn_caps: "🔠 CAPS oranı",
  advanced_btn_slowmode: "🐢 Slow mode",
  advanced_btn_badwords: "🤬 Kötü kelimeler listesi",

  // ===== REPORTS KEYBOARD (ek düğmeler) =====
  reports_btn_setlimit: "🔢 Şikayet limitini değiştir",

  // ===== STATS KEYBOARD (ek düğmeler) =====
  stats_btn_weekly: "📅 Haftalık",
  stats_btn_monthly: "🗓 Aylık",
  stats_btn_members: "👥 Üyeler (katıldı/ayrıldı)",
  stats_btn_topadmins: "🏆 En aktif yöneticiler",

  // ===== LANGUAGE COMMAND/HANDLER (ek) =====
  language_invalid: "❌ Geçersiz dil.",
  error_unexpected: "❌ Bir hata oluştu.",
  error_unexpected_retry: "❌ Bir hata oluştu, lütfen kısa süre sonra tekrar deneyin.",

  // ===== REPORT COMMAND (ek) =====
  report_admin_cannot_report: "Yöneticiler hakkında şikayette bulunulamaz.",
  report_confirm_btn: "✅ Onayla",
  report_reject_btn: "❌ İptal et",
  default_group_name: "Grup",

  // ===== GLOBAL/GRUP KANAL GATE (ek) =====
  private_join_channels_prompt: "👋 Botu kullanmadan önce aşağıdaki kanal(lar)a üye olun:",
  group_join_channels_prompt: "👋 {{mention}}, grupta yazmak için aşağıdaki kanal(lar)a üye olun:",
  join_channel_btn: "✅ Üye oldum",
  default_channel_name: "Kanal",
  default_user_name: "Kullanıcı",

  // ===== CAPTCHA (ek) =====
  captcha_not_bot_btn: "✅ Bot değilim",
  captcha_join_prompt: "👋 {{mention}}, lütfen bot olmadığınızı doğrulayın.\n\n{{minutes}} dakika içinde aşağıdaki düğmeye tıklayın.",
  captcha_welcome_after_verify: "🎉 {{mention}}, grubumuza hoş geldiniz!",
  raid_detected: "🚨 *Baskın tespit edildi!* Kısa sürede {{threshold}}+ üye eklendi. Yöneticilerin dikkat etmesi önerilir.",

  // ===== BOT GRUBA EKLENDİ (ek) =====
  bot_added_welcome:
    "👋 Merhaba! Ben moderasyon botuyum.\n\nTam olarak çalışabilmem için bana *yönetici* yetkisi verin.\nAyarları açmak için: /sozlamalar\nYardım için: /yordam",

};