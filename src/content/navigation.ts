import { companyInfo } from './shared';

// Primary navigation structure (main header)
export const primaryNavigation = [
  { label: 'Home', href: '/', slug: 'home' },
  { label: 'Services', href: '/services', slug: 'services', hasDropdown: true },
  { label: 'Trade Program', href: '/trade', slug: 'trade' },
  { label: 'About', href: '/about', slug: 'about' },
  { label: 'Contact', href: '/contact', slug: 'contact' }
];

// Services dropdown navigation (auto-generated from projectTypes)
// Filter out "other" and "multiple-projects" for navbar (keep in form dropdown)
export const servicesNavigation = companyInfo.projectTypes
  .filter(service => service.value !== 'other' && service.value !== 'multiple-projects')
  .map(service => ({
    label: service.label,
    href: `/services/${service.value.replace('_', '-')}`,
    slug: service.value
  }));

// Add "View All Services" option
servicesNavigation.push({
  label: 'View All Services',
  href: '/services',
  slug: 'all-services'
});

// Location pages navigation (auto-generated from serviceAreas)
export const locationNavigation = companyInfo.serviceAreas.map(area => ({
  label: area.city,
  href: `/locations/${area.city.toLowerCase().replace(/\s+/g, '-')}`,
  slug: area.city.toLowerCase().replace(/\s+/g, '-'),
  region: area.region
}));

// Footer navigation structure (comprehensive SEO)
export const footerNavigation = {
  services: {
    title: 'Services',
    links: servicesNavigation.slice(0, -1) // All services except "View All"
  },

  serviceAreas: {
    title: 'Service Areas',
    links: locationNavigation
  },

  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about', slug: 'about' },
      { label: 'Trade Program', href: '/trade', slug: 'trade' },
      { label: 'Our Process', href: '/process', slug: 'process' },
      { label: 'Showroom', href: '/showroom', slug: 'showroom' },
      { label: 'Reviews', href: '/reviews', slug: 'reviews' },
      { label: 'Blog', href: '/blog', slug: 'blog' },
      { label: 'Careers', href: '/careers', slug: 'careers' }
    ]
  },

  contact: {
    title: 'Get Started',
    links: [
      { label: 'Free Consultation', href: '/contact', slug: 'contact' },
      { label: 'Get a Quote', href: '/quote', slug: 'quote' },
      { label: 'Visit Showroom', href: '/showroom-visit', slug: 'showroom-visit' },
      { label: 'Financing Options', href: '/financing', slug: 'financing' }
    ]
  }
};

// Utility function to get current page from URL
export function getCurrentPage(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return 'home';
  return segments[0];
}

// Utility function to check if navigation item is active
export function isActiveNavItem(itemSlug: string, currentPath: string): boolean {
  const currentPage = getCurrentPage(currentPath);
  return itemSlug === currentPage;
}

// Breadcrumb generation utility
export function generateBreadcrumbs(pathname: string): Array<{label: string, href: string}> {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ label: 'Home', href: '/' }];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    // Convert URL segment to readable label
    let label = segment.replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Special cases for better labels
    if (segment === 'kitchen') label = 'Kitchen Cabinets';
    if (segment === 'closet') label = 'Closet Systems';
    if (segment === 'bathroom') label = 'Bathroom Vanities';
    if (segment === 'builtin') label = 'Built-in Units';

    breadcrumbs.push({
      label,
      href: currentPath
    });
  });

  return breadcrumbs;
}