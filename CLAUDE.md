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

## Deployment

**Hosting Platform**: Netlify (auto-deploy from GitHub)

- **Repository**: Connected to GitHub master branch
- **Auto-deploy**: Pushes to `master` trigger automatic builds
- **Build command**: `npm run build` (configured in `netlify.toml`)
- **Publish directory**: `dist/`
- **Deployment time**: ~2-3 minutes per deploy
- **Configuration files**:
  - `netlify.toml` - Build settings and security headers
  - `public/_headers` - HTTP headers including Content Security Policy

### Deployment Workflow
1. Make changes and commit to git
2. Push to `master` branch: `git push`
3. Netlify automatically detects push and starts build
4. Monitor deployment in Netlify dashboard
5. Changes live at production URL after successful build

## Tracking Scripts & Analytics

**Current Tracking**: Google Analytics + HubSpot (with Meta Pixel integration)

### Adding New Tracking Scripts - Standard Operating Procedure

**IMPORTANT**: This site uses Content Security Policy (CSP) for security. All external scripts must be explicitly allowed in the CSP configuration.

#### Step 1: Add Script to BaseLayout
Add the tracking script to `src/layouts/BaseLayout.astro` in the `<head>` section:

```astro
<!-- Start of [Service Name] Code -->
<script type="text/javascript" id="[script-id]" async defer src="https://example.com/tracking.js"></script>
<!-- End of [Service Name] Code -->
```

**Placement**: Add after existing tracking scripts (Google Analytics, HubSpot) and before Structured Data (JSON-LD)

#### Step 2: Update Content Security Policy
Add the script domains to `public/_headers` in the CSP `script-src` directive.

**RECOMMENDED APPROACH: Use wildcards for third-party services**

Wildcards prevent "whack-a-mole" issues with regional servers and new features:

```
Content-Security-Policy: script-src 'self' https://*.service-domain.com;
```

**Common Tracking Services (Wildcard Format):**
- **HubSpot**: `https://*.hs-scripts.com https://*.hs-analytics.net https://*.hs-banner.com https://*.hscollectedforms.net https://*.hsadspixel.net`
- **Meta Pixel (Facebook)**: `https://connect.facebook.net https://*.facebook.com https://*.facebook.net`
- **Google Analytics**: `https://www.googletagmanager.com https://www.google-analytics.com` (no wildcards needed)

**Why Wildcards?**
- Covers all regional servers (na1, na3, eu1, etc.)
- Automatically allows new service features
- Still secure (only allows specific service subdomains)
- Standard industry practice for third-party tracking

**Example - Adding a New Service:**
```
# Before
script-src 'self' https://existing.com;

# After (with wildcards)
script-src 'self' https://existing.com https://*.newservice.com;
```

#### Step 3: Test Locally
```bash
npm run build
npm run preview
```
Open browser DevTools Console and verify:
- No CSP errors (look for "Content Security Policy" warnings)
- Script loads successfully in Network tab
- No JavaScript errors in Console

#### Step 4: Deploy and Verify
```bash
git add .
git commit -m "Add [tracking service] tracking code"
git push
```

**After Netlify deployment completes:**
1. Open production site in **private/incognito window** (avoids ad blockers)
2. Open DevTools Console (F12)
3. Check for CSP errors or blocked scripts
4. Verify script loads in Network tab
5. Confirm tracking in service's dashboard (may take 5-10 minutes)

#### Common Issues and Solutions

**Problem**: Script shows as "blocked" in DevTools
- **Cause**: Missing domain in CSP `script-src`
- **Solution**: Add script domain to `public/_headers` CSP configuration
- **Best Practice**: Use wildcards (`https://*.service.com`) to avoid future blocks

**Problem**: CSP error: "Refused to load script"
- **Cause**: Protocol mismatch or missing `https://` in CSP
- **Solution**: Ensure domain in CSP uses `https://` (not `//` or `http://`)

**Problem**: Multiple CSP errors from same service (different subdomains)
- **Cause**: Service uses regional servers (e.g., na1, na3, eu1) or multiple features
- **Solution**: Use wildcards instead of individual domains: `https://*.hs-scripts.com` instead of `https://js-na1.hs-scripts.com https://js-na3.hs-scripts.com`

**Problem**: Script loads but tracking doesn't work
- **Cause**: May need additional CSP directives (`connect-src`, `img-src`, `frame-src`)
- **Solution**: Check service documentation for all required domains and add to appropriate CSP directives

**Problem**: Works locally but blocked in production
- **Cause**: `public/_headers` not deployed or cached
- **Solution**: Wait for Netlify deployment, clear browser cache, test in incognito

**Problem**: New tracking feature breaks after service update
- **Cause**: Service added new subdomain not covered by CSP
- **Solution**: Switch to wildcard format to future-proof configuration

### Current Tracking Configuration

**Location**: `src/layouts/BaseLayout.astro` (lines 71-82)

**Installed Tracking:**
1. **Google Analytics** (ID: G-GQTH54CJ0C)
   - Domain: `https://www.googletagmanager.com`
2. **HubSpot** (ID: 342675669)
   - Wildcard domains: `https://*.hs-scripts.com`, `https://*.hs-analytics.net`, `https://*.hs-banner.com`, `https://*.hscollectedforms.net`, `https://*.hsadspixel.net`
   - Covers all regional servers and tracking features
3. **Meta Pixel (Facebook)** - Integrated with HubSpot
   - Domains: `https://connect.facebook.net`, `https://*.facebook.com`, `https://*.facebook.net`
   - Enables Facebook advertising and conversion tracking

**CSP Configuration**: `public/_headers` (line 9)
- Uses wildcard format for HubSpot and Facebook domains
- Future-proof: automatically supports new regional servers and features

## Architecture Overview

This is an Astro-based website for Bosco Cabinetry with a **componentized architecture** designed to support 30+ pages efficiently:

- **Framework**: Astro 4.x with React and Tailwind CSS integration
- **UI Components**: shadcn/ui integrated for reusable components and blocks
- **Animations**: Framer Motion for smooth animations and transitions
- **Styling**: Tailwind CSS with custom brand color palette and Poppins font
- **Architecture Pattern**: Building blocks system with reusable components
- **Main Layout**: `src/layouts/BaseLayout.astro` - provides base HTML structure with header
- **Components**: Modular component library in `src/components/` using building blocks pattern
- **Content Management**: Centralized content in `src/content/shared.ts` for consistency
- **Pages**: Scalable page system using component composition

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

## Building Blocks Architecture

This project uses a **building blocks** approach for maximum reusability and maintainability:

### Core Building Blocks (Phase 1 ✅ Complete)
- **`Hero.astro`** - Universal hero section with flexible themes, sizes, and CTAs
- **`SectionWrapper.astro`** - Consistent spacing, backgrounds, and container widths
- **`SectionHeader.astro`** - Standardized section titles with center/split layouts
- **`ContentGrid.astro`** - Flexible grid system for services/features/reviews

### Component Categories
- **Layout Components**: `SectionWrapper`, `SectionHeader` - structural elements
- **Content Components**: `ContentGrid`, `Hero` - flexible content presentation
- **Section Components**: `ContactUs`, `FAQSection`, `ProcessSection` - full page sections
- **UI Components**: `src/components/ui/` - shadcn/ui design system components
- **Icon Components**: `src/components/icons/` - local SVG icon library

### Development Speed Impact
- **Before**: 4+ hours per new page (copy-paste-modify approach)
- **After**: 30 minutes per new page (component assembly)
- **Break-even**: After 6 pages built with new system

## File Organization

```
src/
├── layouts/BaseLayout.astro    # Main layout wrapper
├── pages/index.astro          # Homepage (demonstrates building blocks usage)
├── components/               # Component library
│   ├── Hero.astro           # ✅ Universal hero (enhanced)
│   ├── SectionWrapper.astro # ✅ Layout container
│   ├── SectionHeader.astro  # ✅ Section titles
│   ├── ContentGrid.astro    # ✅ Flexible grid system
│   ├── ContactUs.astro      # Full contact section
│   ├── FAQSection.astro     # Accordion FAQ component
│   ├── ProcessSection.astro # Process steps component
│   ├── Header.astro         # Site navigation
│   ├── ui/                  # shadcn/ui components (auto-generated)
│   └── icons/               # Local SVG icon components
├── content/                  # Content and data management
│   ├── shared.ts            # Company info, contact details, shared data
│   └── pages/               # Page-specific content files
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
└── styles/global.css         # Global styles and Tailwind imports
```

## Content Management

**Shared Company Information**: All reusable company data (contact info, addresses, business hours, project types, timelines) is centralized in `src/content/shared.ts`:

```typescript
import { companyInfo, companyDescriptions } from '../content/shared.ts';

// Access company data
companyInfo.contact.phone.display    // "(416) 123-4567"
companyInfo.location.address.full    // "123 Industrial Road, North York, ON M3J 2K9"
companyInfo.timelines.total          // "4-6 weeks from approval"
companyInfo.projectTypes             // Array of project type options
companyDescriptions.contact          // Contact section description
```

This ensures consistency across all components and makes updates easier when company information changes.

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

- **No Emojis**: NEVER use emojis in any component or text. Always use local SVG icon components instead for visual elements
- **Icons**: Use local SVG icon components from `src/components/icons/` for all iconography needs
- **Icon Creation Process**:
  1. Check [Lucide GitHub repo](https://github.com/lucide-icons/lucide/tree/main/icons) for the icon file name (uses kebab-case like `chevron-down.svg`)
  2. Download the SVG using curl:
     ```bash
     curl -s https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/{icon-name}.svg
     ```
  3. Create a new `.astro` file in `src/components/icons/` using PascalCase (e.g., `ChevronDown.astro`)
  4. Use this template structure:
  ```astro
  ---
  const { class: className, ...props } = Astro.props;
  ---
  <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
  >
      <!-- Copy path/rect/circle elements from curl output here -->
  </svg>
  ```

  5. Import and use: `import ChevronDown from './icons/ChevronDown.astro';`
- **Icon Standards**: All icons should be 24x24 viewBox, use `currentColor` for stroke, and accept className props
- **Consistency**: Maintain visual consistency by using proper local icon components rather than emoji characters or external libraries
- **Screenshots**: AVOID using screenshots and Playwright unless absolutely necessary as they use too many tokens. Prefer using the screenshot-website-fast MCP tool over Playwright only when screenshots are essential

## Component Development Workflow

**IMPORTANT**: This project uses a building blocks architecture to support 30+ pages efficiently.

### Development Process
1. **Check `BUILDING_BLOCKS.md` first** - See documented components and their props
2. **Reference `COMPONENTIZATION_PLAN.md`** - Follow the phased implementation plan
3. **Use building blocks** - Compose new sections from existing building blocks
4. **Update documentation** - Add new components to `BUILDING_BLOCKS.md` when created

### Building Block Composition Pattern
```astro
<!-- RECOMMENDED: Use building blocks to create new sections -->
<SectionWrapper theme="light" id="new-section">
  <SectionHeader
    tag="New Section"
    title="Section Title"
    description="Section description"
    layout="center"
    theme="light"
  />
  <ContentGrid
    items={sectionData}
    variant="features"
  />
</SectionWrapper>
```

### Component Creation Guidelines
- **Prefer building blocks**: Use existing `SectionWrapper`, `SectionHeader`, `ContentGrid`
- **Props-driven design**: All components accept props for customization
- **Theme variants**: Support light/dark themes consistently
- **Content from shared.ts**: Pull data from centralized content files
- **TypeScript interfaces**: Define clear prop types for all components
- **Performance first**: Prefer Astro components over React for static content

### Quality Standards
- **Responsive design**: Mobile-first approach with proper breakpoints
- **Accessibility**: Proper ARIA labels and semantic HTML structure
- **Brand consistency**: Use established brand colors and typography patterns
- **DRY principle**: Avoid duplicating styles or functionality across components

## Creating New Pages - DRY Architecture Guide

**CRITICAL**: This website is built with a DRY (Don't Repeat Yourself) architecture supporting 30+ pages. ALWAYS reuse existing components and patterns.

### 🔍 Before Creating ANY New Code - Check These Resources:

1. **`src/components/`** - Full component library (building blocks, sections, UI components)
2. **`src/content/shared.ts`** - Centralized company data (contact info, addresses, hours)
3. **`BUILDING_BLOCKS.md`** - Complete building blocks documentation with props
4. **`src/pages/index.astro`** - Reference implementation showing component composition
5. **`src/styles/global.css`** - Unified design system (buttons, gradients, forms)

### 🚫 What NOT to Create (Already Exists):

- **Contact sections** → Use `ContactUs.astro`
- **Hero sections** → Use `Hero.astro` with props
- **FAQ sections** → Use `FAQSection.astro`
- **Process/steps** → Use `ProcessSection.astro`
- **Feature grids** → Use `ContentGrid.astro` variant="features"
- **Service lists** → Use `ContentGrid.astro` variant="services"
- **Review sections** → Use `Reviews.astro` or `ContentGrid.astro` variant="reviews"
- **CTA sections** → Use existing CTA patterns or `SectionWrapper` + `Button.astro`
- **Form components** → Use utility classes: `.form-input-light`, `.form-input-dark`
- **Button components** → Use `Button.astro` (supports all variants)

### ✅ New Page Creation Pattern:

```astro
---
// src/pages/new-page.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import SectionWrapper from '../components/SectionWrapper.astro';
import SectionHeader from '../components/SectionHeader.astro';
import ContentGrid from '../components/ContentGrid.astro';
import ContactUs from '../components/ContactUs.astro';
import { companyInfo } from '../content/shared.ts';

// Page-specific data (keep minimal - most data should come from shared.ts)
const pageData = {
  hero: {
    title: "New Page Title",
    subtitle: "Page description using brand voice",
    backgroundImage: "/images/page-bg.jpg"
  },
  features: [
    // Only create new data if it's truly page-specific
    // Otherwise, reference companyInfo or shared content
  ]
};
---

<BaseLayout title="New Page - Bosco Cabinetry">
  <!-- Hero - Always use Hero.astro -->
  <Hero
    title={pageData.hero.title}
    subtitle={pageData.hero.subtitle}
    backgroundImage={pageData.hero.backgroundImage}
    theme="dark"
    size="large"
    showCTA={true}
  />

  <!-- Content sections - Use building blocks -->
  <SectionWrapper theme="light" id="content">
    <SectionHeader
      tag="Section Tag"
      title="Section Title"
      description="Section description"
      layout="center"
      theme="light"
    />
    <ContentGrid
      items={pageData.features}
      variant="features"
    />
  </SectionWrapper>

  <!-- Contact - Always reuse ContactUs.astro -->
  <ContactUs />
</BaseLayout>
```

### 🎯 Page Type Patterns:

#### Service Pages
```astro
<!-- Use Hero + ContentGrid(services) + ProcessSection + ContactUs -->
<Hero theme="dark" size="large" />
<ContentGrid variant="services" />
<ProcessSection />
<ContactUs />
```

#### About/Company Pages
```astro
<!-- Use Hero + ContentGrid(features) + Stats + Reviews + ContactUs -->
<Hero theme="light" size="medium" />
<ContentGrid variant="features" />
<Reviews />
<ContactUs />
```

#### Portfolio/Gallery Pages
```astro
<!-- Use Hero + ProjectGallery + FeaturedProject + ContactUs -->
<Hero theme="dark" size="small" />
<ProjectGallery />
<FeaturedProject />
<ContactUs />
```

### 📊 Content Strategy:

#### Use Shared Content (src/content/shared.ts):
```typescript
// ✅ GOOD - Reference shared data
import { companyInfo, companyDescriptions } from '../content/shared.ts';

const pageContent = {
  contact: companyInfo.contact,
  businessHours: companyInfo.hours,
  serviceAreas: companyInfo.serviceAreas,
  description: companyDescriptions.services
};
```

#### Avoid Duplicating Data:
```typescript
// ❌ BAD - Don't hardcode what's already in shared.ts
const pageContent = {
  phone: "(416) 123-4567",  // Already in companyInfo.contact.phone
  address: "123 Industrial Road",  // Already in companyInfo.location
  hours: "Mon-Fri 9-6"  // Already in companyInfo.hours
};
```

### 🎨 Design System Usage:

#### Use Existing Design Patterns:
```astro
<!-- ✅ GOOD - Use established patterns -->
<div class="gradient-card-light border border-brand-accent/40 rounded-2xl p-8">
  <Button variant="primary" size="lg">Call to Action</Button>
</div>

<!-- ❌ BAD - Don't create custom styling -->
<div style="background: linear-gradient(...); border: 1px solid #DAD2BF40; ...">
  <a class="custom-button">Call to Action</a>
</div>
```

#### Form Components:
```astro
<!-- ✅ GOOD - Use utility classes -->
<input class="form-input-light" type="text" placeholder="Name" />
<select class="form-select-dark">
  <option>Option</option>
</select>

<!-- ❌ BAD - Don't create custom form styling -->
<input style="padding: 12px; border: 1px solid #ccc; ..." />
```

### 📋 New Page Checklist:

1. **✅ Review existing components** - Check `src/components/` for reusable parts
2. **✅ Use shared content** - Import from `src/content/shared.ts`
3. **✅ Follow building blocks pattern** - Use `SectionWrapper`, `SectionHeader`, `ContentGrid`
4. **✅ Reuse design system** - Use `.btn`, gradient utilities, form classes
5. **✅ Include required sections** - Hero, content sections, ContactUs
6. **✅ Test responsive design** - Ensure mobile-first approach
7. **✅ Verify accessibility** - Proper headings, ARIA labels
8. **✅ Update documentation** - Add new components to `BUILDING_BLOCKS.md`

### 🚀 Development Speed Impact:
- **With DRY approach**: 30 minutes per new page
- **Without DRY approach**: 4+ hours per page
- **Break-even point**: After 6 pages, the DRY architecture saves significant time

### 📝 Remember:
- **Components exist for a reason** - Don't recreate what's already built
- **Shared content prevents errors** - One source of truth for company info
- **Building blocks scale** - Proven pattern for 30+ page websites
- **Consistency is key** - Users expect consistent experiences across pages

## Navigation & Internal Linking Guidelines

**CRITICAL**: This website uses a structured navigation system supporting 30+ pages. Follow these guidelines for all new pages and navigation updates.

### 🧭 Navigation Architecture

#### Primary Navigation Structure (Main Header)
**KEEP FOCUSED** - Only 5 core items in main navigation:
1. **Home** (`/`)
2. **Services** (`/services`) - *with dropdown*
3. **Portfolio** (`/portfolio`)
4. **About** (`/about`)
5. **Contact** (`/contact`)

#### Services Dropdown (Conversion-Focused)
**AUTO-GENERATED** from `companyInfo.projectTypes`:
- Kitchen Cabinets (`/services/kitchen-cabinets`)
- Closet Systems (`/services/closet-systems`)
- Bathroom Vanities (`/services/bathroom-vanities`)
- Built-in Units (`/services/built-ins`)
- View All Services (`/services`)

#### Footer Navigation (SEO-Focused)
**COMPREHENSIVE LINKING** - All pages accessible via footer sections:
- **Services Section**: All service types and combinations
- **Service Areas**: All 8 cities from `companyInfo.serviceAreas`
- **Company Pages**: About, Process, Showroom, Reviews, Blog
- **Contact Section**: Contact, Quote, Showroom Visit, Careers

### 📄 Adding New Pages

#### ✅ Pages That Should Be Added to Navigation:

**Core Service Pages**:
```astro
// Add to services dropdown automatically
src/pages/services/[service-type].astro
```

**Location-Specific Pages**:
```astro
// Add to footer "Service Areas" section
src/pages/locations/[city].astro
src/pages/services/[service]/[city].astro
```

**Company Pages**:
```astro
// Add to footer "Company" section
src/pages/process.astro
src/pages/showroom.astro
src/pages/financing.astro
```

#### ❌ Pages That Should NOT Be in Main Navigation:

- Individual location pages (Toronto, North York, etc.) - *Footer only*
- Service+Location combinations - *Contextual linking*
- Blog posts or case studies - *Footer or dedicated sections*
- Legal pages (Privacy, Terms) - *Footer utility section*

### 🔧 Navigation Implementation

**IMPORTANT**: Follow the complete navigation implementation plan in `NAVIGATION_IMPLEMENTATION_PLAN.md` for technical details.

#### Dynamic Navigation Configuration
**File**: `src/content/navigation.ts` (to be created)
```typescript
import { companyInfo } from './shared.ts';

export const navigation = {
  primary: [...],           // 5 core items (Home, Services, Portfolio, About, Contact)
  services: [...],          // Auto from companyInfo.projectTypes
  footer: {
    services: [...],        // Comprehensive service pages
    locations: [...],       // All cities from companyInfo.serviceAreas
    company: [...],         // About, Process, etc.
    contact: [...]          // Contact variations
  }
}
```

#### Current Navigation Status
- **Header navigation**: Currently uses hash links (#services, #about) - needs updating to page links
- **Services dropdown**: Not yet implemented - will auto-generate from projectTypes
- **Footer navigation**: Not yet implemented - will be comprehensive SEO sitemap

#### Adding New Service Types
1. **Update shared data**: Add to `companyInfo.projectTypes` in `shared.ts`
2. **Navigation updates automatically**: Dropdown and footer generate from shared data
3. **Create page**: Use service page template with building blocks
4. **No manual nav updates needed**: System is fully dynamic

#### Adding New Locations
1. **Update shared data**: Add to `companyInfo.serviceAreas` in `shared.ts`
2. **Footer updates automatically**: Service Areas section generates from shared data
3. **Create location page**: Use location page template
4. **Add contextual links**: Related services, nearby cities

### 🎯 Internal Linking Strategy

#### Homepage Internal Linking
- **Service Areas section**: Links to all location pages
- **Services section**: Links to main service category pages
- **CTA buttons**: Primary conversion paths

#### Service Pages Internal Linking
- **Breadcrumbs**: Service category → Specific service
- **Related services**: Cross-link between service types
- **Location callouts**: "Also serving Toronto, North York..." with links
- **Process links**: Link to process/consultation pages

#### Location Pages Internal Linking
- **Service showcase**: Link to service+location combinations
- **Nearby areas**: Link to neighboring cities
- **Main services**: Back-links to primary service pages

#### Footer Comprehensive Linking
- **Every page accessible**: Complete sitemap for SEO
- **Organized by intent**: Services, locations, company info
- **No clutter in main nav**: Clean user experience maintained

### 📋 New Page Development Checklist

#### Before Creating Any New Page:
1. **✅ Determine navigation placement**: Main nav, dropdown, footer, or contextual only?
2. **✅ Update shared data**: Add to `companyInfo` if it affects multiple pages
3. **✅ Check existing components**: Use building blocks, don't recreate
4. **✅ Plan internal linking**: How does this page connect to others?

#### Page Creation Process:
1. **✅ Create page file**: Use building blocks architecture
2. **✅ Add to navigation config**: If it belongs in structured navigation
3. **✅ Add contextual links**: From related pages back to this page
4. **✅ Test navigation flow**: Ensure users can find and return from page

#### SEO & Accessibility:
1. **✅ Add breadcrumbs**: For deep pages (services/locations)
2. **✅ Include related links**: Connect to similar/relevant pages
3. **✅ Update sitemap**: If implementing XML sitemap
4. **✅ Test mobile navigation**: Ensure dropdowns work on all devices

### 🚫 Navigation Anti-Patterns

#### DON'T Put These in Main Navigation:
- **Location pages** - Use service area callouts and footer
- **Every service variation** - Use dropdowns and contextual links
- **Blog posts** - Use dedicated blog section or footer
- **Legal pages** - Footer utility section only

#### DON'T Create Manual Navigation:
- **Hardcoded dropdowns** - Generate from shared data
- **Duplicate link lists** - Single source of truth in navigation.ts
- **Static footers** - Dynamic generation from company data

#### DON'T Break User Experience:
- **Too many main nav items** - 5 maximum for clean UX
- **Deep nested menus** - 2 levels maximum in dropdowns
- **Broken internal links** - Always test cross-page navigation

### 📊 Navigation Success Metrics

#### User Experience Goals:
- **≤5 items** in primary navigation
- **≤2 clicks** to reach any service page
- **100% mobile friendly** dropdown menus
- **Clear active states** showing current page

#### SEO Goals:
- **Every page accessible** via structured navigation
- **Strategic internal linking** between related content
- **Comprehensive footer** for complete site discovery
- **Location/service cross-linking** for local SEO

### 🔍 Quick Reference

#### When Adding Service Pages:
```astro
// 1. Update shared.ts
export const companyInfo = {
  projectTypes: [
    // ... existing items
    { value: 'new-service', label: 'New Service Name' }
  ]
}

// 2. Navigation updates automatically
// 3. Create page using building blocks
// 4. Add contextual internal links
```

#### When Adding Location Pages:
```astro
// 1. Update shared.ts
export const companyInfo = {
  serviceAreas: [
    // ... existing areas
    { city: 'New City', region: 'Region Name' }
  ]
}

// 2. Footer navigation updates automatically
// 3. Create page using location template
// 4. Add to homepage service areas section
```

**See `NAVIGATION_IMPLEMENTATION_PLAN.md`** for complete technical implementation details and development tasks.
