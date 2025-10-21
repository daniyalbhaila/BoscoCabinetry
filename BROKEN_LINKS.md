# Broken Links Audit

**Generated:** 2025-10-18
**Total Broken Links Found:** 20+

---

## HIGH PRIORITY - Footer Navigation Links

These are defined in `src/content/navigation.ts` and appear in the footer sitewide:

- [ ] `/process` - "Our Process"
  - **Used in:** Footer navigation, portfolio.astro:160
- [ ] `/showroom` - "Showroom"
  - **Used in:** Footer navigation, navigation.ts:57
- [ ] `/reviews` - "Reviews"
  - **Used in:** Footer navigation, navigation.ts:58
- [ ] `/blog` - "Blog"
  - **Used in:** Footer navigation, navigation.ts:59
- [ ] `/careers` - "Careers"
  - **Used in:** Footer navigation, navigation.ts:60
- [ ] `/quote` - "Get a Quote"
  - **Used in:** Footer contact section, navigation.ts:68
- [ ] `/showroom-visit` - "Visit Showroom"
  - **Used in:** Footer contact section, navigation.ts:69
- [ ] `/financing` - "Financing Options"
  - **Used in:** Footer contact section, navigation.ts:70

---

## MEDIUM PRIORITY - Portfolio Category Pages

These are used in `src/pages/portfolio.astro:23-50`:

- [ ] `/portfolio/kitchens`
  - **Used in:** Portfolio category grid
- [ ] `/portfolio/closets`
  - **Used in:** Portfolio category grid
- [ ] `/portfolio/bathrooms`
  - **Used in:** Portfolio category grid
- [ ] `/portfolio/built-ins`
  - **Used in:** Portfolio category grid

---

## MEDIUM PRIORITY - Trade Program

- [ ] `/trade/apply` - Trade account application page
  - **Used in:**
    - `src/content/pages/trade.ts:133` - "Apply for Trade Account" CTA
    - `src/content/pages/trade.ts:341` - Primary action button

---

## LOW PRIORITY - Location Pages

These are dynamically generated in `src/content/navigation.ts:33` for service areas:

- [ ] `/locations/toronto`
- [ ] `/locations/north-york`
- [ ] `/locations/vaughan`
- [ ] `/locations/markham`
- [ ] `/locations/richmond-hill`
- [ ] `/locations/mississauga`
- [ ] `/locations/oakville`
- [ ] `/locations/etobicoke`

**Referenced in:**
- `portfolio.astro:183` - Service area links

---

## HASH LINKS TO VERIFY

These are internal hash links that need corresponding section IDs on their target pages:

### On Homepage (`/`):
- [ ] `#book-consult` - Used in WhyBosco.astro:56
- [ ] `#book-showroom` - Used in ShowroomHighlight.astro:168, CTA.astro:23
- [ ] `#get-quote` - Used in ProjectShowcase.astro:142, CTA.astro:27
- [ ] `#portfolio` - Used in ProcessSection.astro:174, ProjectGallery.astro:30
- [ ] `#directions` - Used in ShowroomHighlight.astro:171

### On Various Pages:
- [ ] `#contact` - Used on: trade.astro, service pages, FAQSection, ProcessSection, ServiceAreaSection, etc.
  - **Verify:** ContactUs component exists on all pages using this hash
- [ ] `#faq` - Used in Footer.astro:82
- [ ] `#virtual-tour` - Used in Footer.astro:83
- [ ] `/about#showroom` - Used in blog articles (boscoVsIkeaArticle.ts:201, cabinetTypesArticle.ts:250, boscoVsHomeDepotArticle.ts:240)

---

## EXTERNAL LINK PLACEHOLDERS

These external links may need updating:

- [ ] Importing article contact link - uses `{cta.contactLink}` placeholder (importing-custom-cabinetry-from-china.astro:216)

---

## SUGGESTED QUICK FIXES

### Redirect Options (No New Pages Required):
- `/quote` → `/#contact`
- `/showroom-visit` → `/#contact`
- `/reviews` → `/#reviews` (if Reviews component has ID)
- `/trade/apply` → `/#contact` (or `/trade#contact`)

### Pages to Create:
- `/process` - Process/workflow page
- `/showroom` - Dedicated showroom page
- `/blog` - Blog index page
- `/careers` - Careers/jobs page
- `/financing` - Financing options page
- Portfolio category pages (4 pages)
- Location pages (8 pages)

---

## NOTES

- Most hash links (`#contact`, `#book-consult`, etc.) will work IF the target sections have matching IDs
- Location page links are auto-generated from `companyInfo.serviceAreas`
- Portfolio categories could be converted to client-side filtering instead of separate pages
- Trade application page could be replaced with contact form + "Trade Account" form field
