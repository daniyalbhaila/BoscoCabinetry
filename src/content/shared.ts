// Shared company information and content
// Used across multiple components and pages

export const companyInfo = {
  name: 'Bosco Cabinetry',
  tagline: 'Luxury without the luxury price tag',

  // Contact Information
  contact: {
    phone: {
      number: '+1-416-123-4567',
      display: '(416) 123-4567',
      href: 'tel:+1-416-123-4567'
    },
    email: {
      address: 'info@boscocabinetry.com',
      href: 'mailto:info@boscocabinetry.com'
    }
  },

  // Physical Location
  location: {
    address: {
      street: '123 Industrial Road',
      city: 'North York',
      province: 'ON',
      postalCode: 'M3J 2K9',
      full: '123 Industrial Road, North York, ON M3J 2K9',
      display: '123 Industrial Road<br>North York, ON M3J 2K9'
    },
    showroom: {
      size: '5,500 sq ft',
      description: '5,500 sq ft North York showroom',
      location: 'North York Location'
    },
    facility: {
      description: 'North York facility',
      location: 'North York'
    }
  },

  // Business Hours
  hours: {
    monday: { open: '8:00 AM', close: '6:00 PM' },
    tuesday: { open: '8:00 AM', close: '6:00 PM' },
    wednesday: { open: '8:00 AM', close: '6:00 PM' },
    thursday: { open: '8:00 AM', close: '6:00 PM' },
    friday: { open: '8:00 AM', close: '6:00 PM' },
    saturday: { open: '9:00 AM', close: '4:00 PM' },
    sunday: 'By Appointment Only',
    display: {
      weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
      saturday: 'Saturday: 9:00 AM - 4:00 PM',
      sunday: 'Sunday: By Appointment Only'
    }
  },

  // Company Stats & Features
  stats: {
    experience: '20+ years',
    showroomSize: '5,500 sq ft',
    finishOptions: '100+ finishes',
    googleRating: '4.9/5',
    googleReviews: '200+ verified reviews'
  },

  // Service Areas
  serviceAreas: [
    { city: 'Toronto', region: 'Downtown Core' },
    { city: 'North York', region: 'North Toronto' },
    { city: 'Scarborough', region: 'East Toronto' },
    { city: 'Etobicoke', region: 'West Toronto' },
    { city: 'Vaughan', region: 'York Region' },
    { city: 'Richmond Hill', region: 'York Region' },
    { city: 'Markham', region: 'York Region' },
    { city: 'Mississauga', region: 'Peel Region' }
  ],

  // Project Types
  projectTypes: [
    { value: 'kitchen', label: 'Kitchen Cabinets' },
    { value: 'closet', label: 'Closet Organization' },
    { value: 'bathroom', label: 'Bathroom Vanity' },
    { value: 'builtin', label: 'Built-in Units' },
    { value: 'other', label: 'Other Custom Work' }
  ],

  // Timelines
  timelines: {
    consultation: 'within 48 hours',
    manufacturing: '3-4 weeks',
    installation: '1-2 weeks',
    total: '4-6 weeks from approval',
    emailResponse: 'within 24 hours'
  },

  // URLs
  urls: {
    googleReviews: 'https://www.google.com/search?q=bosco+cabinetry+reviews'
  }
};

// Company description variations for different contexts
export const companyDescriptions = {
  hero: 'Explore 100+ finishes in our 5,500 sq ft North York showroom. Work with Bosco\'s in-house designer to create kitchens, closets, and full-home renovations that fit your lifestyle. Luxury without the luxury price tag.',
  about: 'With 20+ years of experience, Bosco Cabinetry specializes in custom kitchen cabinets, closet systems, and built-in units. Visit our massive North York showroom to explore over 100 finish options.',
  contact: 'Get your free consultation and quote within 48 hours. Let\'s bring your vision to life.'
};