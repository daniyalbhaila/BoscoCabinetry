# Image Processing SOP (Standard Operating Procedure)

## How to Crop and Rename Portfolio Images

This guide explains how to process new portfolio images for the website using our automated script.

---

## Prerequisites

1. **Node.js installed** (already set up)
2. **Sharp package installed** (run `npm install` if needed)
3. **Images placed** in appropriate folders under `src/assets/Portfolio/Ongoing/`

---

## Step-by-Step Process

### Step 1: Organize Your Images

Place raw images in a folder under `src/assets/Portfolio/Ongoing/`:

```
src/assets/Portfolio/Ongoing/
  └── Project Name/
      ├── image1.jpg
      ├── image2.jpg
      └── image3.jpg
```

**Example:**
```
src/assets/Portfolio/Ongoing/
  └── 456 Main Street/
      ├── WhatsApp Image 2024-01-15.jpg
      ├── kitchen_photo.jpg
      └── bathroom.jpg
```

### Step 2: Update the Processing Script

Open `process-images.mjs` and update the `PROJECT_FOLDERS` array:

```javascript
const PROJECT_FOLDERS = [
  '9 Percy',
  '35 Elvira',
  '48 Vincent',
  // ... existing folders ...
  '456 Main Street',  // Add your new folder here
];
```

### Step 3: Run the Processing Script

Execute the script from the project root:

```bash
node process-images.mjs
```

### What the Script Does:

1. **Renames images** to clean format: `project-name_001.jpg`, `project-name_002.jpg`, etc.
2. **Crops bottom 10%** from all images (keeps top 90%)
3. **Processes all folders** listed in `PROJECT_FOLDERS`
4. **Creates backups** (optional - modify script if needed)

### Step 4: Verify Results

Check that images were processed:

```bash
ls "src/assets/Portfolio/Ongoing/456 Main Street/"
```

You should see renamed files like:
- `456-main-street_001.jpg`
- `456-main-street_002.jpg`
- `456-main-street_003.jpg`

---

## Adding Images to Portfolio Pages

### 1. Import Images in `portfolioImages.ts`

Add imports at the top of the file:

```typescript
// Project Name (456 Main Street)
import mainstreet1 from '../assets/Portfolio/Ongoing/456 Main Street/456-main-street_001.jpg';
import mainstreet2 from '../assets/Portfolio/Ongoing/456 Main Street/456-main-street_002.jpg';
import mainstreet3 from '../assets/Portfolio/Ongoing/456 Main Street/456-main-street_003.jpg';
```

### 2. Add to Portfolio Image Map

In the `portfolioImageMap` object:

```typescript
export const portfolioImageMap: Record<string, any> = {
  // ... existing mappings ...

  // Project Name
  'Portfolio/Ongoing/456 Main Street/456-main-street_001.jpg': mainstreet1,
  'Portfolio/Ongoing/456 Main Street/456-main-street_002.jpg': mainstreet2,
  'Portfolio/Ongoing/456 Main Street/456-main-street_003.jpg': mainstreet3,
};
```

### 3. Add Featured Image

In the `featuredImages` object:

```typescript
export const featuredImages: Record<string, any> = {
  // ... existing featured images ...
  'project-slug': mainstreet1,  // Use appropriate slug
};
```

### 4. Create Portfolio MDX File

Create `src/content/portfolio/project-slug.mdx`:

```yaml
---
title: "Project Title"
category: "kitchen"  # or bathroom, closet, built-in, media-wall, full-home, basement
description: "Project description..."
excerpt: "Brief excerpt..."
featured: false
order: 16

location:
  city: "City Name"
  province: "Ontario"

features:
  - "Feature 1"
  - "Feature 2"

featuredImage: "Portfolio/Ongoing/456 Main Street/456-main-street_001.jpg"

images:
  - src: "Portfolio/Ongoing/456 Main Street/456-main-street_001.jpg"
    alt: "Descriptive alt text for SEO"
    caption: "Image caption"
  - src: "Portfolio/Ongoing/456 Main Street/456-main-street_002.jpg"
    alt: "Descriptive alt text for SEO"
    caption: "Image caption"

keywords:
  - "keyword 1"
  - "keyword 2"

relatedServices:
  - "kitchen-cabinets"  # or custom-closets, built-ins, full-home-cabinetry, bathroom-vanities

relatedProjects:
  - "other-project-slug"
---

## Project Overview

Write detailed project description here...
```

---

## Testing

### 1. Build the Site

```bash
npm run build
```

Check for errors related to:
- Missing image imports
- Invalid image paths
- Schema validation errors

### 2. Preview Locally

```bash
npm run dev
```

Navigate to:
- `/portfolio` - Check if project appears in grid
- `/portfolio/project-slug` - Check individual project page
- Verify all images load correctly

### 3. Test on Mobile

After deployment, verify:
- Images load on mobile devices
- Layout looks correct
- No broken images

---

## Common Issues and Solutions

### Issue: Images Not Showing

**Solution:** Check that:
1. Image path in MDX matches exactly the path in `portfolioImageMap`
2. Image was imported in `portfolioImages.ts`
3. No typos in folder names or file names

### Issue: Build Fails with "Image Not Found"

**Solution:**
1. Run `npm run build` to see specific error
2. Check image path spelling
3. Ensure image exists in the folder

### Issue: Images Too Large / Slow Loading

**Solution:**
1. The build process automatically optimizes to WebP format
2. Consider reducing source image quality if needed
3. Images are lazy-loaded by default

---

## Quick Reference: Image Cropping Settings

Current settings in `process-images.mjs`:

```javascript
// Crop settings
const CROP_BOTTOM_PERCENTAGE = 10;  // Remove bottom 10%

// To change: modify this value
// 10 = remove 10% from bottom (keep top 90%)
// 20 = remove 20% from bottom (keep top 80%)
// 0 = don't crop (keep 100%)
```

---

## Checklist

Before committing new portfolio images:

- [ ] Images organized in appropriate folder
- [ ] `process-images.mjs` updated with new folder name
- [ ] Processing script executed successfully
- [ ] Images imported in `portfolioImages.ts`
- [ ] Images added to `portfolioImageMap`
- [ ] Featured image added to `featuredImages`
- [ ] MDX file created with proper frontmatter
- [ ] All image paths match exactly
- [ ] Build succeeds (`npm run build`)
- [ ] Local preview looks correct (`npm run dev`)
- [ ] Changes committed and pushed

---

## Files to Modify

For every new portfolio project with images:

1. ✅ `process-images.mjs` - Add folder to PROJECT_FOLDERS array
2. ✅ `src/lib/portfolioImages.ts` - Add imports and mappings
3. ✅ `src/content/portfolio/[slug].mdx` - Create new portfolio entry

---

## Questions?

If you encounter issues:
1. Check the console for specific error messages
2. Verify all file paths match exactly (case-sensitive)
3. Ensure images were processed correctly by the script
4. Run `npm run build` to catch errors before deployment
