// Content Collections Configuration
import { defineCollection, z } from 'astro:content';

// Portfolio project schema
const portfolioCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // Basic Information
    title: z.string(),
    category: z.enum(['kitchen', 'bathroom', 'closet', 'built-in', 'media-wall', 'full-home', 'basement']),

    // SEO & Display
    description: z.string(), // Short description for cards and meta
    excerpt: z.string().optional(), // Optional longer excerpt
    featured: z.boolean().default(false), // Featured project flag
    order: z.number().optional(), // Custom display order (lower numbers appear first)

    // Project Details
    location: z.object({
      city: z.string(),
      province: z.string().default('Ontario'),
      neighborhood: z.string().optional(),
    }),

    completionDate: z.coerce.date().optional(), // Accepts date strings and converts to Date
    timeline: z.string().optional(), // e.g., "6 weeks"

    // Technical Details
    sqft: z.number().optional(), // Square footage
    materials: z.array(z.string()).optional(), // e.g., ["Shaker cabinets", "Quartz countertops"]
    finishes: z.array(z.string()).optional(), // e.g., ["Matte white", "Sage green"]
    hardware: z.string().optional(), // e.g., "Brushed gold handles"

    // Features & Highlights
    features: z.array(z.string()), // Key features as bullet points
    challenges: z.string().optional(), // Design challenges solved

    // Media (paths relative to assets directory)
    featuredImage: z.string(), // Path to featured image: "Portfolio/FolderName/image.jpg"
    images: z.array(z.object({
      src: z.string(), // Path to image: "Portfolio/FolderName/image.jpg"
      alt: z.string(), // Descriptive alt text for SEO
      caption: z.string().optional(), // Optional caption
    })),
    video: z.object({
      platform: z.enum(['youtube', 'vimeo']).optional(),
      id: z.string().optional(), // Video ID
      title: z.string().optional(),
    }).optional(),

    // Social Proof
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string().optional(), // e.g., "Homeowner"
    }).optional(),

    // SEO
    keywords: z.array(z.string()).optional(), // Project-specific keywords
    ogImage: z.string().optional(), // Custom OG image if different from featured

    // Related Content
    relatedServices: z.array(z.enum([
      'kitchen-cabinets',
      'custom-closets',
      'built-ins',
      'full-home-cabinetry',
      'bathroom-vanities'
    ])).optional(),

    relatedProjects: z.array(z.string()).optional(), // Array of project slugs
  }),
});

// Export collections
export const collections = {
  portfolio: portfolioCollection,
};
