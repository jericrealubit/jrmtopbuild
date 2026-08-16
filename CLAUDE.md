# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)
- No test framework is configured in this repo.
- Add shadcn components with `npx shadcn@latest add <component>` — it respects the aliases in `components.json` and writes into `components/ui/`.

## Project state

This is currently the unmodified `create-next-app` scaffold (`app/page.tsx` is still the default starter page). The real target for the site is documented in `JRM-Top-Build-Website-Plan.md` — a full content/design spec (sitemap, page-by-page copy plan, brand colour palette, typography, quote-form fields, SEO notes) for **JRM Top Build Ltd**, a Christchurch, NZ building company. `jrm-homepage-mockup.html` is a static HTML/CSS mockup of the homepage showing that design applied, and `jrm-logo-round.png` is the brand's logo asset. Read the plan doc before building or restyling pages so new work matches the intended sitemap and brand direction (dark navy `#0A1017` / metallic gold `#C6A15B` / brushed silver `#C7CBCE`, serif display headings + condensed sans subheadings + plain sans body).

## Architecture

- **Next.js 16.3.1, App Router.** This version has breaking changes vs. older Next.js — see the `@AGENTS.md` import above and read `node_modules/next/dist/docs/` before writing routing/data code. Note `app/layout.tsx` already uses the newer typed-route prop helper (`LayoutProps<"/">`) instead of a hand-written `{ children: React.ReactNode }` type.
- **Tailwind CSS v4, CSS-first config.** There is no `tailwind.config.js`; all theme setup lives in `app/globals.css` via `@import "tailwindcss"`, `@import "tw-animate-css"`, `@import "shadcn/tailwind.css"`, and a `@theme inline { ... }` block that maps CSS custom properties (`--background`, `--primary`, etc., defined under `:root` / `.dark`) to Tailwind theme tokens.
- **UI components: shadcn on Base UI, not Radix.** `components.json` sets `"style": "base-nova"` and components are built on `@base-ui/react` (e.g. `components/ui/button.tsx` wraps `@base-ui/react/button`), styled with `class-variance-authority` + the `cn()` helper in `lib/utils.ts` (clsx + tailwind-merge). Only `Button` exists so far. Import aliases per `components.json`: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`.
