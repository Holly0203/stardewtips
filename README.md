# Stardew Tips

An English-language Stardew Valley guide site built with Astro. Production: https://stardewtips.com. The 83 article URLs are retained across the 26 October 2026 redesign.

## Structure

- `src/content/guides/`: article Markdown and publication/revision metadata.
- `src/data/guideIndex.json`: a topic, farm stage, and three curated continuations for every guide.
- `src/data/plans.ts`: six curated goal-based reading orders.
- `src/pages/guides/`: library search and article templates.
- `src/pages/categories/`: topic-grouped category pages.
- `public/images/guides/`: original labeled SVG diagrams.
- `audits/`: editorial findings, per-article revision record, and site plan.

The library works as a complete static listing without JavaScript. In-browser filters use URL parameters (`q`, `category`, `topic`, `stage`) so a selection can be bookmarked. No external search service is called. Each article has three selected continuations that address the next relevant task.

## Local work

Use Node 22.22 or later. Run `npm ci`, then `npm run build` for production output. Follow `AGENTS.md` for a background development server: `npm run dev -- --background`, followed by `npm run astro -- dev stop` when finished.

Run `npm test` after building to check content inventory, generated local links and anchors, unique article metadata, and the revised arithmetic. The current audit also checks all 83 revision records; update that snapshot when the inventory changes. Runtime dependencies remain Astro and the sitemap integration.

Optional browser verification uses an existing Playwright or Playwright Core module, without adding a production dependency:

```sh
npm test -- --browser --playwright=/absolute/path/to/playwright/index.mjs
```

The check starts and stops its own local static server, blocks external requests, and writes screenshots under `/private/tmp/stardew-deep-preview/`. It defaults to Google Chrome on macOS; set `BROWSER_EXECUTABLE` to use another installed Chromium browser. It covers search, combined filters, saved URLs, empty states, mobile navigation, image loading, and horizontal overflow at four widths.

## Publishing

The `master` branch is connected to Cloudflare Workers Builds through GitHub. Push the reviewed commit, check the build result, then verify live page bodies and assets before reporting publication complete. Do not add generated `dist/` output to Git.

## Editorial work

Keep publication dates, change `updatedDate` only for substantive revisions, and add new guide IDs to the inventory. Verify numeric mechanics against the linked game references. Describe calculations as calculations; do not invent personal gameplay testing. Prefer exact crop calendars, inputs, and reachable routes over repeated generic preparation advice. The writing and corrections policy is published at `/editorial-policy/`.
