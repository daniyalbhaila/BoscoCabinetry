// Structured Data (Schema.org) Configuration
// Comprehensive schema markup for all page types

import { companyInfo, holikePartnership } from "./shared";

const OG_IMAGE_ABSOLUTE = "https://b3interiors.ca/media/og-image.jpg";

// Helper to generate BreadcrumbList schema
export function generateBreadcrumbs(
  items: Array<{ name: string; url?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `https://b3interiors.ca${item.url}` }),
    })),
  };
}

// LocalBusiness Schema (Homepage)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://b3interiors.ca/#business",
  name: companyInfo.name,
  description:
    "Custom kitchen cabinets, closets, and built-ins serving Toronto and the Greater Toronto Area. Builder-founded with 100+ completed projects.",
  url: "https://b3interiors.ca",
  logo: "https://b3interiors.ca/logo.png",
  image: OG_IMAGE_ABSOLUTE,
  telephone: companyInfo.contact.phone.number,
  email: companyInfo.contact.email.address,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: companyInfo.location.address.street,
    addressLocality: companyInfo.location.address.city,
    addressRegion: companyInfo.location.address.province,
    postalCode: companyInfo.location.address.postalCode,
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: companyInfo.location.coordinates.lat.toString(),
    longitude: companyInfo.location.coordinates.lng.toString(),
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
      description: "By Appointment Only",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: companyInfo.serviceAreas.map((area) => ({
    "@type": "City",
    name: area.city,
    containedInPlace: {
      "@type": "State",
      name: "Ontario",
    },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Custom Cabinetry Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Kitchen Cabinets",
          description:
            "Luxury custom kitchen cabinets with professional design and installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Closet Systems",
          description: "Walk-in and reach-in closet organization systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Built-in Units",
          description:
            "Custom built-in entertainment centers, bookshelves, and storage",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Whole Home Cabinetry",
          description: "Coordinated custom cabinetry throughout entire home",
        },
      },
    ],
  },
  sameAs: [companyInfo.urls.googleReviews],
};

// Service Schema Generator
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://b3interiors.ca${service.url}#service`,
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://b3interiors.ca/#business",
      name: companyInfo.name,
      telephone: companyInfo.contact.phone.number,
      url: "https://b3interiors.ca",
    },
    areaServed: (
      service.areaServed || companyInfo.serviceAreas.map((a) => a.city)
    ).map((city) => ({
      "@type": "City",
      name: city,
    })),
    ...(service.image && { image: service.image }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Options`,
      itemListElement: [
        {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "CAD",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "0",
            priceCurrency: "CAD",
            description: "Free consultation and quote",
          },
        },
      ],
    },
  };
}

// Kitchen Cabinets Service Schema
export const kitchenCabinetsServiceSchema = generateServiceSchema({
  name: "Custom Kitchen Cabinets",
  description:
    "Professional custom kitchen cabinet design, manufacturing, and installation in Toronto and GTA. 100+ premium finishes, flexible timelines, expert installation.",
  url: "/services/kitchen-cabinets",
  image: OG_IMAGE_ABSOLUTE,
});

// Custom Closets Service Schema
export const customClosetsServiceSchema = generateServiceSchema({
  name: "Custom Closet Systems",
  description:
    "Walk-in closets, reach-in systems, and mudroom organization. Expert design and professional installation across Toronto GTA.",
  url: "/services/custom-closets",
  image: OG_IMAGE_ABSOLUTE,
});

// Built-ins Service Schema
export const builtInsServiceSchema = generateServiceSchema({
  name: "Custom Built-in Units",
  description:
    "Entertainment centers, bookshelves, home offices, and window seats. Custom built-in cabinetry for every room.",
  url: "/services/built-ins",
  image: OG_IMAGE_ABSOLUTE,
});

// Whole Home Cabinetry Service Schema
export const fullHomeCabinetryServiceSchema = generateServiceSchema({
  name: "Whole Home Cabinetry",
  description:
    "Coordinated custom cabinetry throughout your entire Toronto home. Unified design from kitchen to closets and beyond.",
  url: "/services/full-home-cabinetry",
  image: OG_IMAGE_ABSOLUTE,
});

// Organization Schema (About Page)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://b3interiors.ca/#organization",
  name: companyInfo.name,
  alternateName: "B3 Custom Cabinetry Toronto",
  description:
    "Custom kitchen cabinets, closets, and cabinetry in Toronto. Exclusive Canadian distributor of Holike. Builder-founded, eco-certified.",
  foundingDate: "2003",
  address: {
    "@type": "PostalAddress",
    streetAddress: companyInfo.location.address.street,
    addressLocality: companyInfo.location.address.city,
    addressRegion: companyInfo.location.address.province,
    postalCode: companyInfo.location.address.postalCode,
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: companyInfo.location.coordinates.lat.toString(),
    longitude: companyInfo.location.coordinates.lng.toString(),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: companyInfo.serviceAreas.map((area) => ({
    "@type": "City",
    name: area.city,
  })),
  knowsAbout: [
    "Custom Kitchen Cabinets",
    "Closet Systems",
    "Sustainable Cabinetry",
    "NAF Cabinets",
    "CARB Certified Cabinets",
    "Holike Partnership",
  ],
};

// FAQ Page Schema Generator
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ImageObject Schema Generator
export function generateImageSchema(
  images: Array<{
    url: string;
    caption?: string;
    width?: number;
    height?: number;
  }>,
) {
  return images.map((img) => ({
    "@type": "ImageObject",
    url: img.url,
    width: img.width || 1200,
    height: img.height || 800,
    ...(img.caption && { caption: img.caption }),
  }));
}

// WebPage Schema Generator
export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; url?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://b3interiors.ca${page.url}#webpage`,
    name: page.name,
    description: page.description,
    url: `https://b3interiors.ca${page.url}`,
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://b3interiors.ca/#website",
      name: "B3 Interiors",
      url: "https://b3interiors.ca",
    },
    about: {
      "@id": "https://b3interiors.ca/#organization",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: OG_IMAGE_ABSOLUTE,
    },
    ...(page.breadcrumbs && {
      breadcrumb: generateBreadcrumbs(page.breadcrumbs),
    }),
  };
}

// Product/Service Offering Schema
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  category?: string;
  offers?: {
    priceCurrency?: string;
    availability?: string;
    priceSpecification?: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand || companyInfo.name,
    },
    ...(product.image && { image: product.image }),
    ...(product.category && { category: product.category }),
    offers: {
      "@type": "Offer",
      priceCurrency: product.offers?.priceCurrency || "CAD",
      availability:
        product.offers?.availability || "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        description:
          product.offers?.priceSpecification ||
          "Custom quote based on project requirements",
      },
      seller: {
        "@type": "Organization",
        "@id": "https://b3interiors.ca/#organization",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
  };
}

// Export all schemas
export const structuredData = {
  localBusiness: localBusinessSchema,
  organization: organizationSchema,
  services: {
    kitchenCabinets: kitchenCabinetsServiceSchema,
    customClosets: customClosetsServiceSchema,
    builtIns: builtInsServiceSchema,
    fullHomeCabinetry: fullHomeCabinetryServiceSchema,
  },
  generators: {
    breadcrumbs: generateBreadcrumbs,
    service: generateServiceSchema,
    faq: generateFAQSchema,
    image: generateImageSchema,
    webPage: generateWebPageSchema,
    product: generateProductSchema,
  },
};
