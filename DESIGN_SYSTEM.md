# Bosco Cabinetry Design System

## 1. Grid & Spacing (8-point system)

### Spacing Scale

All margins, paddings, and gaps use multiples of 4px or 8px:

- `4px` (space-1)
- `8px` (space-2)
- `12px` (space-3)
- `16px` (space-4)
- `20px` (space-5)
- `24px` (space-6)
- `32px` (space-8)
- `40px` (space-10)
- `48px` (space-12)
- `64px` (space-16)
- `80px` (space-20)

### Section Padding

- **Mobile**: `py-16` (64px)
- **Desktop**: `py-20` (80px)
- **Header/Footer**: `py-12` (48px)

### Container

- **Max Width**: `max-w-[1200px]` (consistent across all sections)
- **Horizontal Padding**: `px-6` (24px)

## 2. Typography System

### Font Family

- **Primary**: Poppins (single font family)
- **Fallback**: ui-sans-serif, system-ui, sans-serif

### Font Sizes (Consistent Scale)

- `text-sm` (14px) - Small text, captions
- `text-base` (16px) - Body text, descriptions
- `text-lg` (18px) - Large body text
- `text-xl` (20px) - Subheadings
- `text-2xl` (24px) - Card titles, H3
- `text-3xl` (30px) - Section titles, H2 mobile
- `text-4xl` (36px) - Section titles, H2 tablet
- `text-5xl` (48px) - Section titles, H2 desktop

### Font Weights

- **Regular**: `font-normal` (400) - Body text
- **Semibold**: `font-semibold` (600) - Headings, emphasis
- **Bold**: `font-bold` (700) - Special emphasis only

### Line Heights

- **Body Text**: `leading-relaxed` (1.625) for readability
- **Headings**: `leading-tight` (1.25) for impact
- **Small Text**: `leading-normal` (1.5)

### Max Line Length

- **Body Text**: `max-w-[600px]` (~75 characters)
- **Descriptions**: `max-w-[500px]` (~65 characters)

## 3. Color System (60/30/10 Rule)

### Brand Colors

```css
brand: {
  // Primary Colors (Dominant 60%)
  charcoal: "#1D2026",          // Deep backgrounds
  white: "#FFFFFF",             // Clean backgrounds, text on dark
  "light-gray": "#E6E6E6",      // Subtle backgrounds

  // Secondary Colors (30%)
  primary: "#DAD2BF",           // Warm Beige - Primary brand
  "dark-charcoal": "#393335",   // Dark text, headers
  slate: "#373C49",             // Navigation, accents

  // Accent Colors (10%)
  bronze: "#60533C",            // CTA buttons, highlights
  rose: "#D8C5BF",              // Hover states, soft accents
  powder: "#BFCBD6",            // Light accents
}
```

### Usage Guidelines

- **Backgrounds**: Predominantly `brand-charcoal`, `white`, `light-gray`
- **Text**: `brand-dark-charcoal` on light, `white` on dark
- **CTAs**: `brand-primary` with proper contrast
- **Accents**: `brand-bronze`, `brand-rose` sparingly

### Contrast Ratios

- **Text**: ≥ 4.5:1 contrast ratio
- **Large Text/UI**: ≥ 3:1 contrast ratio

## 4. Responsive Layout

### Breakpoints

- **Mobile**: `< 768px` (sm)
- **Tablet**: `768px - 1024px` (md)
- **Desktop**: `≥ 1024px` (lg)

### Grid System

- **Mobile**: 4 columns (`grid-cols-4`)
- **Tablet**: 8 columns (`md:grid-cols-8`)
- **Desktop**: 12 columns (`lg:grid-cols-12`)

### Container Behavior

- **Max Width**: 1200px
- **Horizontal Padding**: 24px
- **Center Aligned**: `mx-auto`

## 5. Touch Target Sizes

### Interactive Elements

- **Minimum Size**: 44px × 44px
- **Buttons**: `px-6 py-3` (24px × 12px padding minimum)
- **Icon Buttons**: `w-12 h-12` (48px × 48px)
- **Spacing**: Minimum 8px between touch targets

### Button Styles

```css
.btn {
  @apply inline-flex items-center justify-center gap-2
         rounded-full px-6 py-3 text-sm font-medium
         focus-visible:outline-none focus-visible:ring-2;
}

.btn-primary {
  @apply bg-brand-primary text-brand-charcoal
         hover:bg-brand-primary/90;
}

.btn-outline {
  @apply border border-current bg-transparent
         hover:bg-current hover:text-white;
}
```

## 6. Iconography & Imagery

### Icon Sizes (Grid-Aligned)

- **Small**: `w-4 h-4` (16px)
- **Medium**: `w-6 h-6` (24px)
- **Large**: `w-8 h-8` (32px)
- **XL**: `w-12 h-12` (48px)

### Image Aspect Ratios

- **Hero**: 16:9
- **Project Cards**: 4:3 or 1:1
- **Gallery**: Mixed ratios for visual interest

## 7. Motion & States

### Transitions

- **Duration**: 200-300ms
- **Easing**: `ease-in-out` or `cubic-bezier(0.25, 0.8, 0.25, 1)`
- **Hover Effects**: `transform`, `opacity`, `color`

### State Classes

```css
/* Hover States */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Focus States */
.focus-visible\:ring-2 {
  outline: 2px solid currentColor;
}

/* Disabled States */
.disabled\:opacity-50 {
  opacity: 0.5;
  pointer-events: none;
}
```

## 8. Content & Hierarchy

### Heading Hierarchy

- **H1**: Only one per page (Hero title)
- **H2**: Section titles (`text-3xl sm:text-4xl md:text-5xl`)
- **H3**: Subsection titles (`text-2xl`)
- **H4**: Card titles (`text-xl`)

### Section Structure

```astro
<section class="bg-brand-charcoal"> <!-- or bg-white -->
  <div class="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
    <!-- Header -->
    <div class="text-center mb-16">
      <p class="text-[11px] uppercase tracking-[0.2em] text-brand-primary/60 mb-4">
        [Section Label]
      </p>
      <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-6">
        Section Title
      </h2>
      <p class="text-base text-current/80 max-w-[600px] mx-auto leading-relaxed">
        Section description (max 3-4 lines)
      </p>
    </div>

    <!-- Content -->
    <!-- ... -->
  </div>
</section>
```

### Content Guidelines

- **Paragraph Length**: ≤ 4 lines per paragraph
- **Description Length**: ≤ 75 characters per line
- **Section Padding**: Consistent across all sections

## 9. Component Patterns

### Topper Pattern

```astro
<p class="text-[11px] uppercase tracking-[0.2em] text-brand-primary/60 mb-4">
  [Section Label]
</p>
```

### Card Hover Pattern

```css
.card {
  @apply transition-transform duration-300 ease-out;
}
.card:hover {
  @apply -translate-y-2 shadow-lg;
}
```

### Button System

- **Primary**: Main CTAs (brand-primary background)
- **Outline**: Secondary actions (transparent with border)
- **Ghost**: Tertiary actions (text only)

## 10. Accessibility Standards

### Color Contrast

- **Text**: 4.5:1 minimum
- **Large Text**: 3:1 minimum
- **UI Elements**: 3:1 minimum

### Focus Management

- **Visible Focus**: All interactive elements
- **Skip Links**: For keyboard navigation
- **ARIA Labels**: Descriptive labels for screen readers

### Touch Targets

- **Size**: 44px × 44px minimum
- **Spacing**: 8px minimum between targets
- **Hit Area**: Includes padding and margins

---

## Implementation Checklist

- [ ] All spacing uses 4px/8px multiples
- [ ] Typography follows defined scale (14-48px)
- [ ] Colors follow 60/30/10 rule
- [ ] Touch targets ≥ 44px
- [ ] Icons align to 16/24/32/48px grid
- [ ] Transitions 200-300ms with proper easing
- [ ] One H1 per page, logical hierarchy
- [ ] Paragraphs ≤ 4 lines
- [ ] Container max-width 1200px
- [ ] Section padding consistent (64/80px)
- [ ] Color contrast ratios met
- [ ] Responsive breakpoints implemented
