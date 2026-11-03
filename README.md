# OSINT Tools

A lightweight catalog of OSINT tools. It brings useful services together and makes it easy to find the right tool.

The site is a static HTML/CSS/vanilla-JS project with no build step and no dependencies.

## Features

- Browse tools by category and search the catalog.
- Sort tools alphabetically or by original order.
- Switch between Russian and English.
- Choose a dark or light theme; your preference is saved in the browser.

## Run

No dependencies or build step are required. Open `index.html` in a browser.

## Updating the catalog

The tool list and Russian descriptions are in the `TOOLS` array in `script.js`. English descriptions are defined in `TOOL_DESCRIPTIONS_EN` in the same file. After changing the catalog, increment the `script.js?v=...` version in `index.html` to prevent browsers from displaying a cached copy.

## Recent updates

- Added an important notice shown once after the user accepts the agreement.
- Styled the notice as a centered dialog with a red border and heading, on a blurred backdrop.
- Added a subtle 36px grid background across the main site, matching the maintenance page.
- Added a standalone maintenance page in `maintenance/`, with its own stylesheet. It contains no catalog controls and is excluded from search indexing.

## Maintenance mode

The maintenance page is not enabled as the site's entry page by default. To temporarily disable the catalog, deploy the contents of the `maintenance/` folder to the site root (or point the host entry to `maintenance/index.html`), and add the maintenance page to `robots.txt` as `noindex`.

To restore normal access to the catalog, remove the maintenance entry.

## License

This project is released under the MIT License. See [LICENSE](LICENSE).
