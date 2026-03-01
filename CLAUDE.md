# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite, runs on http://localhost:5173)
- **Build:** `npm run build` (runs `tsc -b` then `vite build`, outputs to `dist/`)
- **Preview production build:** `npm run preview`
- No test framework is configured.

## Architecture

Single-page React landing site for "Stellar" (a marketing agency). All content is hardcoded as constants within each component — there is no CMS, API, or global state management.

`App.tsx` assembles 7 section components in order: Header → Hero → About → Services → Testimonials → Contact → Footer.

**Scroll animations:** Components use a custom `useScrollReveal` hook (`src/hooks/useScrollReveal.ts`) that applies a `.revealed` CSS class via `IntersectionObserver` at 15% threshold. The corresponding CSS transitions live in `src/styles/index.css`. Hero uses separate staggered `.fade-up-*` keyframe animations.

## Tech Stack

React 19, TypeScript 5.7 (strict mode, no unused locals/params), Tailwind CSS 3.4, Vite 6. No additional runtime dependencies.

## Styling

Tailwind utility classes for all component styling. Custom design tokens are defined in both `tailwind.config.js` (colors, fonts, maxWidth) and as CSS variables in `src/styles/index.css`. Fonts are Playfair Display (display) and DM Sans (body), loaded via Google Fonts in `index.html`.

## TypeScript

Strict mode is on. `noUnusedLocals` and `noUnusedParameters` are enabled — unused variables will fail the build. Target is ES2020.

## Deployment

Vercel auto-deploys from `main`. Config in `vercel.json`: builds with `npm run build`, serves `dist/`, has SPA rewrite rule.
