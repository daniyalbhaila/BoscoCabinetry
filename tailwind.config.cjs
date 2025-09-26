/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          // Primary Colors
          charcoal: "#1D2026", // Deep Charcoal - Background, dark sections
          "dark-charcoal": "#393335", // Dark Charcoal - Primary text, headers, accents
          primary: "#DAD2BF", // Warm Beige - Primary brand color, buttons
          "light-gray": "#E6E6E6", // Light Gray - Subtle backgrounds, borders
          white: "#FFFFFF", // Pure White - Clean backgrounds, text on dark

          // Secondary Colors
          slate: "#373C49", // Slate Blue - Secondary accents, navigation
          forest: "#3F4740", // Forest Green - Natural accents, subtle highlights
          bronze: "#60533C", // Bronze - Warm accents, secondary buttons
          rose: "#D8C5BF", // Dusty Rose - Soft accents, hover states
          powder: "#BFCBD6", // Powder Blue - Light accents, backgrounds

          // Legacy aliases for compatibility
          darkGray: "#393335",
          beige: "#DAD2BF",
          oliveGray: "#3F4740",
          blush: "#D8C5BF",
          steel: "#BFCBD6",
          accent: "#DAD2BF",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
