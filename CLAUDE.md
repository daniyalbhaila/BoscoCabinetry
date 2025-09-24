# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code
npm run format
```

## Architecture Overview

This is an Astro-based website for Bosco Cabinetry with the following structure:

- **Framework**: Astro 4.x with React and Tailwind CSS integration
- **UI Components**: shadcn/ui integrated for reusable components and blocks
- **Animations**: Framer Motion for smooth animations and transitions
- **Styling**: Tailwind CSS with custom brand color palette and Poppins font
- **Layout Pattern**: Component-based architecture using .astro files
- **Main Layout**: `src/layouts/BaseLayout.astro` - provides base HTML structure with header
- **Components**: Modular components in `src/components/` (Header, Hero, Services)
- **Pages**: Single page application with main page at `src/pages/index.astro`

## Brand Design System

Custom Tailwind configuration includes brand colors:

- Primary: `#60533C` (bronze)
- Accent: `#DAD2BF` (beige)
- Background: `#1D2026` (charcoal)
- Additional brand colors: darkGray, slate, oliveGray, blush, steel, white

Use these via Tailwind classes: `bg-brand-primary`, `text-brand-accent`, etc.

## shadcn/ui Integration

shadcn/ui is configured and ready to use:

```bash
# Add components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input

# View available components
npx shadcn@latest view @shadcn
```

- **Configuration**: `components.json` (New York style, TypeScript)
- **Import alias**: `@/` maps to `src/`
- **Utilities**: `src/lib/utils.ts` - contains `cn()` helper for class merging
- **UI Components**: Will be installed to `src/components/ui/`

## Framer Motion Integration

Framer Motion is set up for animations:

```jsx
// Example usage in React components
import { motion } from 'framer-motion'

// Fade in animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Slide in from left
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Content
</motion.div>
```

- **Client Directives**: Use `client:load`, `client:visible`, or `client:idle` for animated components
- **Performance**: Consider `client:visible` for scroll-triggered animations
- **Brand Animations**: Can be combined with custom brand colors and shadcn/ui components

## File Organization

```
src/
├── layouts/BaseLayout.astro    # Main layout wrapper
├── pages/index.astro          # Homepage
├── components/               # Reusable components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Services.astro
│   ├── motion/               # Animated React components
│   └── ui/                   # shadcn/ui components (auto-generated)
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
└── styles/global.css         # Global styles and Tailwind imports
```

## Development Notes

- **React Integration**: React components work alongside Astro components
- **Client Directives**: Use appropriate client directives for React components:
  - `client:load` - Hydrates immediately on page load
  - `client:visible` - Hydrates when component enters viewport (ideal for animations)
  - `client:idle` - Hydrates when browser is idle
- **Animations**: Framer Motion components need client-side hydration
- **shadcn/ui**: Components work in Astro with client-side directives when needed
- **Tailwind CSS**: Variables configured for shadcn/ui design tokens
- **Brand Colors**: Custom colors preserved alongside shadcn/ui tokens
- **Font Loading**: Optimized with preconnect and optional display
- **TypeScript**: Configured with import aliases (@/\*)
- **No test framework currently configured**

## Design Guidelines

- **No Emojis**: NEVER use emojis in any component or text. Always use Lucide React icons instead for visual elements
- **Icons**: Use Lucide React icons (imported from `lucide-react`) for all iconography needs
- **Consistency**: Maintain visual consistency by using proper icon components rather than emoji characters
