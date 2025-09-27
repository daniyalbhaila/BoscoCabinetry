# Repository Guidelines

## Project Structure & Module Organization
- Astro project rooted at `src/`, with `pages/` defining routes, `components/` housing Astro/React building blocks, and `layouts/` for page shells.
- Brand assets (images, icons, fonts) live in `src/assets/` and `public/`; keep shared tokens in `styles/` and utilities in `lib/`.
- Markdown-driven content belongs in `content/`; update `components.json` if you add design system elements.
- Deployment artifacts land in `dist/` (generated) and configuration lives in `netlify.toml`, `tailwind.config.cjs`, and `astro.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev` — start Astro dev server on port 4321 with hot reload.
- `npm run build` — generate static output for Netlify; required before pushing major UI changes.
- `npm run preview` — serve the production build locally for browser QA.
- `npm run build:analyze` — bundle build plus size insights via `scripts/bundle-analyzer.js`.
- `npm run performance:check` — headless Lighthouse sweep; produces `lighthouse-report.html` for regression tracking.

## Coding Style & Naming Conventions
- Run `npm run format` (Prettier) before committing; default spacing is two spaces, 100-char lines, and double quotes in JSON.
- Astro/React components use PascalCase filenames; helper functions and hooks use camelCase; Tailwind utility classes stay in lexical order for readability.
- Favor composable components over page-level logic; centralize shared tokens in `styles/tokens.css` to keep Tailwind variants consistent.

## Testing & QA Expectations
- No dedicated unit framework yet; rely on `npm run preview` for visual smoke tests and the Lighthouse workflow for performance gating.
- When adding automated tests, colocate them with the feature (e.g., `components/Button.test.tsx`) and mirror the component name.
- Document manual QA steps in the PR whenever you touch interactive flows (forms, nav, animations).

## Commit & Pull Request Guidelines
- Follow the existing imperative style (`Implement …`, `Replace …`); keep subject ≤72 chars and describe the user-facing change first.
- Group related work per commit; avoid mixing refactors with content edits.
- PRs should summarize intent, list key changes, attach any related Netlify preview link, and add before/after screenshots for visual updates.
- Reference tracking issues with `Fixes #ID` when applicable and flag any follow-up tasks.
