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
    title: 'Importing Custom Cabinetry from China to Canada: The Hassle vs. The Holike Solution',
    description: '7 essential steps to import cabinetry from China. Learn costs, risks, and why Bosco/Holike\'s local solution is smarter for Toronto contractors.',
    keywords: 'import cabinets from china, custom cabinetry import canada, holike toronto, china cabinet import costs, importing furniture from china, CBSA cabinet import',
    author: 'Bosco Cabinetry Team',
    publishDate: '2025-10-04',
    lastUpdated: '2025-10-04',
    featured: true,
    category: 'trade',
    ogImage: '/images/blog/china-import-guide.jpg'
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
