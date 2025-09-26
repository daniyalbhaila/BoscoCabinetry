# Pages Plan - Bosco Cabinetry Website

> **Goal**: Plan and structure 30+ pages prioritized by SEO/ROI value and commercial intent using componentized approach.

**Based on**: PAGE_ROADMAP.md (search volume and commercial value analysis)

## Phase-Based Implementation (ROI-Prioritized)

### 🏗️ PHASE 1: Core Foundation Pages (Build First)
**Priority**: Immediate | **Business Impact**: Foundation + High Conversion

- [ ] **Homepage** (`/`) - Already exists, will be componentized [$$$$$]
- [ ] **About Us** (`/about`) - Trust, story, credibility [$$$]
- [ ] **Contact** (`/contact`) - Lead capture, map, showroom info [$$$$$]
- [ ] **Gallery/Portfolio** (`/portfolio`) - Showcase work, boost trust [$$$$]
- [ ] **Reviews/Testimonials** (`/reviews`) - Social proof, conversion [$$$$]

### 🔥 PHASE 2: High Search Volume + High Commercial Intent
**Priority**: Immediate | **Est. Revenue Impact**: 80% of organic leads

- [ ] **Kitchen Cabinets** (`/services/kitchen-cabinets`) - 8,100+ searches [$$$$$]
- [ ] **Custom Closets** (`/services/custom-closets`) - 3,600+ searches [$$$$]
- [ ] **Kitchen Renovations Toronto** (`/services/kitchen-renovations-toronto`) - 2,900+ searches [$$$$$]
- [ ] **Kitchen Renovations Mississauga** (`/services/kitchen-renovations-mississauga`) - 1,600+ searches [$$$$$]
- [ ] **Toronto (cabinetry services)** (`/areas/toronto`) - 4,400+ searches [$$$$]
- [ ] **Bathroom Renovations** (`/services/bathroom-renovations`) - 2,400+ searches [$$$$]

### 💰 TIER 2: Medium-High Volume + Strong Commercial Intent
**Priority**: High | **Build After**: Phase 2 performing

- [ ] **Bathroom Renovations Toronto** (`/services/bathroom-renovations-toronto`) - 1,100+ searches [$$$$]
- [ ] **Mississauga** (`/areas/mississauga`) - 2,200+ searches [$$$]
- [ ] **Oakville** (`/areas/oakville`) - 1,800+ searches [$$$]
- [ ] **Walk-In Closets** (`/services/walk-in-closets`) - 1,900+ searches [$$$$]
- [ ] **Condo Renovations** (`/services/condo-renovations`) - 720+ searches [$$$$]
- [ ] **Kitchen Renovations Near Me** (`/local/kitchen-renovations-near-me`) - 3,300+ searches [$$$$$]
- [ ] **Cabinetry Near Me** (`/local/cabinetry-near-me`) - 1,400+ searches [$$$$]
- [ ] **Financing Options** (`/financing`) - 480+ searches [$$$$$]

### 📈 TIER 3: Strategic SEO + AEO Opportunities
**Priority**: Medium | **Focus**: Voice search and trust building

- [ ] **FAQ** (`/faq`) - High AEO value [$$$]
- [ ] **Kitchen Islands** (`/services/kitchen-islands`) - 2,700+ searches [$$$]
- [ ] **Home Office Built-ins** (`/services/home-office-built-ins`) - 880+ searches [$$$]
- [ ] **Kitchen Cabinet Cost Guide** (`/guides/kitchen-cabinet-costs`) - 1,600+ searches [$$$$]
- [ ] **Custom vs Semi-Custom Cabinets** (`/guides/custom-vs-semi-custom`) - 320+ searches [$$$]

### 🎯 TIER 4: Foundation + Supporting Pages
**Priority**: Medium | **Build When**: Core pages established

- [ ] **Design Consultation** (`/design-consultation`) - Lead generation [$$$$$]
- [ ] **Process/How It Works** (`/process`) - Trust building [$$$]
- [ ] **Burlington** (`/areas/burlington`) - Local SEO [$$]
- [ ] **Vaughan** (`/areas/vaughan`) - Local SEO [$$]

### ⏳ TIER 5: Long-term Content & Niche
**Priority**: Low | **Build**: After Tier 1-4 performing

- [ ] **Pantry Organization** (`/services/pantry-organization`) - Long-tail SEO [$$]
- [ ] **Laundry Room Cabinets** (`/services/laundry-room-cabinets`) - Niche market [$$]
- [ ] **Design Ideas Gallery** (`/inspiration`) - Engagement [$$]
- [ ] **Spring Renovation Planning** (`/seasonal/spring-renovations`) - Seasonal [$$]
- [ ] **Sustainability** (`/about/sustainability`) - Brand differentiation [$$]

## Page Template Patterns

### Service Page Template
**Components needed**: PageHero, ServicesSection, ProcessSection, TestimonialSection, ContactSection

**Content structure**:
```typescript
{
  hero: { title, subtitle, backgroundImage, cta },
  serviceDetails: { description, features, benefits },
  process: { steps, timeline },
  testimonials: { reviews, featured },
  contact: { formConfig, contactInfo }
}
```

### Portfolio Page Template
**Components needed**: PageHero, PortfolioGrid, TestimonialSection, ContactSection

**Content structure**:
```typescript
{
  hero: { title, subtitle, filterTags },
  projects: { items, categories, layout },
  testimonials: { featured },
  contact: { cta }
}
```

### Info Page Template
**Components needed**: PageHero, TextSection, FAQSection, ContactSection

**Content structure**:
```typescript
{
  hero: { title, subtitle },
  content: { sections, images, callouts },
  faqs: { items },
  contact: { variant: 'compact' }
}
```

## Development Strategy

### Week 1: Foundation
1. Build core components (PageHero, SectionWrapper, etc.)
2. Create 2-3 test pages to validate approach
3. Set up content management structure

### Week 2-3: Service Pages
1. Build service-specific components
2. Create service page template
3. Deploy 5-8 service pages

### Week 4: Portfolio & Info
1. Build portfolio components
2. Create portfolio and info page templates
3. Deploy remaining high-priority pages

### Week 5-6: Remaining Pages
1. Service area pages (simple landing pages)
2. Resource pages (content-heavy)
3. SEO optimization and final touches

## Content Requirements by Page Type

### Service Pages Content Needed:
- Service descriptions and benefits
- Process explanations
- Image galleries
- Pricing information
- FAQ sections specific to service
- Testimonials related to service

### Portfolio Pages Content Needed:
- Project images (before/after)
- Project descriptions and details
- Client testimonials
- Case study writeups
- Technical specifications

### Info Pages Content Needed:
- Process documentation
- Material specifications
- Warranty information
- Financing details
- Installation guides
- Maintenance instructions

## SEO Considerations

### URL Structure
- Clean, descriptive URLs
- Service-focused keywords
- Location-based pages for local SEO
- Logical hierarchy and navigation

### Content Strategy
- Unique content for each page
- Local SEO optimization
- Service-specific long-tail keywords
- FAQ sections for voice search
- Schema markup for services and reviews

## Success Metrics

- **Page Load Speed**: All pages under 3 seconds
- **Mobile Performance**: 90+ Lighthouse score
- **SEO Ready**: Proper meta tags, structured data
- **Consistent Design**: Unified brand experience
- **Easy Maintenance**: Quick updates via component system

---

**Next Steps**: Begin Phase 1 component development to support rapid page creation.