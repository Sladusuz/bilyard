# Bilyard Ishlab Chiqarish

Samarqanddagi bilyard va snooker stollari ishlab chiqaruvchisining sayti: katalog, savat, mijoz ro'yxatdan o'tishi, buyurtmalar, admin panel va Telegram bot (Mini App). Tillar: UZ / RU / EN.

## Tuzilishi
- `index.html`, `css/`, `js/` — sayt (build kerak emas)
- `data/products.json` — boshlang'ich katalog (admin paneldan o'zgartirilganda Netlify Blobs'da saqlanadi)
- `admin/` — admin panel (`/admin/`)
- `netlify/functions/api.mjs` — server: katalog, mijozlar, buyurtmalar, admin, Telegram bot
- `img/opt/` — rasmlar (WebP), `img/products/` — mahsulot illyustratsiyalari

## Netlify sozlamalari (Site configuration → Environment variables)
| O'zgaruvchi | Majburiy | Izoh |
|---|---|---|
| `ADMIN_PASSWORD` | ha | Admin panel va botdagi admin paroli |
| `TELEGRAM_BOT_TOKEN` | bot uchun | @BotFather bergan token |
| `ADMIN_SECRET` | yo'q | Tokenlarni imzolash kaliti (bo'sh bo'lsa paroldan olinadi) |
| `ADMIN_TELEGRAM_IDS` | yo'q | Admin Telegram ID'lari, vergul bilan |
| `TELEGRAM_CHAT_ID` | yo'q | Guruhga bildirishnoma uchun chat ID |

O'zgaruvchilarni qo'shgach saytni qayta deploy qiling (Deploys → Trigger deploy).

## Botni ulash (bir marta)
1. Saytni deploy qiling, `https://SAYT/admin/` ga kiring (parol — `ADMIN_PASSWORD`).
2. Sozlamalar → **Botni sozlash** tugmasi webhook, "Do'kon" tugmasi, nom, tavsif va buyruqlarni o'rnatadi.
3. Botga o'tib `/start` bosing, so'ng **admin parolini** xabar qilib yuboring. Bot sizni admin qiladi, buyurtmalar shu chatga keladi va admin panel havolasini beradi.

## Mini App
Bot menyusidagi **Do'kon** tugmasi saytni Telegram ichida ochadi. Mijoz Telegram orqali avtomatik kiradi (parol shart emas), admin esa profilidan **Admin panel**ga o'tadi.
