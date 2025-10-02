import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://boscocabinetry.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/private'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    // Enable aggressive build optimizations
    inlineStylesheets: "always", // Inline all CSS files for better performance
  },
  vite: {
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
