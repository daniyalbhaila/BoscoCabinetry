# Componentization Plan - Bosco Cabinetry

> **Goal**: Transform the current homepage-specific components into a reusable component library that can support 30+ pages efficiently.

## Timeline & Phases

### Phase 1: Core Building Blocks (Priority 1) ✅ COMPLETED
**Target**: 2-3 days | **Impact**: Enables rapid page creation

- [x] **Hero.astro** - Enhanced existing hero for universal use ✅
  - Props: `titleHighlight?`, `titleRest?`, `description?`, `backgroundImage?`, `videoSrc?`, `theme`, `size`, `ctaButtons?`
  - Usage: Every page needs a hero section - now supports multiple sizes and themes

- [x] **SectionWrapper.astro** - Consistent spacing and backgrounds ✅
  - Props: `theme` (light/dark/brand/transparent), `padding` (sm/md/lg/xl), `className?`, `id?`
  - Usage: Wraps all sections for consistency

- [x] **SectionHeader.astro** - Standardized section titles ✅
  - Props: `tag?`, `title`, `description?`, `alignment`, `theme`, `size`
  - Usage: Most sections need a title block

- [x] **ContentGrid.astro** - Flexible grid system ✅
  - Props: `items[]`, `columns` (1-4), `variant` (card/minimal/icon/image), `gap`
  - Usage: Services, team, portfolio, features grids

### Phase 2: Refactor Existing Components (Priority 2) ✅ COMPLETED
**Target**: 3-4 days | **Impact**: Convert existing homepage sections to use building blocks

**CRITICAL RULES:**
- ❌ NEVER create new components or pages
- ✅ ONLY refactor existing components to use building blocks
- ✅ Keep exact same UX, styling, and functionality
- ✅ Homepage must work exactly as before
- ✅ Remove duplicate styles (now handled by building blocks)

- [x] **Services.astro** - Refactor to use building blocks ✅
  - Convert to: SectionWrapper + SectionHeader + ContentGrid (services variant)
  - Keep same data structure and functionality

- [x] **WhyBosco.astro** - Refactor to use building blocks ✅
  - Convert to: SectionWrapper + SectionHeader + ContentGrid (features variant)
  - Keep same data structure and functionality

- [x] **ProcessSection.astro** (convert existing) ✅
  - Props: `steps[]`, `title`, `description`, `variant` (timeline/grid)
  - Usage: Homepage, About, How It Works page

- [x] **Reviews.astro → TestimonialSection.astro** (refactored existing) ✅
  - Props: `reviews[]`, `title?`, `layout` (carousel/grid/featured)
  - Usage: Homepage, service pages, about page

- [x] **ContactUs.astro → ContactSection.astro** (refactored existing) ✅
  - Props: `formConfig`, `contactInfo`, `showMap?`, `variant` (full/compact)
  - Usage: Multiple pages need contact forms

- [x] **FAQSection.astro** (refactored existing) ✅
  - Props: `faqs[]`, `title`, `description`, `variant` (accordion/grid)
  - Usage: Homepage, service pages, support page

### Phase 3: Content Management & Templates (Priority 3)
**Target**: 2-3 days | **Impact**: Enables rapid page deployment

- [ ] **Content Structure** (`src/content/`)
  - [ ] `homepage.ts` - Homepage specific content
  - [ ] `pages/about.ts` - About page content
  - [ ] `pages/services/` - Service-specific content files
  - [ ] `shared.ts` - Contact info, company details

- [ ] **Page Templates**
  - [ ] Service page template (for kitchen, closet, built-in pages)
  - [ ] Info page template (about, process, team pages)
  - [ ] Portfolio page template
  - [ ] Contact page template

### Phase 4: Advanced Components (Priority 4)
**Target**: 1-2 days | **Impact**: Enhanced functionality

- [ ] **PortfolioGrid.astro** - Project showcase
  - Props: `projects[]`, `filterTags?`, `layout`, `lightbox?`

- [ ] **TeamGrid.astro** - Team member showcase
  - Props: `members[]`, `layout` (grid/list), `showBios?`

- [ ] **PricingSection.astro** - Service pricing display
  - Props: `packages[]`, `variant` (cards/table/comparison)

## The 30+ Pages Roadmap

### Immediate Pages Needed (10-15 pages)
- [ ] **Services Pages** (5-6 pages)
  - Kitchen Cabinets, Closet Systems, Built-ins, Paneling, Bathroom Vanities

- [ ] **Company Pages** (4-5 pages)
  - About Us, Our Process, Showroom, Team, Careers

- [ ] **Support Pages** (3-4 pages)
  - Contact, FAQ, Financing, Warranty

### Secondary Pages (15-20 pages)
- [ ] **Portfolio Pages** (8-10 pages)
  - Kitchen Projects, Closet Projects, Built-in Projects, Before/After, Case Studies

- [ ] **Resource Pages** (5-7 pages)
  - Design Ideas, Material Guide, Maintenance Tips, Blog/Articles

- [ ] **Service Area Pages** (2-3 pages)
  - Toronto, North York, GTA coverage areas

## Success Metrics

### Development Speed
- **Before**: 4+ hours per new page (copy-paste-modify)
- **Target**: 30 minutes per new page (component assembly)
- **Break-even**: After 6 pages built with new system

### Consistency
- **Before**: Each page potentially different styling/behavior
- **Target**: All pages use same design system automatically

### Maintenance
- **Before**: Update requires touching multiple files
- **Target**: Update one component, fixes everywhere

## Migration Strategy

1. **Build Phase 1 components first** - Start with PageHero + SectionWrapper
2. **Create 2-3 test pages** using just these components to validate approach
3. **Convert one existing section at a time** - Start with Services → ServicesSection
4. **Update homepage** to use new components alongside old ones
5. **Build out remaining components** based on actual page needs
6. **Create page templates** and content structure
7. **Remove old monolithic components** once fully migrated

## Notes & Decisions

- **Astro-first approach**: Keep using .astro files for better performance
- **Prop-driven design**: Every component configurable via props
- **TypeScript interfaces**: Define clear prop types for all components
- **Design system consistency**: All components use shared Tailwind classes
- **Content separation**: Data lives in separate files from presentation logic

---

**Next Steps**: Complete Phase 1 components, then validate with 2-3 sample pages before proceeding to Phase 2.