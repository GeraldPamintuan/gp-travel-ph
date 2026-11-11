# GalaBuddy

A free Pampanga travel discovery app built with Angular, TypeScript and SCSS.

## Run locally

```sh
npm install
npm start
```

Open http://localhost:4200. Build with `npm run build`; output is in `dist/lakbay-buddy/browser`.

## Features

- 28 starter places, including food, cafés, picnic parks, running and sports; search, town and category filters
- Destination details, external map directions and reference links
- Saved places persisted in browser localStorage
- Footsteps travel buddy with English/Tagalog keyword matching
- Responsive layout and image fallback artwork
- Wikipedia page images loaded from its free API; image source/license links

The buddy is a deterministic search assistant, not an LLM. It supports towns, exact place names and interest keywords, and explicitly declines live price/hour questions. No account, backend, paid API or secret is required.

## Content and media

Destination summaries are editorial starter content, not live verified travel advice. Fees, opening hours, access and conditions must be confirmed with the destination/operator. Wikipedia links supply further references; they may describe a broader area where a dedicated article is unavailable. Remote Wikimedia images load when available; check each linked file page for its author and license before reusing images elsewhere. The hero uses the Mount Arayat Wikipedia image, with a locally bundled illustrated Mount Arayat fallback. New venue references are stored with each place; some venues have no verified reusable photograph and use illustrated category placeholders. Fonts load from Google Fonts. All core search and saved-place features work without remote images/fonts after the app loads.

Edit `src/data.ts` to maintain the collection; `src/app.component.ts` contains UI behavior; `src/app.component.html` contains the page template; `src/main.ts` starts the app; `src/styles.scss` contains responsive styles. Saved data stays in the current browser only.

## Code formatting

Run `npm run format` to format the source files, or `npm run format:check` to check formatting without changing files.
