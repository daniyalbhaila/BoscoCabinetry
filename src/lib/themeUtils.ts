/**
 * Centralized Theme Utilities
 *
 * Single source of truth for all theme-related color mappings across components.
 * Use this to ensure consistent light/dark theming throughout the application.
 *
 * Usage:
 * ```typescript
 * import { getThemeClasses, type Theme } from '../lib/themeUtils';
 *
 * const theme: Theme = 'light';
 * const classes = getThemeClasses(theme);
 * // Use: classes.bg, classes.heading, classes.body, etc.
 * ```
 */

export type Theme = "light" | "dark";

/**
 * Theme class mappings for all common UI elements
 */
export const themeClasses = {
  // Background colors
  bg: {
    light: "bg-white",
    dark: "bg-brand-charcoal",
  },

  // Section-level alternate backgrounds (for visual variety)
  bgAlt: {
    light: "bg-[#f7f7f7]", // Subtle gray for light sections
    dark: "bg-[#16181c]", // Slightly darker than brand-charcoal
  },

  // Headings (h1, h2, h3)
  heading: {
    light: "text-brand-charcoal",
    dark: "text-white",
  },

  // Body text
  body: {
    light: "text-brand-darkGray",
    dark: "text-white/90",
  },

  // Muted/secondary text (70-80% opacity)
  muted: {
    light: "text-brand-darkGray/75",
    dark: "text-white/70",
  },

  // Small text (captions, labels, 60-70% opacity)
  small: {
    light: "text-brand-darkGray/70",
    dark: "text-white/60",
  },

  // Tag/eyebrow text (uppercase section labels)
  tag: {
    light: "text-brand-charcoal",
    dark: "text-brand-primary/60",
  },

  // Card backgrounds with gradients
  card: {
    light: "gradient-card-light border-brand-accent/30",
    dark: "gradient-card-dark border-white/20",
  },

  // Strong card backgrounds (higher contrast)
  cardStrong: {
    light: "gradient-card-light-subtle border-brand-accent/40",
    dark: "gradient-card-dark-strong border-brand-primary/20",
  },

  // Borders
  border: {
    light: "border-brand-accent/30",
    dark: "border-white/20",
  },

  // Subtle borders (lower opacity)
  borderSubtle: {
    light: "border-brand-accent/20",
    dark: "border-white/10",
  },

  // Interactive elements (hover states)
  interactive: {
    light: "hover:bg-brand-primary/5",
    dark: "hover:bg-white/10",
  },

  // Button text colors
  buttonText: {
    light: "text-brand-charcoal",
    dark: "text-white",
  },

  // Link colors
  link: {
    light: "text-brand-primary hover:text-brand-charcoal",
    dark: "text-brand-accent hover:text-white",
  },

  // Icon colors
  icon: {
    light: "text-brand-primary",
    dark: "text-brand-accent",
  },

  // Navigation button styles
  navButton: {
    light:
      "bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/30 text-brand-charcoal",
    dark: "bg-white/10 hover:bg-white/20 border border-white/20 text-white",
  },

  // Review card styles
  reviewCard: {
    light: "gradient-card-light border-brand-accent/30",
    dark: "gradient-card-dark border-white/20",
  },

  // Review card hover states
  reviewCardHover: {
    light: "hover:border-brand-accent/50",
    dark: "gradient-card-dark-hover",
  },
};

/**
 * Helper function to get all theme classes for a given theme
 *
 * @param theme - 'light' or 'dark'
 * @returns Object containing all theme-specific class strings
 */
export function getThemeClasses(theme: Theme = "light") {
  return {
    bg: themeClasses.bg[theme],
    bgAlt: themeClasses.bgAlt[theme],
    heading: themeClasses.heading[theme],
    body: themeClasses.body[theme],
    muted: themeClasses.muted[theme],
    small: themeClasses.small[theme],
    tag: themeClasses.tag[theme],
    card: themeClasses.card[theme],
    cardStrong: themeClasses.cardStrong[theme],
    border: themeClasses.border[theme],
    borderSubtle: themeClasses.borderSubtle[theme],
    interactive: themeClasses.interactive[theme],
    buttonText: themeClasses.buttonText[theme],
    link: themeClasses.link[theme],
    icon: themeClasses.icon[theme],
    navButton: themeClasses.navButton[theme],
    reviewCard: themeClasses.reviewCard[theme],
    reviewCardHover: themeClasses.reviewCardHover[theme],
  };
}

/**
 * Get a specific theme class by key and theme
 *
 * @param key - The theme class key (e.g., 'bg', 'heading', 'body')
 * @param theme - 'light' or 'dark'
 * @returns The theme-specific class string
 */
export function getThemeClass(
  key: keyof typeof themeClasses,
  theme: Theme = "light",
): string {
  return themeClasses[key][theme];
}
