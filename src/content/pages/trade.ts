// Trade/Wholesale Program Page Content
import { companyInfo } from "../shared.ts";

export const tradePageContent = {
  // Hero Section
  hero: {
    title:
      "Cabinetry Solutions for Contractors, Builders & Designers in the GTA",
    subtitle:
      "Semi-custom and fully custom cabinetry, stone slabs, wall paneling, and interior doors from a global manufacturing leader. Backed by professional design services, trade pricing, and priority production.",
    stats: [
      { value: "1M sq ft", label: "State-of-the-art facility" },
      { value: "1,200+ sets/day", label: "Production capacity" },
      { value: "ISO 9001", label: "Quality certified" },
      { value: "Builder-founded", label: "Trade-focused" },
    ],
    ctaButtons: [
      {
        text: "Open a Trade Account",
        href: "#trade-account-form",
        variant: "primary" as const,
      },
      {
        text: "Contact Trade Team",
        href: "/#contact",
        variant: "ghost" as const,
      },
    ],
  },

  // Manufacturing Credibility Section
  manufacturing: {
    tag: "Global Manufacturing Partner",
    title: "Backed by Industrial-Scale Production",
    description:
      "Access the resources of one of the largest cabinet manufacturers. Our partnership with Holike brings world-class production capabilities to contractors and builders across Toronto, North York, Vaughan, Markham, and the entire GTA.",
    features: [
      {
        title: "Manufacturing Scale",
        icon: "factory",
        points: [
          "1,000,000+ sq ft facility",
          "1,200 kitchen sets produced daily",
          "100+ completed projects",
          "12,000+ completed global projects",
        ],
      },
      {
        title: "Quality Certifications",
        icon: "certificate",
        points: [
          "ISO 9001:2015 certified",
          "CARB P2 compliant materials",
          "NAF (No Added Formaldehyde)",
          "CE & FSC certified",
          "Greenguard Gold certified",
        ],
      },
      {
        title: "Global Reach, Local Service",
        icon: "globe",
        points: [
          "Serving 60+ countries worldwide",
          "Toronto showroom & design center",
          "Local project support team",
          "Same standards, faster timelines",
        ],
      },
    ],
  },

  // Environmental Features Section
  environmental: {
    tag: "Sustainable Materials",
    title: "Green Building Certifications & Compliance",
    description:
      "LEED-eligible materials with EPA, CARB, and CaGBC certifications. Same lead times and competitive pricing as standard materials.",
    features: [
      {
        title: "LEED Point Contribution",
        description:
          "Low-VOC, formaldehyde-free materials contribute to LEED certification points for sustainable building projects",
        icon: "award",
      },
      {
        title: "EPA & CARB Certified",
        description:
          "Zero-added formaldehyde (NAF) materials meeting strict EPA and CARB Phase 2 standards",
        icon: "shield-check",
      },
      {
        title: "CaGBC Compliance",
        description:
          "Materials meet Canada Green Building Council standards for environmentally responsible construction",
        icon: "leaf",
      },
      {
        title: "ISO 14001 Manufacturing",
        description:
          "ISO 14001 certified production processes ensuring environmental responsibility",
        icon: "wind",
      },
    ],
    ctaText: "View Sustainability Details",
    ctaHref: "/sustainability",
  },

  // Why Trade with B3 Section
  tradeAdvantages: {
    tag: "Trade Advantages",
    title: "Built for the Way You Work",
    description:
      "Founded by a builder who understands trade timelines, budgets, and expectations. We've designed our trade program around your real needs.",
    advantages: [
      {
        title: "Design Support Available",
        description:
          "Professional design consultations, material & finish selection guidance, installation support, and showroom access for client meetings.",
        icon: "palette",
      },
      {
        title: "Reliable Quality Control",
        description:
          "Pre-delivery inspections, replacement guarantee, consistent specifications, and technical documentation provided.",
        icon: "shield-check",
      },
    ],
  },

  // Trade Account Benefits
  accountBenefits: {
    tag: "Trade Account Benefits",
    title: "What's Included in Your Trade Account",
    benefits: [
      "Priority production scheduling",
      "Dedicated account manager",
      "Design consultations",
      "Showroom access for clients",
      "Technical support & drawings",
      "Sample cabinet program",
      "Professional project coordination",
      "Quality assurance & inspections",
    ],
    ctaCard: {
      title: "Ready to Get Started?",
      points: [
        "Open your trade account",
        "Provide business details - name, address, etc.",
        "Someone will be in touch",
        "Start ordering quality cabinetry and interiors",
      ],
      primaryCta: {
        text: "Apply for Trade Account",
        href: "#trade-account-form",
      },
      secondaryCta: { text: "Talk to our trade team", href: "/#contact" },
    },
  },

  // Service Area Section
  serviceArea: {
    tag: "Serving the GTA",
    title: "Local Support Across the Greater Toronto Area",
    description:
      "We serve contractors, builders, designers and developers throughout Toronto and the GTA with showroom access, site visits, and local delivery coordination.",
    cities: companyInfo.serviceAreas,
    serviceHighlights: [
      "Free showroom consultations in North York",
      "Site visit coordination across all GTA locations",
      "Local delivery scheduling and coordination",
      "Installation support available throughout the region",
    ],
    expandedContent: `
			<h3>Comprehensive Trade Coverage Across the Greater Toronto Area</h3>
			<p>As a wholesale cabinet supplier serving Toronto and the GTA, we understand that contractors, builders, and designers need a reliable local partner who can deliver premium cabinetry on time and on budget. Our North York showroom provides a convenient location for client meetings and material selection, while our logistics network ensures smooth delivery across all GTA communities.</p>

			<h4>Why Toronto Contractors Choose B3 Interiors</h4>
			<p>Toronto contractors and builders face unique challenges: tight urban construction sites, strict building codes, and demanding timelines. We've designed our trade program specifically for the Toronto market, with local inventory, fast turnaround times, and a deep understanding of GTA construction requirements.</p>

			<h4>Serving Vaughan's Growing Construction Market</h4>
			<p>Vaughan continues to be one of the fastest-growing cities in the GTA, with numerous residential developments and commercial projects. Our trade program supports Vaughan contractors with dedicated account management, priority scheduling for high-volume projects, and specialized solutions for multi-unit developments common in the area.</p>

			<h4>Markham Custom Home Builders</h4>
			<p>Markham's thriving custom home market demands premium quality and attention to detail. We supply custom home builders in Markham with high-end cabinet solutions, personalized design consultations, and the manufacturing scale to handle even the most ambitious projects. Our ISO 9001 certified production ensures consistent quality for your luxury home builds.</p>

			<h4>Mississauga Commercial & Residential Projects</h4>
			<p>From Mississauga's busy commercial corridor to its established residential neighborhoods, we serve contractors with versatile cabinet solutions. Whether you're renovating condos in downtown Mississauga or building new homes in Port Credit, our trade program provides the wholesale pricing and reliable service you need.</p>
		`,
  },

  // Product Collections
  productShowcase: {
    tag: "Cabinet Collections",
    title: "What We Supply",
    description:
      "Factory-direct supply across cabinetry and interiors, with consistent quality and scalable support for single projects through multi-unit developments.",
    collections: [
      {
        name: "Custom Kitchen Cabinetry",
        image: "kitchen",
        features: [
          "Modern frameless & shaker styles",
          "100+ finishes available",
          "Custom sizing for any space",
          "Soft-close hardware included",
        ],
        description:
          "Fully custom kitchen cabinets in modern frameless and traditional styles. Available in 100+ finishes, built to exact specifications for any project size — from single units to full developments.",
        link: "/services/kitchen-cabinets#modern",
      },
      {
        name: "Custom Closet Systems",
        image: "kitchen",
        features: [
          "Walk-in and reach-in configurations",
          "Full accessory suite available",
          "Modular design for easy spec",
          "Popular in luxury residential builds",
        ],
        description:
          "Walk-in and reach-in closet systems designed for new builds and renovations. Modular approach for easy specification, with full accessory suites available.",
        link: "/services/kitchen-cabinets#shaker",
      },
      {
        name: "Stone Slabs & Surfaces",
        image: "kitchen",
        features: [
          "Quartz, sintered stone, and more",
          "Countertops, walls, and vanities",
          "Consistent quality across projects",
          "Available for single and multi-unit supply",
        ],
        description:
          "Premium stone slabs for countertops, feature walls, and bathroom surfaces. Factory-direct supply with consistent quality across projects.",
        link: "/services/closet-systems",
      },
      {
        name: "Wall Paneling & Interior Doors",
        image: "kitchen",
        features: [
          "Matching finishes to cabinetry",
          "Standard and frameless door options",
          "Hidden hinge and integrated door options",
          "One source for full interior supply",
        ],
        description:
          "Coordinated wall paneling and interior doors in matching finishes to your cabinetry. Everything from one source for a cohesive finish throughout.",
        link: "/services/built-ins",
      },
    ],
  },

  // Materials & Finishes Section
  materials: {
    tag: "Material Options",
    title: "Comprehensive Material & Finish Selection",
    description:
      "Choose from a wide range of base materials and finishing options to match any project specification.",
    baseMaterials: {
      title: "Base Materials",
      options: [
        "Plywood",
        "Particle Board",
        "Bamboo Board",
        "MDF",
        "Solid Wood options",
      ],
    },
    finishingMaterials: {
      title: "Finishing Materials",
      options: [
        "Paint finishes (powder coated and lacquer)",
        "Variety of laminate and film finishes/coatings including melamine, PVC, PET, UV, EB",
        "Solid wood",
        "Wood veneer",
      ],
    },
  },

  // Process Steps
  process: {
    tag: "How It Works",
    title: "Your Trade Account in 4 Simple Steps",
    description:
      "We've streamlined the process so you can start ordering premium cabinets for your projects.",
    steps: [
      {
        number: 1,
        title: "Apply Online",
        description:
          "Submit business details - name, address, etc. Someone will be in touch to discuss your needs.",
        icon: "file-text",
      },
      {
        number: 2,
        title: "Explore Options",
        description:
          "Access full product line, review specifications, and material options.",
        icon: "book-open",
      },
      {
        number: 3,
        title: "Submit Projects",
        description:
          "Upload floor plans, select finishes & hardware. Our team will provide a detailed quote.",
        icon: "send",
      },
      {
        number: 4,
        title: "Order & Deliver",
        description:
          "Approve quote & timeline, production begins, delivery coordination.",
        icon: "package",
      },
    ],
  },

  // FAQs
  faqs: {
    tag: "Common Questions",
    title: "Trade Program FAQs",
    description:
      "Answers to questions from contractors, builders and designers about our trade program.",
    questions: [
      {
        question: "What are the requirements to open a trade account?",
        answer:
          "Simply provide your business details including business name, address, and contact information. Our team will review your application and someone will be in touch to discuss next steps and get you set up.",
      },
      {
        question: "What are typical lead times for projects?",
        answer:
          "Stock cabinetry can be delivered and installed in as low as 2 weeks. Custom cabinetry, it takes 8-12 weeks depending on project complexity and customization requirements.",
      },
      {
        question: "Do you offer design support for my clients?",
        answer:
          "Yes, all trade accounts include professional design consultations. We can provide rendering services to help with project presentations. You can also bring clients to our showroom for material selection meetings.",
      },
      {
        question: "What certifications do your cabinets have?",
        answer:
          "Our cabinets meet CARB P2 standards and use NAF (No Added Formaldehyde) materials. Our manufacturing facility is ISO 9001:2015 certified and products carry CE, FSC, and Greenguard Gold certifications.",
      },
      {
        question: "Can I order samples before committing to a project?",
        answer:
          "Yes, trade accounts have access to our sample program. You can order door samples, finish samples, and hardware samples to show clients. Sample costs are credited toward your first project order.",
      },
      {
        question: "What materials and finishes are available?",
        answer:
          "We offer a comprehensive range of base materials including plywood, particle board, bamboo board, MDF, and solid wood options. Finishing materials include paint finishes (powder coated and lacquer), a variety of laminate and film finishes/coatings (melamine, PVC, PET, UV, EB), solid wood, and wood veneer. We offer modern frameless, shaker, transitional, and traditional styles. Contact our trade team to discuss the best materials for your specific project requirements.",
      },
      {
        question: "Do you provide installation support?",
        answer:
          "We provide detailed installation drawings and technical support for your installers. While we don't offer installation services directly, we can recommend trusted installation partners in the GTA if needed.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We serve contractors, builders, and designers throughout Toronto, the Greater Toronto Area, and across Ontario. Our showroom is located in North York for convenient client meetings and material selection.",
      },
      {
        question: "What warranty do you offer?",
        answer:
          "Our cabinets come with a comprehensive manufacturer's warranty covering materials and workmanship. We also guarantee pre-delivery quality inspections and offer replacement for any manufacturing defects.",
      },
    ],
  },

  // Final CTA
  finalCta: {
    title: "Ready to Elevate Your Cabinet Projects?",
    description:
      "Open your trade account today and start accessing priority scheduling, dedicated support, and quality cabinetry for your GTA projects.",
    primaryAction: {
      title: "Open a Trade Account",
      points: [
        "Simple online application",
        "Our team will be in touch",
        "Start ordering quality cabinetry and interiors",
      ],
      button: { text: "Apply Now", href: "#trade-account-form" },
    },
    secondaryAction: {
      title: "Talk to Our Trade Team",
      points: [
        "Questions about the program?",
        "Need a quote for a specific project?",
        "Want to schedule a showroom visit?",
      ],
      button: { text: "Contact Trade Team", href: "/#contact" },
    },
  },
};
