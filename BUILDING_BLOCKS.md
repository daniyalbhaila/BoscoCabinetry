# Building Blocks - Bosco Cabinetry Component Library

> **Purpose**: This file documents all reusable components as they are built. Check here first before creating new components to avoid duplication and ensure consistency.

## How to Use This File

- **Before creating a component**: Check if a similar component already exists
- **After creating a component**: Document it here with props, usage examples, and notes
- **When updating a component**: Update the documentation to reflect changes

---

## Component Catalog

### Layout Components ✅
*Fundamental layout and structural components*

#### Hero.astro (Enhanced)
**Purpose**: Universal hero section for all page types with flexible theming and content options

**Props:**
```typescript
interface Props {
  titleHighlight?: string;          // Optional italic subtitle (e.g., "Beautiful")
  titleRest?: string;               // Main heading text
  kicker?: string;                  // Small badge text above title
  description?: string;             // Body text below title
  backgroundImage?: string;         // Custom background image URL
  videoSrc?: string;                // Video URL (defaults to /media/hero.mp4)
  theme?: 'dark' | 'light';        // Text and overlay theme
  size?: 'full' | 'medium' | 'compact'; // Height variants
  ctaButtons?: Array<{              // Call-to-action buttons
    text: string;
    href: string;
    variant: 'primary' | 'ghost' | 'secondary';
  }>;
}
```

**Usage Example:**
```astro
---
import Hero from '../components/Hero.astro';
---
<!-- Homepage hero with video -->
<Hero
  titleHighlight="Beautiful"
  titleRest="Custom Kitchens, Cabinets & Renovations in the GTA"
  kicker="Luxury Cabinets Made Affordable in Toronto"
  description="Explore 100+ finishes in our 5,500 sq ft North York showroom."
  theme="dark"
  size="full"
/>

<!-- Service page hero without video -->
<Hero
  titleHighlight="Custom"
  titleRest="Kitchen Cabinets Toronto"
  description="Transform your kitchen with custom cabinets designed and built in Toronto."
  theme="dark"
  size="medium"
  backgroundImage="/images/kitchen-hero.jpg"
  ctaButtons={[
    { text: 'Get Quote', href: '/#contact', variant: 'primary' },
    { text: 'View Gallery', href: '/portfolio', variant: 'ghost' }
  ]}
/>
```

**Variations:**
- Full-screen homepage hero with video background
- Medium-height service page hero with custom image
- Compact contact page hero with light theme

#### SectionWrapper.astro
**Purpose**: Consistent spacing, theming, and max-width container - extracted from actual homepage sections

**Props:**
```typescript
interface Props {
  theme?: 'light' | 'dark';        // Based on actual bg-white/bg-brand-charcoal usage
  fullHeight?: boolean;            // For min-h-screen sections like WhyBosco/Reviews
  className?: string;
  id?: string;
}
```

**Usage Example:**
```astro
---
import SectionWrapper from '../components/SectionWrapper.astro';
---
<!-- Light background section -->
<SectionWrapper theme="light" id="services">
  <!-- Section content goes here -->
</SectionWrapper>

<!-- Full height dark section -->
<SectionWrapper theme="dark" fullHeight={true} id="reviews">
  <!-- Section content goes here -->
</SectionWrapper>
```

**Notes:**
- Extracted from Services.astro, WhyBosco.astro, Reviews.astro patterns
- Uses exact classes: `relative isolate bg-white/bg-brand-charcoal`
- Standard padding: `py-20 md:py-28`
- Standard container: `mx-auto max-w-7xl px-6`

#### SectionHeader.astro
**Purpose**: Standardized section titles - extracted from actual homepage header patterns

**Props:**
```typescript
interface Props {
  tag?: string;                     // Bracketed uppercase tag
  title: string;                    // Section heading
  description?: string;             // Optional paragraph below title
  layout?: 'center' | 'split';     // Center: WhyBosco/Reviews, Split: Services
  theme?: 'light' | 'dark';
  className?: string;
}
```

**Usage Example:**
```astro
---
import SectionHeader from '../components/SectionHeader.astro';
---
<!-- Centered layout (WhyBosco pattern) -->
<SectionHeader
  tag="Why Choose Bosco"
  title="What Makes Us Different"
  description="We've been perfecting the art of custom cabinetry for over two decades."
  layout="center"
  theme="light"
/>

<!-- Split layout (Services pattern) -->
<SectionHeader
  tag="Services"
  title="How We Help You Reimagine Your Home"
  description="We design, build, and install custom cabinetry across kitchens, closets, built‑ins, and more."
  layout="split"
  theme="light"
/>
```

**Variations:**
- **center**: Max-width 3xl, centered text, mb-16 spacing (WhyBosco, Reviews)
- **split**: 12-column grid, title in 7 cols, description in 5 cols (Services)

#### ContentGrid.astro
**Purpose**: Grid system for three specific homepage patterns - Services, Features, and Reviews

**Props:**
```typescript
interface Props {
  items: Array<{
    title: string;
    description?: string;
    iconComponent?: any;             // Astro icon component (for features)
    image?: string;                  // Image URL (for services)
    link?: string;                   // Optional link URL
    cta?: string;                    // CTA text
    rating?: number;                 // Star rating (for reviews)
    name?: string;                   // Reviewer name (for reviews)
    project?: string;                // Project type (for reviews)
    verified?: boolean;              // Verification status (for reviews)
  }>;
  variant: 'services' | 'features' | 'reviews';
  className?: string;
}
```

**Usage Example:**
```astro
---
import ContentGrid from '../components/ContentGrid.astro';
import Sparkles from './icons/Sparkles.astro';

// Services pattern (from Services.astro)
const services = [
  {
    title: 'Custom Kitchen Cabinets',
    description: 'Modern kitchens designed for your home and budget.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop'
  }
];

// Features pattern (from WhyBosco.astro)
const features = [
  {
    title: 'Affordable Luxury',
    description: 'Premium quality without the luxury price tag.',
    iconComponent: Sparkles
  }
];

// Reviews pattern (from Reviews.astro)
const reviews = [
  {
    name: 'Sarah Chen',
    description: 'Absolutely blown away by the quality and attention to detail.',
    rating: 5,
    project: 'Kitchen Renovation',
    verified: true
  }
];
---
<ContentGrid items={services} variant="services" />
<ContentGrid items={features} variant="features" />
<ContentGrid items={reviews} variant="reviews" />
```

**Variants Extracted from Homepage:**
- **services**: 4-column grid with image cards, hover text overlay, floating effects
- **features**: 4-column grid with icon containers, border cards, gradient backgrounds
- **reviews**: 2-column grid with rating stars, verified badges, testimonial cards

### UI Components
*Basic interface elements and cards*

<!-- Components will be documented here as they are built -->

### Section Components
*Full page sections that can be reused across pages*

<!-- Components will be documented here as they are built -->

### Form Components
*Contact forms, quote forms, and input elements*

<!-- Components will be documented here as they are built -->

### Icon Components ✅
*Already well organized in src/components/icons/*

**Available Icons:**
- BookOpen, Building, Check, CheckCircle, ChevronDown, ChevronLeft, ChevronRight
- Clock, ExternalLink, Hammer, House, Mail, MapPin, MessageCircle
- Palette, Phone, Quote, Ruler, Sparkles, Star, Trophy, Users, Wrench

**Usage Pattern:**
```astro
---
import IconName from './icons/IconName.astro';
---
<IconName class="w-6 h-6 text-brand-primary" />
```

---

## Animation System 🎬

### AnimatedSection.astro
**Purpose**: Reusable scroll-triggered animation wrapper for consistent, performant animations across the site

**Props:**
```typescript
interface Props {
  stagger?: number | boolean;  // Animation delay between children (ms) or false to disable
  repeat?: boolean;            // Re-animate when scrolling back into view
  target?: string;             // CSS selector for child elements to stagger
  className?: string;          // Additional CSS classes to apply
}
```

**Usage Example:**
```astro
---
import AnimatedSection from './AnimatedSection.astro';
import { ANIMATION_DELAYS } from '../lib/animationConstants';
---

<!-- Simple fade-in -->
<AnimatedSection>
  <h2>This heading will fade in</h2>
  <p>This paragraph will follow</p>
</AnimatedSection>

<!-- Staggered children with custom delay -->
<AnimatedSection stagger={ANIMATION_DELAYS.NORMAL}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimatedSection>

<!-- With custom CSS classes -->
<AnimatedSection stagger={80} className="grid grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</AnimatedSection>
```

**Animation Constants:**
Use predefined delays from `src/lib/animationConstants.ts` for consistency:
```typescript
import { ANIMATION_DELAYS } from '../lib/animationConstants';

ANIMATION_DELAYS.FAST        // 50ms  - Small lists, compact UI
ANIMATION_DELAYS.QUICK       // 70ms  - Form fields, small grids
ANIMATION_DELAYS.NORMAL      // 80ms  - Most content sections
ANIMATION_DELAYS.MEDIUM      // 100ms - Feature cards, benefit lists
ANIMATION_DELAYS.SLOW        // 120ms - Large sections, primary CTAs
ANIMATION_DELAYS.EXTRA_SLOW  // 160ms - Split layouts, dramatic effect
```

**Performance Features:**
- ✅ Uses IntersectionObserver for efficient scroll detection
- ✅ Respects `prefers-reduced-motion` for accessibility
- ✅ Optimized `will-change` usage (only during animation)
- ✅ Zero layout shift on Hero sections
- ✅ Supports Astro view transitions

**Accessibility:**
- Automatically disables animations if user prefers reduced motion
- Progressive enhancement: works without JavaScript
- No animation on Hero sections to prevent CLS

**Notes:**
- Hero.astro has NO animations to prevent Cumulative Layout Shift (CLS)
- Avoid nesting more than 2 levels of AnimatedSection
- Use SectionWrapper props for container-level animations
- All animations use smooth cubic-bezier easing

---

## Component Documentation Template

When adding a new component, use this template:

### ComponentName.astro
**Purpose**: Brief description of what this component does

**Props:**
```typescript
interface Props {
  propName: string;        // Description
  optionalProp?: boolean;  // Description with default
}
```

**Usage Example:**
```astro
---
import ComponentName from '../components/ComponentName.astro';
---
<ComponentName
  propName="example value"
  optionalProp={true}
/>
```

**Variations:**
- List any variants or common prop combinations

**Notes:**
- Any special considerations or limitations
- Related components or dependencies

---

*This file will be updated as components are built. Do not add components here until they actually exist.*