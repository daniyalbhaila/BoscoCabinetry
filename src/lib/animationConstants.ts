/**
 * Animation timing constants for consistent scroll-triggered animations
 *
 * Use these values for stagger delays in AnimatedSection components
 * to maintain consistent animation timing across the site.
 */

export const ANIMATION_DELAYS = {
  /**
   * FAST - Quick succession (50ms)
   * Use for: Small lists, compact UI elements
   */
  FAST: 50,

  /**
   * QUICK - Snappy animations (70ms)
   * Use for: Form fields, small feature grids
   */
  QUICK: 70,

  /**
   * NORMAL - Standard delay (80ms)
   * Use for: Most content sections, headers, text blocks
   */
  NORMAL: 80,

  /**
   * MEDIUM - Moderate delay (100ms)
   * Use for: Feature cards, benefit lists
   */
  MEDIUM: 100,

  /**
   * SLOW - Deliberate pacing (120ms)
   * Use for: Large hero sections, primary CTAs
   */
  SLOW: 120,

  /**
   * EXTRA_SLOW - Dramatic effect (160ms)
   * Use for: Split layouts, side-by-side content
   */
  EXTRA_SLOW: 160
} as const;

/**
 * Type for animation delay values
 */
export type AnimationDelay = typeof ANIMATION_DELAYS[keyof typeof ANIMATION_DELAYS];
