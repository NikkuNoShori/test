# Changelog

## 2026-02-28

### Initial Project Setup
- Scaffolded the project with Vite, React, TypeScript, and Tailwind CSS
- Configured PostCSS, TypeScript, and Vite build tooling
- **Who:** NikkuNoShori
- **Why:** Establish a modern frontend stack as the foundation for a landing page

### Landing Page Sections
- Built all core sections: Header, Hero, About, Services, Testimonials, Contact, and Footer
- Added `useScrollReveal` hook for scroll-based animations
- Assembled sections into a single-page layout via `App.tsx`
- **Who:** NikkuNoShori + Claude
- **Why:** Create a complete, polished landing page with all standard sections

### Vercel Deployment
- Added `vercel.json` with build command, output directory, and SPA rewrites
- Updated `.gitignore` to exclude build artifacts (`dist/`)
- **Who:** NikkuNoShori + Claude
- **Why:** Enable automatic deployments from `main` via Vercel

### Project Documentation
- Created `add-project-docs` branch for documentation work
- Updated `README.md` with project overview, local dev instructions, deployment info, and folder structure
- Added this `CHANGELOG.md`
- **Who:** NikkuNoShori + Claude
- **Why:** Make the project easy to understand for new contributors
