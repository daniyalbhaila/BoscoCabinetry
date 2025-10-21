// Shared company information and content
// Used across multiple components and pages

export const companyInfo = {
  name: 'Bosco Cabinetry',
  tagline: 'Luxury without the luxury price tag',

  // Contact Information
  contact: {
    phone: {
      number: '+1-647-766-7744',
      display: '(647) 766-7744',
      href: 'tel:+1-647-766-7744'
    },
    email: {
      address: 'info@boscocabinetry.ca',
      href: 'mailto:info@boscocabinetry.ca'
    }
  },

  // Physical Location
  location: {
    address: {
      street: '85 Brisbane Rd',
      city: 'North York',
      province: 'ON',
      postalCode: 'M3J 2K3',
      full: '85 Brisbane Rd, North York, ON M3J 2K3',
      display: '85 Brisbane Rd<br>North York, ON M3J 2K3'
    },
    coordinates: {
      lat: 43.7615,
      lng: -79.4665,
      zoom: 15
    },
    showroom: {
      size: '5,500 sq ft',
      description: '5,500 sq ft North York showroom',
      location: 'North York Location'
    },
    facility: {
      description: 'our facility',
      location: 'North York'
    }
  },

  // Business Hours
  hours: {
    monday: { open: '10:00 AM', close: '7:00 PM' },
    tuesday: { open: '10:00 AM', close: '7:00 PM' },
    wednesday: { open: '10:00 AM', close: '7:00 PM' },
    thursday: { open: '10:00 AM', close: '7:00 PM' },
    friday: { open: '10:00 AM', close: '7:00 PM' },
    saturday: { open: '10:00 AM', close: '5:00 PM' },
    sunday: 'By Appointment Only',
    display: {
      weekdays: 'Monday - Friday: 10:00 AM - 7:00 PM',
      saturday: 'Saturday: 10:00 AM - 5:00 PM',
      sunday: 'Sunday: By Appointment Only'
    }
  },

  // Company Stats & Features
  stats: {
    experience: '100+ projects',
    showroomSize: '5,500 sq ft',
    finishOptions: '100+ finishes'
  },

  // Service Areas
  serviceAreas: [
    { city: 'Toronto', region: 'Downtown Core' },
    { city: 'North York', region: 'North Toronto' },
    { city: 'Scarborough', region: 'East Toronto' },
    { city: 'Pickering', region: 'Durham Region' },
    { city: 'Whitby', region: 'Durham Region' },
    { city: 'Vaughan', region: 'York Region' },
    { city: 'Richmond Hill', region: 'York Region' },
    { city: 'Markham', region: 'York Region' },
    { city: 'Barrie', region: 'Simcoe County' },
    { city: 'Etobicoke', region: 'West Toronto' },
    { city: 'Mississauga', region: 'Peel Region' },
    { city: 'Brampton', region: 'Peel Region' },
    { city: 'Oakville', region: 'Halton Region' },
    { city: 'Burlington', region: 'Halton Region' },
    { city: 'Hamilton', region: 'City of Hamilton' },
    { city: 'Guelph', region: 'Wellington County' },
    { city: 'Kitchener', region: 'Waterloo Region' },
    { city: 'Niagara Falls', region: 'Niagara Region' }
  ],

  // Project Types
  projectTypes: [
    { value: 'kitchen-cabinets', label: 'Kitchen Cabinets' },
    { value: 'custom-closets', label: 'Custom Closets' },
    { value: 'built-ins', label: 'Built-Ins & Media Walls' },
    { value: 'full-home-cabinetry', label: 'Full Home Cabinetry' },
    { value: 'multiple-projects', label: 'Multiple Projects' },
    { value: 'other', label: 'Other' }
  ],

  // Timelines
  timelines: {
    consultation: 'within 48 hours',
    manufacturing: 'varies by project',
    installation: 'varies by project',
    total: '2-4 weeks to 10-12 weeks depending on complexity',
    emailResponse: 'within 24 hours'
  },

  // URLs
  urls: {
    googleReviews: 'https://maps.app.goo.gl/YBFNcghn4mcuqdNw8'
  },

  // Social Media
  social: {
    facebook: 'https://www.facebook.com/boscocabinetrycan/',
    instagram: 'https://www.instagram.com/bosco.cabinetry',
    linkedin: 'https://linkedin.com/company/bosco-cabinetry/',
    tiktok: 'https://www.tiktok.com/@boscocabinetry'
  }
};

// Holike Partnership Data
export const holikePartnership = {
  status: 'Exclusive Canadian Distributor',
  company: 'Holike Creative Home',
  established: '2002',
  stats: {
    showrooms: '2,000+',
    manufacturing: '1,000,000 sqm',
    facilities: '4 manufacturing bases',
    employees: '4,000+',
    technology: 'German HOMAG equipment',
    production: {
      kitchens: '1,200 sets/day',
      wardrobes: '2,500 sets/day'
    },
    markets: ['North America', 'Southeast Asia', 'Global']
  },
  certifications: ['CARB', 'NAF', 'SGS', 'Japanese F4 Star', 'ISO9001', 'ISO14001'],
  benefits: {
    homeowners: [
      'Globally-proven quality and reliability',
      'Advanced German manufacturing technology',
      'Eco-certifications for healthier homes',
      'Scale to handle any project size',
      'Local Toronto expertise and service'
    ],
    trade: [
      'Scalable manufacturing capacity',
      'Proven global supply chain',
      'Technical support and training',
      '5-year warranty program',
      'German precision equipment'
    ]
  }
};

// Sustainability Information
export const sustainability = {
  naf: {
    title: 'Zero-Added Formaldehyde (NAF) Materials',
    description: 'Every cabinet uses special adhesives with no added formaldehyde—meeting strict EPA and CARB standards for healthier homes.',
    certifications: ['EPA', 'CARB', 'F4 Star'],
    benefits: [
      'Protects your health and the environment',
      'No harmful VOC emissions',
      'Meets strict California Air Resources Board (CARB) standards',
      'EPA certified for indoor air quality'
    ]
  },
  bamboo: {
    title: 'Innovative Bamboo Board Technology',
    description: 'Made from highly sustainable bamboo which grows 30 times faster than hardwoods.',
    benefits: [
      'Grows 30x faster than hardwoods',
      'Zero-added formaldehyde (NAF)',
      'Advanced air-cleaning technology',
      'Highly renewable and sustainable',
      'CARB, EPA, and F4 Star certified'
    ]
  },
  nanoClean: {
    title: 'Nano-Clean Air Technology',
    description: 'Advanced technology that continuously purifies indoor air using negative oxygen ions.',
    features: [
      'Breaks down harmful chemicals like formaldehyde and toluene into harmless substances',
      'Antibacterial coating prevents harmful bacteria growth',
      'Mold prevention and protection',
      'No electricity needed—works 24/7 naturally',
      'Powered by negative oxygen ions'
    ],
    howItWorks: 'Using a special nano-coating that releases negative oxygen ions, this system provides triple purification: active air cleaning, antibacterial protection, and mold prevention—all without requiring power or maintenance.'
  },
  sourcing: {
    title: 'Sustainable Sourcing',
    description: 'We prioritize renewable resources and formaldehyde-free adhesives to minimize environmental impact.',
    commitment: 'At Bosco Cabinetry, we are proud to contribute to Canada\'s growing focus on sustainable building practices.'
  }
};

// Company description variations for different contexts
export const companyDescriptions = {
  hero: 'Explore 100+ finishes in our 5,500 sq ft North York showroom. Bring your own design or work with Bosco Cabinetrys\'s in-house designer to create kitchens, closets, and full-home renovations that fit your lifestyle. Luxury without the luxury price tag.',
  about: 'With 100+ completed projects, Bosco Cabinetry specializes in custom kitchen cabinets, closet systems, and built-in units. Visit our North York showroom to explore over 100 finish options.',
  aboutOrigin: 'Founded by Toronto custom-home builders who saw homeowners struggling with impossible choices: overpriced luxury brands, cheap big-box cabinets, or mid-range options with zero flexibility. We created Bosco Cabinetry to bring builder-backed expertise, luxury finishes, and accessible prices to Toronto.',
  contact: 'Get your free consultation and quote within 48 hours. Let\'s bring your vision to life.',
  serviceAreaExpanded: `
    <div class="space-y-6">
      <div>
        <h3 class="text-xl font-bold mb-3">Toronto Custom Kitchen Cabinets</h3>
        <p>From condos in downtown Toronto to luxury homes in Rosedale and Forest Hill, we design and install custom kitchen cabinets that maximize space, functionality, and style. Our Toronto kitchen cabinet clients benefit from our 5,500 sq ft North York showroom where they can see 100+ finish options in person.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">North York Cabinetry Showroom</h3>
        <p>Located at 85 Brisbane Rd, our North York showroom and design center welcomes homeowners to explore custom kitchen cabinets, walk-in closet systems, bathroom vanities, and built-in cabinetry with our in-house designers.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Vaughan Custom Home Cabinetry</h3>
        <p>Vaughan's growing community of custom homes and luxury developments benefit from our builder partnerships. We provide custom cabinetry solutions for new home builds, renovations, and whole-home cabinetry projects across Vaughan and York Region.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Markham & Richmond Hill Kitchen Renovations</h3>
        <p>Richmond Hill and Markham homeowners trust Bosco Cabinetry for kitchen renovations, custom closet systems, and built-in units. Our proximity to York Region makes us the ideal partner for Markham and Richmond Hill cabinetry projects.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Mississauga Custom Cabinets</h3>
        <p>From Mississauga condos to detached homes, we deliver custom kitchen cabinets and closet systems with the same quality and service that Toronto clients experience. Our Mississauga cabinet clients appreciate our transparent pricing and showroom experience.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Scarborough & Etobicoke Cabinetry Services</h3>
        <p>Scarborough and Etobicoke homeowners benefit from our local Toronto expertise and builder-backed reliability. Whether it's a condo kitchen renovation in Scarborough or a custom closet system in Etobicoke, we bring proven experience from 100+ completed projects to every job.</p>
      </div>
    </div>
  `
};
