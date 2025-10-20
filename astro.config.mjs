import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://boscocabinetry.ca',
  integrations: [
    react(),
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/private'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Custom priorities for different page types
      serialize(item) {
        // Homepage gets highest priority
        if (item.url === 'https://boscocabinetry.ca/') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Main service pages
        if (item.url.includes('/services/')) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        // Services overview and portfolio
        if (item.url === 'https://boscocabinetry.ca/services' ||
            item.url === 'https://boscocabinetry.ca/portfolio') {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        // Individual portfolio projects
        if (item.url.includes('/portfolio/') && item.url !== 'https://boscocabinetry.ca/portfolio') {
          return { ...item, priority: 0.85, changefreq: 'monthly' };
        }
        // Blog content
        if (item.url.includes('/blog/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        // About, contact, sustainability
        if (item.url.includes('/about') ||
            item.url.includes('/contact') ||
            item.url.includes('/sustainability')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        // Everything else
        return { ...item, priority: 0.6, changefreq: 'monthly' };
      }
    }),
  ],
  build: {
    // Enable aggressive build optimizations
    inlineStylesheets: "always", // Inline all CSS files for better performance
  },
  vite: {
    // Add HEIC and other image formats to assets
    assetsInclude: ['**/*.HEIC', '**/*.heic'],
    build: {
      // CSS optimization
      cssCodeSplit: true,
      // Chunk size warnings threshold
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            // Vendor chunks
            react: ["react", "react-dom"],
            // Motion library separate chunk
            motion: ["framer-motion"],
          },
        },
      },
    },
    // Development optimizations
    server: {
      fs: {
        strict: false,
      },
    },
  },
  // Image optimization
  image: {
    // Enable responsive images
    responsiveStyles: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "kuula.co",
      },
    ],
  },
  // Enable compression and other optimizations
  compressHTML: true,
  // Prefetch settings for better navigation performance
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
