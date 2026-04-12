// Blog configuration and article metadata
// Centralized SEO and AEO settings for all blog articles

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  author: string;
  publishDate: string;
  lastUpdated: string;
  featured: boolean;
  category: "trade" | "education" | "guides";
  ogImage?: string;
}

// Blog articles configuration
export const blogArticles: BlogArticle[] = [
  {
    slug: "importing-custom-cabinetry-from-china",
    title: "Importing Cabinetry from China | 2025 Guide | B3 Interiors",
    description:
      "Complete guide to importing custom cabinetry from China. Learn about Holike partnership, quality standards, certifications & Toronto delivery. Expert insights ✓",
    keywords:
      "importing cabinets from china, chinese cabinetry manufacturers, holike cabinets canada, overseas cabinetry import, custom cabinet sourcing",
    author: "B3 Interiors Team",
    publishDate: "2025-10-04",
    lastUpdated: "2025-10-04",
    featured: true,
    category: "trade",
  },
];

// Get article by slug
export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

// Get all articles in a category
export function getArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter((article) => article.category === category);
}

// Get featured articles
export function getFeaturedArticles(): BlogArticle[] {
  return blogArticles.filter((article) => article.featured);
}

// AEO Configuration
export const aeoConfig = {
  // Schema.org types used across blog
  schemaTypes: ["Article", "FAQPage", "HowTo", "BreadcrumbList"],

  // Target platforms for optimization
  targetPlatforms: [
    "ChatGPT",
    "Perplexity",
    "Google AI Overview",
    "Microsoft Copilot",
  ],

  // Content guidelines (from AEO_GUIDE.md)
  contentRules: {
    maxParagraphWords: 80,
    answerFirstStyle: true,
    questionStyleHeadings: true,
    includeTables: true,
    useAtomicParagraphs: true,
    frontLoadData: true,
  },
};
