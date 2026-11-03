# Changelog

All notable changes of the OSINT Tools catalog are documented here.

## 2026-11-03 — Version 1.0.0

- Compressed the hero background to WebP (`fon.webp`, 1600×450, ~50 КБ) with JPEG fallback.
- Reduced the logo to 108×89 with palette quantization (~2 КБ) and renamed `verifed.png` → `verified.png` (~361 Б).
- Removed the unused `logo1.png`.
- Fixed the «Важно!» notice: shown once, inert background while open, focus trap, focus restore.
- Fixed Escape handling in the search field.
- Added a safe localStorage wrapper for theme, language, favorites, recents and agreement.
- Removed the hard no-JS gate (agreement screen + inert shell) and added a `<noscript>` catalog list.

## 2026-10-26 — Version 0.9.0

- Added a one-time notice about the development status.
- Styled the notice as a centered dialog with a red border and heading, on a blurred backdrop.

## 2026-10-05 — Version 0.8.0

- Added English language support.
- Fixed light themes.

## 2026-10-02 — Version 0.7.0

- Renamed the «Зеркала» category to «Поиск людей».
- Updated tool descriptions and unified the brand name to «OSINT Tools».
