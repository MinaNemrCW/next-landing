# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: read the bundled docs before writing Next.js code

This repo pins **Next.js 16.2.6** (React 19), which has breaking changes vs. older
Next.js. Authoritative docs ship inside the package at
`node_modules/next/dist/docs/` (App Router under `01-app/`). Consult the relevant
guide there before using any Next.js API — training-data assumptions are often stale.

## Environment: WSL project, Windows host

The repo lives in the WSL filesystem but tooling may run from the Windows host. Running
`npm install` against the UNC path (`\\wsl.localhost\...`) fails with `EISDIR`/`EPERM`
during cleanup. **Run npm inside WSL instead:**

```bash
wsl -e bash -lc "cd /home/minan/next-landing && npm install -D <pkg>"
```

The same applies to any command that mutates `node_modules` or `.bin`.

## Commands

Run these from inside WSL (`wsl -e bash -lc "cd /home/minan/next-landing && <cmd>"`):

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` / `npm run start` — production build / serve
- `npm run lint` — ESLint (flat config, `eslint-config-next`)
- `npm run test` — Vitest in watch mode
- `npx vitest run` — run all tests once (CI-style)
- `npx vitest run src/app/faq/__tests__/page.test.tsx` — run a single test file
- `npx tsc --noEmit` — type-check only

## Architecture

App Router landing site under `src/app/`. Routes are folder-based:
`page.tsx` (Home), `faq/page.tsx`, `technologies/page.tsx`. Pages are synchronous
server components; content (FAQ entries, tech list) is defined inline as arrays
mapped in JSX. Navigation between routes uses `next/link`; images use `next/image`
with **local** SVG assets in `public/` (no remote `images.remotePatterns` configured —
adding remote image URLs requires editing `next.config.ts`).

Styling is **Tailwind CSS v4** via `@tailwindcss/postcss` (`postcss.config.mjs`);
there is no `tailwind.config` — configuration is CSS-first in `src/app/globals.css`.
The `@/*` path alias maps to `./src/*` (`tsconfig.json`).

## Testing

Vitest + React Testing Library + jsdom. Config in `vitest.config.mts`
(`vite-tsconfig-paths` + `@vitejs/plugin-react`); `vitest.setup.ts` imports
`@testing-library/jest-dom/vitest`, so jest-dom matchers (`toBeInTheDocument`,
`toHaveAttribute`) are available globally. Tests live in `__tests__/` folders
colocated next to the route they cover. Pattern: render the page component, assert
headings by role/level, links by `href`, and images by `alt` text.
