# Osint-Tools

A lightweight catalog of OSINT tools. It brings useful services together and makes it easy to find the right tool.

## Features

- Browse tools by category and search the catalog.
- Sort tools alphabetically.
- Switch between Russian and English.
- Choose a dark or light theme; your preference is saved in the browser.

## Run

No dependencies or build step are required. Open `index.html` in a browser.

## Updating the catalog

The tool list and Russian descriptions are in the `TOOLS` array in `script.js`. English descriptions are defined in `TOOL_DESCRIPTIONS_EN` in the same file. After changing the catalog, increment the `script.js?v=...` version in `index.html` to prevent browsers from displaying a cached copy.

## Recent updates

- Added an important notice shown after the user accepts the agreement. Its message is in the `noticeMessage` element in `index.html`; it closes with the button, a click outside the panel, or the Escape key.
- Styled the notice as a centered dark dialog with a red border and heading, on a blurred backdrop.
- Added a subtle 36px grid background across the main site, matching the maintenance page.
- Added a standalone maintenance page in `maintenance/`, with its own stylesheet. It contains no catalog controls and is excluded from search indexing.

The maintenance page is not enabled as the site's entry page by default. To temporarily disable the catalog, add these lines inside the `<head>` of `index.html`:

Remove both lines to restore normal access to the catalog.