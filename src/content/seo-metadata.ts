// SEO Metadata Configuration for All Pages
// Optimized meta tags following best practices for Toronto cabinetry market

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalURL?: string;
  // A/B test variations
  titleVariations?: string[];
  descriptionVariations?: string[];
}

// Homepage SEO
export const homepageSEO: SEOMetadata = {
  // Primary (60 chars) - Keyword-first, emotional trigger, brand
  title:
    "Custom Cabinets Toronto | Luxury Custom Cabinetry & Renovations | B3 Interiors",
  description:
    "Transform your Toronto home with custom kitchen cabinets, closets & built-ins. 100+ finishes, 100+ completed projects, professional design. Book consultation ✓",
  keywords:
    "custom cabinets toronto, kitchen cabinets, custom closets, built-ins, cabinetry north york, luxury cabinets affordable",
  ogImage: "/media/og-image.jpg",

  // A/B Test Variations
  titleVariations: [
    "Kitchen Cabinets Toronto | 100+ Finishes | B3 Interiors", // 59 chars
    "Toronto Custom Cabinets | Kitchen & Closets | B3 Interiors", // 52 chars
    "Luxury Cabinets Toronto | Affordable | B3 Interiors", // 55 chars
    "Custom Cabinetry Toronto | Professional Design | B3 Interiors", // 55 chars
  ],
  descriptionVariations: [
    "Discover custom kitchen cabinets, closets & built-ins in Toronto. 5,500 sq ft showroom, 100+ premium finishes, expert installation. Book your free consultation today ✓", // 159 chars
    "Toronto's trusted custom cabinetry experts. Kitchen cabinets, closets, built-ins with 100+ completed projects. Luxury quality, affordable prices. Free quote ✓", // 158 chars
    "Custom cabinets designed, built & installed in Toronto. 100+ finishes in our North York showroom. Kitchen, closets, built-ins. Book free consultation ★", // 155 chars
  ],
};

// About Page SEO
export const aboutSEO: SEOMetadata = {
  // Primary (60 chars) - Trust signals, local focus
  title: "About B3 Interiors | Luxury Custom Cabinets & Interiors Toronto",
  description:
    "Founded by Toronto renovation contractors & custom-home builders. 20+ years crafting luxury kitchen cabinets with premium hardware, closets & cabinetry. Eco-certified (NAF), 5,500 sq ft showroom →",
  keywords:
    "about b3 interiors, toronto renovation contractor, custom home builders, interior design cabinetry, eco-certified cabinets, formaldehyde-free, sustainable cabinetry, holike distributor canada",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "About Us | Toronto Cabinetry Experts | B3 Interiors", // 55 chars
    "Builder-Founded Cabinetry Toronto | B3 Interiors", // 52 chars
    "Our Story | 20+ Years Custom Cabinets | B3", // 46 chars
    "B3 Interiors Toronto | Builder-Backed Excellence", // 52 chars
  ],
  descriptionVariations: [
    "Toronto custom-home builders turned cabinetry specialists. Exclusive Holike distributor. Eco-certified (CARB/NAF), 100+ completed projects, 5,500 sq ft showroom ★", // 160 chars
    "Meet the team behind Toronto's luxury custom cabinets. Builder-founded, eco-certified, 100+ finishes. Serving GTA since 2003. Learn our story →", // 145 chars
    "Builder expertise meets luxury cabinetry. 20+ years serving Toronto with custom kitchens, closets & built-ins. CARB certified, showroom tours available ✓", // 157 chars
  ],
};

// Services Hub SEO
export const servicesHubSEO: SEOMetadata = {
  title: "Cabinetry Services Toronto | Design to Install | B3",
  description:
    "Kitchen cabinets, custom closets, built-ins & full-home cabinetry. Professional design, premium materials, expert installation across Toronto GTA ✓",
  keywords:
    "custom cabinetry services toronto, kitchen cabinet installation, closet systems, built-in units, full home cabinetry",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Toronto Cabinetry Services | Kitchen & Closets | B3", // 55 chars
    "Custom Cabinet Services Toronto | B3 Interiors", // 50 chars
    "Cabinetry Solutions Toronto | Design & Install | B3", // 55 chars
  ],
  descriptionVariations: [
    "Complete cabinetry solutions for Toronto homes. Kitchens, closets, built-ins & full-home projects. Professional design, premium finishes, expert installation →", // 160 chars
    "Explore custom cabinetry services: kitchen cabinets, walk-in closets, built-ins, bathroom vanities. 20+ years Toronto expertise. Free consultation available ★", // 160 chars
  ],
};

// Kitchen Cabinets Service Page SEO
export const kitchenCabinetsSEO: SEOMetadata = {
  // Already optimized in content file, but providing variations
  title: "Kitchen Cabinets Toronto | Design to Install | B3",
  description:
    "Transform your Toronto kitchen with custom cabinets designed, built & installed by experts. 100+ finishes, flexible timelines. Free consultation ✓",
  keywords:
    "custom kitchen cabinets toronto, luxury kitchen cabinets, kitchen renovation toronto, kitchen installer, kitchen cabinetry north york",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Toronto Kitchen Cabinets | Custom Design | B3", // 48 chars
    "Luxury Kitchen Cabinets Toronto | B3 Interiors", // 50 chars
    "Custom Kitchen Renovation Toronto | B3", // 42 chars
    "Kitchen Cabinets Toronto | Professional Design | B3", // 55 chars
  ],
  descriptionVariations: [
    "Expert kitchen cabinet design & installation in Toronto. 100+ luxury finishes, professional design, flexible timelines. 100+ completed projects. Book free consultation →", // 173 chars
    "Custom kitchen cabinets crafted in Toronto. Luxury quality at affordable prices. Professional design, premium materials, expert installation. Get quote ★", // 156 chars
    "Transform your Toronto kitchen with custom cabinets. Shaker, modern, traditional styles. 100+ finishes in our showroom. Professional design consultation ✓", // 157 chars
  ],
};

// Custom Closets Service Page SEO
export const customClosetsSEO: SEOMetadata = {
  title: "Custom Closets Toronto | Walk-In & Reach-In | B3",
  description:
    "Transform storage with custom walk-in closets, reach-in systems & mudroom organization. 100+ finishes, expert design, professional install. Free quote ✓",
  keywords:
    "custom closets toronto, walk-in closet systems, reach-in closets, closet organization, wardrobe systems, mudroom storage toronto",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Walk-In Closets Toronto | Custom Organization | B3", // 54 chars
    "Toronto Custom Closets | Walk-In Design | B3", // 48 chars
    "Closet Systems Toronto | Professional Install | B3", // 54 chars
    "Custom Wardrobe Toronto | Expert Organizers | B3", // 52 chars
  ],
  descriptionVariations: [
    "Custom closet solutions for Toronto homes. Walk-in wardrobes, reach-in systems, mudroom storage. Expert design, 100+ finishes, professional installation →", // 157 chars
    "Maximize storage with custom closets. Walk-in, reach-in & mudroom systems designed for Toronto homes. Free consultation, professional design, expert installation ★", // 168 chars
    "Luxury closet organization systems. Custom walk-in wardrobes & reach-in closets. Serving Toronto GTA with expert design & installation. Book consultation ✓", // 159 chars
  ],
};

// Built-ins Service Page SEO
export const builtInsSEO: SEOMetadata = {
  title: "Custom Built-Ins Toronto | Entertainment & Shelves | B3",
  description:
    "Custom built-in cabinetry for living rooms, offices & bedrooms. Entertainment units, bookshelves, window seats. Expert design & install Toronto GTA ✓",
  keywords:
    "custom built-ins toronto, entertainment units, built-in bookshelves, home office cabinets, window seats, living room storage",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Toronto Built-Ins | Entertainment Centers | B3", // 49 chars
    "Custom Built-In Cabinets Toronto | B3", // 41 chars
    "Built-In Units Toronto | Home Office | B3", // 45 chars
    "Toronto Custom Shelving | Built-In Storage | B3", // 51 chars
  ],
  descriptionVariations: [
    "Transform spaces with custom built-ins. Entertainment centers, bookshelves, home offices & window seats. Toronto design & installation experts. Get quote →", // 158 chars
    "Built-in cabinetry for Toronto homes. Living room entertainment units, office shelving, bedroom storage. Custom design, expert installation. Book consultation ★", // 163 chars - need to trim
    "Custom built-in solutions: entertainment units, bookshelves, home offices. Serving Toronto GTA with expert design & professional installation. Free quote ✓", // 158 chars
  ],
};

// Full Home Cabinetry Service Page SEO
export const fullHomeCabinetrySEO: SEOMetadata = {
  title:
    "Full-Home Interiors Toronto | Custom Cabinets, Kitchen & Bathroom Renovations | B3 Interiors",
  description:
    "Coordinated cabinetry throughout your Toronto home. Kitchens, bathrooms, closets, built-ins with unified design. One team, seamless results. Get quote ✓",
  keywords:
    "full home cabinetry toronto, whole home cabinets, complete cabinetry solutions, coordinated millwork, home renovation cabinets",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Whole Home Cabinets Toronto | Complete Design | B3", // 54 chars
    "Toronto Home Cabinetry | Kitchen to Closets | B3", // 52 chars
    "Complete Home Millwork Toronto | B3 Interiors", // 49 chars
    "Full Home Renovation Cabinets Toronto | B3", // 46 chars
  ],
  descriptionVariations: [
    "Complete home cabinetry from kitchen to closets. Coordinated design, unified finishes, one expert team. Serving Toronto GTA. Free whole-home consultation →", // 158 chars
    "Transform your entire Toronto home with coordinated cabinetry. Kitchens, bathrooms, closets & built-ins. Unified design, expert installation. Get quote ★", // 157 chars
    "Whole-home cabinetry solutions for Toronto. Coordinated kitchens, bathrooms, closets & storage. 100+ finishes, professional installation. Book consultation ✓", // 160 chars
  ],
};

// Portfolio Page SEO
export const portfolioSEO: SEOMetadata = {
  title:
    "Portfolio | Custom Cabinet & Renovation Projects Toronto | B3 Interiors",
  description:
    "Browse our custom cabinetry portfolio. Kitchen cabinets, closets, built-ins & bathroom vanities across Toronto GTA. Get inspired for your project ✓",
  keywords:
    "cabinetry portfolio toronto, kitchen cabinet gallery, custom closet examples, built-in projects, before and after cabinets",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Custom Cabinet Portfolio | Toronto Projects | B3", // 52 chars
    "Toronto Cabinetry Gallery | Kitchen & Closets | B3", // 54 chars
    "View Our Work | Custom Cabinets Toronto | B3", // 48 chars
    "Project Gallery Toronto | Cabinetry Examples | B3", // 53 chars
  ],
  descriptionVariations: [
    "Explore our Toronto cabinetry portfolio. Custom kitchens, walk-in closets, built-ins & vanities. Real projects, real results. Get inspired for your space →", // 158 chars
    "View custom cabinetry projects across Toronto GTA. Kitchen cabinets, closet systems, built-in units & more. Browse gallery for design inspiration ★", // 150 chars
    "Custom cabinet portfolio showcasing Toronto projects. Kitchens, closets, bathrooms & built-ins. Professional craftsmanship, stunning results. Explore gallery ✓", // 162 chars - need to trim
  ],
};

// Contact Page SEO
export const contactSEO: SEOMetadata = {
  title: "Contact B3 Interiors | Free Consultation Toronto",
  description:
    "Get your free custom cabinetry consultation. Call (647) 766-7744, visit our North York showroom, or book online. Serving Toronto GTA. 48-hour response ✓",
  keywords:
    "contact b3 interiors, free cabinetry consultation toronto, north york showroom, custom cabinet quote, toronto cabinetry experts",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Book Free Consultation | Toronto Cabinetry | B3", // 51 chars
    "Contact Toronto Cabinetry Experts | B3", // 42 chars
    "Get Custom Cabinet Quote Toronto | B3 Interiors", // 51 chars
    "Toronto Showroom Visit | Free Consultation | B3", // 51 chars
  ],
  descriptionVariations: [
    "Contact B3 Interiors for free consultation. Call (647) 766-7744, visit 5,500 sq ft North York showroom, or book online. Toronto GTA cabinetry experts →", // 157 chars
    "Book your free custom cabinetry consultation in Toronto. Phone, email or showroom visit. Expert design team ready to help. 48-hour response guaranteed ★", // 156 chars
    "Ready for custom cabinets? Contact us for free Toronto consultation. Visit North York showroom, call (647) 766-7744 or request quote online. Start today ✓", // 158 chars
  ],
};

// Trade/Wholesale Page SEO
export const tradeSEO: SEOMetadata = {
  title:
    "Trade Program Toronto | Wholesale Cabinets & Interiors | B3 Interiors",
  description:
    "Builder & designer trade program. Wholesale custom cabinets, LEED-compatible materials, dedicated support. Exclusive Holike distributor. Join Toronto pros ✓",
  keywords:
    "trade cabinetry toronto, wholesale cabinets, builder program, designer partnership, LEED certified cabinets, green building materials, holike distributor canada, contractor cabinets",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Wholesale Cabinets Toronto | Builder Program | B3", // 53 chars
    "Toronto Builder Program | Wholesale Cabinets | B3", // 53 chars
    "Trade Partnership Toronto | Designer Program | B3", // 53 chars
    "Contractor Cabinets Toronto | Wholesale | B3", // 48 chars
  ],
  descriptionVariations: [
    "Join Toronto's premier trade cabinetry program. Wholesale pricing, volume discounts, dedicated support for builders & designers. Exclusive Holike distributor →", // 160 chars
    "Builder & designer partnership program. Wholesale custom cabinets, competitive pricing, expert support. Serving Toronto GTA trade professionals. Apply now ★", // 159 chars
    "Wholesale cabinet solutions for Toronto builders & designers. Trade pricing, reliable delivery, quality guaranteed. Exclusive Holike distributor. Join today ✓", // 160 chars
  ],
};

// Sustainability Page SEO
export const sustainabilitySEO: SEOMetadata = {
  title:
    "Sustainable Cabinetry & Interiors Toronto | Eco-Friendly & Formaldehyde-Free | B3 Interiors",
  description:
    "Healthier homes through eco-friendly cabinetry. Zero-added formaldehyde (NAF), air-purifying technology, EPA & CARB certified. Sustainable options for Toronto ✓",
  keywords:
    "sustainable cabinets toronto, formaldehyde-free cabinets, low VOC kitchen cabinets, eco-friendly cabinetry, green building materials, LEED certified cabinets, healthy home materials, air purifying cabinets, NAF materials, CARB certified",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Eco-Friendly Cabinets Toronto | Low VOC | B3", // 48 chars
    "Formaldehyde-Free Cabinets Toronto | B3 Interiors", // 53 chars
    "Green Building Materials Toronto | Sustainable Cabinets | B3", // 63 chars - trim to "Sustainable Cabinets Toronto | LEED Compatible | B3" // 56 chars
    "Healthy Home Cabinets Toronto | NAF Certified | B3", // 54 chars
  ],
  descriptionVariations: [
    "Eco-friendly kitchen cabinets with zero-added formaldehyde (NAF). Air-purifying bamboo technology, EPA & CARB certified. Healthier Toronto homes at competitive prices →", // 170 chars - needs trim
    "Sustainable cabinetry for Toronto homeowners. Low-VOC, formaldehyde-free materials. LEED-compatible, air-purifying technology. Competitive pricing on eco options ★", // 164 chars - needs trim
    "Protect your family with formaldehyde-free cabinets. EPA & CARB certified, air-purifying technology. Sustainable options across all product lines. Toronto GTA ✓", // 161 chars - needs trim to 160
  ],
};

// Thank You Page SEO
export const thankYouSEO: SEOMetadata = {
  title: "Thank You | B3 Interiors Toronto",
  description:
    "Thank you for contacting B3 Interiors. We'll respond within 48 hours to discuss your custom cabinetry project. Toronto's trusted cabinetry experts.",
  keywords:
    "thank you, b3 interiors confirmation, consultation scheduled, toronto cabinetry",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Thank You | We'll Be In Touch Soon | B3 Interiors", // 53 chars
    "Confirmation | Toronto Cabinetry Consultation | B3", // 54 chars
  ],
  descriptionVariations: [
    "Thank you! Our Toronto cabinetry team will contact you within 48 hours. Expect design ideas, pricing info & next steps. Explore our portfolio while you wait →", // 161 chars - need to trim
    "Thanks for reaching out! We'll respond within 48 hours to discuss your Toronto cabinetry project. Browse our portfolio for inspiration while you wait ✓", // 154 chars
  ],
};

// Blog Hub SEO
export const blogHubSEO: SEOMetadata = {
  title:
    "Cabinetry & Interiors Blog Toronto | Guides & Insights | B3 Interiors",
  description:
    "Expert cabinetry blog featuring renovation guides, trade insights, and sourcing advice for Toronto homeowners and professionals. Stay informed with B3 Interiors ✓",
  keywords:
    "cabinetry blog, custom cabinet guides, renovation tips toronto, cabinetry insights, kitchen renovation advice",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "Toronto Cabinetry Blog | Expert Guides & Tips | B3", // 54 chars
    "Cabinetry Insights Toronto | Renovation Guides | B3", // 58 chars
    "Custom Cabinetry Guides | Toronto Expert Advice | B3", // 56 chars
  ],
  descriptionVariations: [
    "Explore our cabinetry blog for Toronto-focused renovation guides, finish selection tips, and sourcing insights from the B3 Interiors team. Stay ahead with pro advice →", // 160 chars
    "Discover Toronto cabinetry insights, renovation tips, and expert advice. From kitchen design to trade sourcing, B3 Interiors shares actionable guidance ★", // 159 chars
  ],
};

// Blog Post: Importing Custom Cabinetry from China
export const importingCabinetryBlogSEO: SEOMetadata = {
  title: "Importing Cabinetry from China | 2025 Guide | B3",
  description:
    "Complete guide to importing custom cabinetry from China. Learn about Holike partnership, quality standards, certifications & Toronto delivery. Expert insights ✓",
  keywords:
    "importing cabinets from china, chinese cabinetry manufacturers, holike cabinets canada, overseas cabinetry import, custom cabinet sourcing",
  ogImage: "/media/og-image.jpg",

  titleVariations: [
    "China Cabinetry Import Guide 2025 | Toronto Tips | B3", // 57 chars
    "Importing Kitchen Cabinets from China | Guide | B3", // 54 chars
    "Custom Cabinet Imports | China to Toronto | B3", // 50 chars
  ],
  descriptionVariations: [
    "Expert guide: importing custom cabinetry from China to Toronto. Quality standards, certifications, shipping & costs. Learn from exclusive Holike distributor →", // 160 chars
    "Thinking of importing cabinets from China? Complete 2025 guide covers quality, certifications, costs & delivery to Toronto. Expert insights from Holike partner ★", // 164 chars - need to trim
    "Import custom cabinets from China to Toronto. Learn about manufacturers, quality standards, CARB/NAF certification & delivery. Complete 2025 guide ✓", // 150 chars
  ],
};

// Export all SEO metadata
export const seoMetadata = {
  homepage: homepageSEO,
  about: aboutSEO,
  servicesHub: servicesHubSEO,
  kitchenCabinets: kitchenCabinetsSEO,
  customClosets: customClosetsSEO,
  builtIns: builtInsSEO,
  fullHomeCabinetry: fullHomeCabinetrySEO,
  portfolio: portfolioSEO,
  contact: contactSEO,
  trade: tradeSEO,
  sustainability: sustainabilitySEO,
  thankYou: thankYouSEO,
  blogHub: blogHubSEO,
  importingCabinetryBlog: importingCabinetryBlogSEO,
};

// Character count validation helper
export function validateSEO(metadata: SEOMetadata): {
  titleValid: boolean;
  descriptionValid: boolean;
  warnings: string[];
} {
  const warnings: string[] = [];
  const titleLength = metadata.title.length;
  const descriptionLength = metadata.description.length;

  const titleValid = titleLength >= 50 && titleLength <= 60;
  const descriptionValid = descriptionLength >= 150 && descriptionLength <= 160;

  if (!titleValid) {
    warnings.push(`Title length ${titleLength} chars (optimal: 50-60)`);
  }
  if (!descriptionValid) {
    warnings.push(
      `Description length ${descriptionLength} chars (optimal: 150-160)`,
    );
  }

  return { titleValid, descriptionValid, warnings };
}
