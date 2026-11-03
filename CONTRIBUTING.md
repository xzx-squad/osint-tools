# Contributing to OSINT Tools

Thanks for helping to keep the catalog accurate.

## Adding a new tool

1. Add an entry to the `TOOLS` array in `script.js`:
   - `category` — one of the existing categories or a new one added to `CATEGORY_TRANSLATIONS`.
   - `name` — canonical tool name.
   - `url` — working HTTPS URL of the tool.
   - `icon` — a single-letter or short symbol used as the icon.
   - `description` — short, neutral description in Russian.
2. Add the English name to `TOOL_NAMES_EN` and the English description to `TOOL_DESCRIPTIONS_EN`.
3. Add the category translation to both `CATEGORY_TRANSLATIONS.ru` and `CATEGORY_TRANSLATIONS.en`.
4. Validate: no duplicate names, valid URLs, descriptions in both languages.
5. Increment the `script.js?v=...` version in `index.html` to prevent caching.
6. Update `CHANGELOG.md`.

## Criteria for accepting a tool

- The tool is a real, publicly accessible service.
- The description is neutral and non-doxxing oriented.
- The URL works and does not require registration for basic public access.

## Code style

- Vanilla JS, no build step, no frameworks.
- All user-editable browser storage goes through the `storage` helper with try/catch.
- Keep the page weight and accessibility criteria (see project checklist).
