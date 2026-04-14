// Custom vs Semi-Custom vs RTA Cabinets - Educational Comparison Article
// AEO-optimized for answer engines and search

export const cabinetTypesContent = {
  // Executive Summary (Answer-First for AEO)
  summary: {
    title: "Quick Answer: Which Cabinet Type Is Best?",
    verdict:
      "**Custom cabinets (like B3 Interiors) are typically best for long-term value, perfect fit, and design flexibility.** Semi-custom works for standard kitchens needing some personalization. RTA suits DIY enthusiasts with tight budgets and simple layouts.",
    keyTakeaways: [
      "Custom: Typically built to exact dimensions, 100+ finishes, 20–30+ year lifespan when built with quality materials",
      "Semi-Custom: Standard sizes with some options, typically 12–20 year lifespan depending on brand",
      "RTA (Ready-to-Assemble): Flat-pack DIY, budget-friendly, typically 5–10 year lifespan",
      "Budget range: RTA ($4,000-$8,000), Semi-Custom ($10,000-$22,000), Custom ($18,000-$35,000)",
    ],
  },

  // Cabinet Type Definitions
  definitions: {
    title: "Understanding Cabinet Types",
    types: [
      {
        type: "Custom Cabinets",
        description:
          "Built from scratch to your exact specifications. Every dimension, material, finish, and detail is tailored to your kitchen.",
        examples: "B3 Interiors, local custom cabinet makers",
        bestFor: "Unique kitchen layouts, high-end homes, long-term investment",
      },
      {
        type: "Semi-Custom Cabinets",
        description:
          "Manufactured in standard sizes but with customization options for finishes, door styles, and some modifications.",
        examples: "KraftMaid, Thomasville, Merillat",
        bestFor: "Standard kitchens needing some personalization",
      },
      {
        type: "RTA (Ready-to-Assemble) Cabinets",
        description:
          "Shipped flat-pack for DIY assembly. Pre-manufactured in standard sizes with limited customization.",
        examples: "IKEA, RTA Cabinet Store, CabinetNow",
        bestFor: "DIY enthusiasts, rental properties, tight budgets",
      },
    ],
  },

  // Comprehensive Comparison Table
  comparisonTable: {
    title: "Custom vs Semi-Custom vs RTA: Complete Comparison",
    footnote:
      "* Actual lifespan depends on materials, construction quality, and installation. Ranges shown are typical averages. It's possible to find low-end custom or high-end RTA, but it's not common.",
    categories: [
      {
        category: "Price Range (10x10 Kitchen)",
        custom: "$18,000 - $35,000",
        semiCustom: "$10,000 - $22,000",
        rta: "$4,000 - $8,000",
      },
      {
        category: "Material Quality",
        custom: "★★★★★ Solid wood, premium plywood, highest grade",
        semiCustom: "★★★★☆ Plywood or quality particleboard",
        rta: "★★☆☆☆ Particleboard, MDF, basic materials",
      },
      {
        category: "Sizing Options",
        custom: "★★★★★ Any size, built to exact dimensions",
        semiCustom:
          '★★★☆☆ Standard sizes (3" increments), limited modifications',
        rta: "★★☆☆☆ Fixed modular sizes only",
      },
      {
        category: "Finish Options",
        custom: "★★★★★ Unlimited - any color, stain, or specialty finish",
        semiCustom: "★★★★☆ 30-50 options per manufacturer",
        rta: "★★☆☆☆ 10-20 pre-set options",
      },
      {
        category: "Lead Time",
        custom: "★★★☆☆ 2-4 to 10-12 weeks depending on complexity",
        semiCustom: "★★★☆☆ 6-10 weeks",
        rta: "★★★★★ 1-2 weeks (in stock, quick ship)",
      },
      {
        category: "Installation",
        custom:
          "★★★★★ B3 Interiors provides design, delivery & installation in one package",
        semiCustom: "★★★☆☆ Professional install available (separate cost)",
        rta: "★★☆☆☆ DIY assembly required (20-40 hours)",
      },
      {
        category: "Lifespan",
        custom:
          "★★★★★ 20–30+ years when built with plywood/solid wood and premium hardware",
        semiCustom: "★★★★☆ 12–20 years depending on brand and materials",
        rta: "★★☆☆☆ 5–10 years typical; longer if all-plywood and well cared for",
      },
      {
        category: "Resale Value Impact",
        custom: "★★★★★ Often a premium selling point in Toronto homes",
        semiCustom: "★★★★☆ Recognized for good quality by buyers",
        rta: "★★☆☆☆ Generally has less impact on resale",
      },
    ],
  },

  // Detailed Cost Breakdown
  costBreakdown: {
    title: "Real Toronto Costs: 10x10 Kitchen Full Breakdown",
    scenarios: [
      {
        type: "Custom (B3 Interiors)",
        totalCost: "$18,000 - $35,000",
        breakdown: [
          {
            item: "Custom cabinet boxes (exact dimensions)",
            cost: "$10,000 - $20,000",
          },
          { item: "Custom doors & drawer fronts", cost: "$4,000 - $8,000" },
          {
            item: "Premium hardware (soft-close, organizers)",
            cost: "$1,500 - $3,000",
          },
          {
            item: "Professional design & 3D rendering",
            cost: "Included with project",
          },
          { item: "Professional installation", cost: "Included" },
          { item: "Delivery", cost: "Included" },
        ],
        notes:
          "Total cost includes everything. No hidden fees, single invoice, price locked at approval.",
      },
      {
        type: "Semi-Custom (KraftMaid/Thomasville)",
        totalCost: "$15,000 - $25,000",
        breakdown: [
          { item: "Semi-custom cabinets", cost: "$12,000 - $18,000" },
          { item: "Modifications/upgrades", cost: "$1,500 - $3,000" },
          { item: "Design fee (Home Depot/Lowe's)", cost: "$150 - $300" },
          { item: "Professional installation", cost: "$2,500 - $5,000" },
          { item: "Delivery", cost: "$200 - $400" },
          {
            item: "Filler strips (gaps from standard sizes)",
            cost: "$300 - $600",
          },
        ],
        notes:
          "Multiple invoices (store, designer, installer). Final cost can exceed quotes.",
      },
      {
        type: "RTA (IKEA/Online)",
        totalCost: "$6,000 - $12,000",
        breakdown: [
          { item: "RTA cabinet boxes & fronts", cost: "$4,000 - $7,000" },
          { item: "Basic hardware", cost: "$500 - $1,000" },
          { item: "Delivery", cost: "$200 - $500" },
          {
            item: "DIY assembly time (20-40 hrs @ $50/hr value)",
            cost: "$1,000 - $2,000",
          },
          { item: "OR Professional assembly/install", cost: "$2,000 - $4,000" },
        ],
        notes:
          "True cost includes your time or installer fees. Tool purchase may be needed ($200-$400).",
      },
    ],
  },

  // Decision Framework
  decisionMatrix: {
    title: "Which Cabinet Type Fits Your Needs?",
    scenarios: [
      {
        scenario: "Long-Term Home (15+ years)",
        recommendation: "Custom Cabinets (B3 Interiors)",
        reasoning:
          "Typically the best cost-per-year value. $25,000 custom cabinets lasting 25 years = $1,000/year. RTA cabinets at $6,000 lasting 7 years = $857/year, but you'll need 3 sets over 25 years ($18,000 total).",
      },
      {
        scenario: "Unique Kitchen Layout (Angles, Odd Dimensions)",
        recommendation: "Custom Cabinets (B3 Interiors)",
        reasoning:
          "Only custom can fit non-standard spaces perfectly. Semi-custom and RTA require filler strips, wasting space and money.",
      },
      {
        scenario: "Standard Kitchen, Moderate Budget",
        recommendation: "Semi-Custom (KraftMaid, Thomasville)",
        reasoning:
          "Good balance of quality and customization for kitchens with standard dimensions.",
      },
      {
        scenario: "Rental Property or Flip",
        recommendation: "RTA Cabinets",
        reasoning:
          "Lower upfront cost acceptable when lifespan doesn't matter. Easy to install, easy to replace.",
      },
      {
        scenario: "DIY Enthusiast with Time",
        recommendation: "RTA Cabinets",
        reasoning:
          "Save $2,000-$4,000 on installation if you enjoy DIY projects and have 20-40 hours available (depending on layout and experience).",
      },
      {
        scenario: "Resale Value Priority",
        recommendation: "Custom Cabinets (B3 Interiors)",
        reasoning:
          "Custom cabinets are often a premium selling point in Toronto homes. Buyers typically recognize quality and value homes with custom features.",
      },
    ],
  },

  // Common Mistakes
  commonMistakes: {
    title: "Top 5 Mistakes When Choosing Cabinet Type",
    mistakes: [
      {
        mistake: "Choosing RTA for Permanent Homes",
        why: "RTA cabinets typically last 5-10 years. You'll often spend more replacing them multiple times than buying quality once.",
        solution:
          "Invest in custom or semi-custom for homes you'll keep 10+ years.",
      },
      {
        mistake: "Forgetting Installation Costs",
        why: "Semi-custom quotes often exclude $2,500-$5,000 installation. RTA 'savings' disappear if you hire installers.",
        solution: "Compare total installed cost, not cabinet cost alone.",
      },
      {
        mistake: "Assuming Semi-Custom = Custom",
        why: "Semi-custom is still limited to standard sizes. You'll have gaps requiring expensive filler strips.",
        solution:
          "True custom (B3 Interiors) builds to exact dimensions, maximizing every inch.",
      },
      {
        mistake: "Underestimating RTA Assembly Time",
        why: "IKEA estimates 'a few hours' but reality is 20-40 hours for a full kitchen, depending on layout and experience. Complex rail system, heavy lifting required.",
        solution:
          "Value your time correctly or budget for professional assembly.",
      },
      {
        mistake: "Choosing Based on Upfront Cost Only",
        why: "$25,000 custom cabinets lasting 25 years vs $6,000 RTA lasting 7 years = similar annual cost, but custom adds home value.",
        solution: "Calculate cost-per-year and factor in resale value impact.",
      },
    ],
  },

  // FAQs
  faqs: [
    {
      question:
        "What's the difference between custom and semi-custom cabinets?",
      answer:
        'Custom cabinets are built from scratch to your exact dimensions - any size, any configuration. Semi-custom cabinets are manufactured in standard sizes (usually 3" increments: 15", 18", 24", etc.) but offer options for finishes and door styles. Only custom can perfectly fit non-standard spaces without filler strips.',
    },
    {
      question: "Are RTA cabinets good quality?",
      answer:
        "RTA cabinets offer basic quality suitable for rentals or temporary solutions. They typically use particleboard or MDF construction with melamine finish, lasting 5-10 years (longer if all-plywood and well cared for). Fine for budget-conscious DIYers, but typically not comparable to solid wood custom cabinets in durability or longevity.",
    },
    {
      question: "How long do custom cabinets last compared to RTA?",
      answer:
        "Custom solid wood cabinets typically last 20-30+ years when built with quality materials and proper care. Semi-custom plywood cabinets last 12-20 years depending on brand. RTA particleboard cabinets last 5-10 years typically. Over 25 years, you'd often replace RTA cabinets multiple times vs once for custom, making custom more cost-effective long-term.",
    },
    {
      question: "Can semi-custom cabinets fit any kitchen?",
      answer:
        'No. Semi-custom cabinets come in standard sizes (3" increments). If your kitchen width is 122", you\'ll need to use filler strips to close gaps, wasting space and money. Custom cabinets build to exact 122" dimension, maximizing storage.',
    },
    {
      question: "Is it worth paying more for custom cabinets?",
      answer:
        "Typically yes, for long-term homes (10+ years). Custom cabinets often offer better ROI through: (1) longer lifespan (20-30+ years vs 5-10), (2) perfect fit (no wasted space), (3) often higher resale value, (4) unlimited design options. Cost-per-year is often comparable to replacing cheaper cabinets.",
    },
    {
      question:
        "How much does it cost to install RTA vs custom cabinets in Toronto?",
      answer:
        "RTA installation costs $2,000-$4,000 if you hire pros, or 20-40 hours of your time for DIY (depending on layout and experience). B3 Interiors provides design, delivery, and professional installation in one package. Other brands may quote cabinets only, with installation as a separate cost. When comparing total costs, the gap narrows significantly.",
    },
  ],

  // Final CTA
  cta: {
    title: "Ready to Choose the Right Cabinets for Your Toronto Home?",
    description:
      "B3 Interiors offers custom, semi-custom, and RTA cabinetry — so you can choose based on your budget, timeline, and long-term goals. Visit our showroom to see the quality difference between cabinet types, and let our designers guide you to the best option.",
    primaryAction: {
      text: "Book Free Consultation",
      href: "/#contact",
    },
    secondaryAction: {
      text: "Visit Our Showroom",
      href: "/about#showroom",
    },
  },
};
