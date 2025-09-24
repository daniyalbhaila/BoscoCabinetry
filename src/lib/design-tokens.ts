/**
 * Bosco Cabinetry Design System
 * Complete unified design tokens - consistent radius and colors
 */

export const designTokens = {
  // UNIFIED Border Radius System
  radius: {
    button: 'rounded-full',  // Buttons use pill shape for friendliness
    card: 'rounded-lg',      // Cards, containers, inputs use rounded-lg
    container: 'rounded-lg', // Icon containers, form elements
  },

  // Color System
  colors: {
    // Button variants
    button: {
      primary: {
        background: 'bg-brand-accent',           // Beige
        text: 'text-brand-charcoal',
        hover: 'hover:bg-[#E6E0CD]',
      },
      secondary: {
        background: 'bg-white/10',               // Ghost/transparent
        text: 'text-white',
        hover: 'hover:bg-white/15',
        backdrop: 'backdrop-blur',
      },
      outline: {
        background: 'bg-transparent',
        text: 'text-brand-accent',
        border: 'border border-brand-accent/30',
        hover: 'hover:bg-brand-accent/10',
      }
    },

    // Card variants
    card: {
      background: 'bg-gradient-to-b from-white/[0.06] to-white/[0.03]',
      border: 'border border-brand-darkGray/40',
      hover: 'hover:border-brand-accent/50',
    },

    // Container variants (icon boxes, etc)
    container: {
      background: 'bg-white/10',
      text: 'text-white',
    },

    // Form elements
    input: {
      background: 'bg-white',
      text: 'text-brand-charcoal',
      border: 'border border-brand-accent/40',
      placeholder: 'placeholder-brand-darkGray/50',
      focus: 'focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20',
    },

    // Section backgrounds
    section: {
      primary: 'bg-brand-charcoal',     // Main dark background
      accent: 'bg-brand-accent/5',      // Light beige sections
      transparent: 'bg-transparent',    // Hero overlay sections
    }
  },

  // Component Classes - Ready to use
  components: {
    // Button classes
    buttonPrimary: 'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium bg-brand-accent text-brand-charcoal hover:bg-[#E6E0CD] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:opacity-50 disabled:pointer-events-none',

    buttonSecondary: 'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium bg-white/10 text-white hover:bg-white/15 backdrop-blur transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:opacity-50 disabled:pointer-events-none',

    // Card classes
    card: 'rounded-lg border border-brand-darkGray/40 bg-gradient-to-b from-white/[0.06] to-white/[0.03] transition-all hover:border-brand-accent/50',

    // Container classes
    iconContainer: 'rounded-lg bg-white/10 flex items-center justify-center',

    // Input classes
    input: 'rounded-lg border border-brand-accent/40 bg-white px-4 py-3 text-brand-charcoal placeholder-brand-darkGray/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20',
  }
} as const;