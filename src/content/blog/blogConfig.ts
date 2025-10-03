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
  category: 'trade' | 'education' | 'guides';
  ogImage?: string;
}

// Blog articles configuration
export const blogArticles: BlogArticle[] = [
  {
    slug: 'importing-custom-cabinetry-from-china',
    title: 'Importing Cabinetry from China | 2025 Guide | Bosco',
    description: 'Complete guide to importing custom cabinetry from China. Learn about Holike partnership, quality standards, certifications & Toronto delivery. Expert insights ✓',
    keywords: 'importing cabinets from china, chinese cabinetry manufacturers, holike cabinets canada, overseas cabinetry import, custom cabinet sourcing',
    author: 'Bosco Cabinetry Team',
    publishDate: '2025-10-04',
    lastUpdated: '2025-10-04',
    featured: true,
    category: 'trade',
    ogImage: '/media/og-image-importing-guide.jpg'
  },
  {
    slug: 'bosco-vs-ikea-kitchen-cabinets',
    title: 'Bosco vs IKEA Cabinets | Toronto Comparison 2025 | Bosco',
    description: 'Bosco vs IKEA kitchen cabinets: Compare quality, price, installation & longevity. Real Toronto costs, expert analysis & buyer decision guide ✓',
    keywords: 'bosco vs ikea, ikea cabinets vs custom, kitchen cabinet comparison toronto, ikea alternative toronto, custom cabinets vs ikea',
    author: 'Bosco Cabinetry Team',
    publishDate: '2025-10-02',
    lastUpdated: '2025-10-02',
    featured: true,
    category: 'guides',
    ogImage: '/media/og-image-bosco-vs-ikea.jpg'
  },
  {
    slug: 'bosco-vs-home-depot-cabinets',
    title: 'Bosco vs Home Depot Cabinets | Toronto Guide 2025 | Bosco',
    description: 'Compare Bosco vs Home Depot kitchen cabinets. Quality, pricing, installation & customization options for Toronto homeowners. Make informed choice ✓',
    keywords: 'bosco vs home depot, home depot cabinets vs custom, cabinet comparison toronto, home depot alternative, custom vs big box cabinets',
    author: 'Bosco Cabinetry Team',
    publishDate: '2025-10-02',
    lastUpdated: '2025-10-02',
    featured: true,
    category: 'guides',
    ogImage: '/media/og-image-bosco-vs-homedepot.jpg'
  },
  {
    slug: 'custom-vs-semi-custom-vs-rta-cabinets',
    title: 'Custom vs Semi-Custom vs RTA Cabinets | Toronto Guide | Bosco',
    description: 'Compare custom, semi-custom & RTA cabinets: Quality, cost, installation & best fit for Toronto homes. Expert decision framework & pricing guide ✓',
    keywords: 'custom vs semi custom cabinets, rta cabinets vs custom, cabinet types comparison, kitchen cabinet options toronto, cabinet buying guide',
    author: 'Bosco Cabinetry Team',
    publishDate: '2025-10-02',
    lastUpdated: '2025-10-02',
    featured: true,
    category: 'guides',
    ogImage: '/media/og-image-cabinet-types.jpg'
  }
];

// Get article by slug
export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(article => article.slug === slug);
}

// Get all articles in a category
export function getArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter(article => article.category === category);
}

// Get featured articles
export function getFeaturedArticles(): BlogArticle[] {
  return blogArticles.filter(article => article.featured);
}

// AEO Configuration
export const aeoConfig = {
  // Schema.org types used across blog
  schemaTypes: ['Article', 'FAQPage', 'HowTo', 'BreadcrumbList'],

  // Target platforms for optimization
  targetPlatforms: ['ChatGPT', 'Perplexity', 'Google AI Overview', 'Microsoft Copilot'],

  // Content guidelines (from AEO_GUIDE.md)
  contentRules: {
    maxParagraphWords: 80,
    answerFirstStyle: true,
    questionStyleHeadings: true,
    includeTables: true,
    useAtomicParagraphs: true,
    frontLoadData: true
  }
};
