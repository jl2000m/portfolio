import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        surface: "#F7F7F5",
        fg: "#1A1A1A",
        muted: "#6B6B6B",
        accent: "#0066FF",
        "accent-hover": "#0052CC",
        "accent-light": "#EBF2FF",
        border: "#E5E5E3",
        "border-hover": "#D1D1CF",
      },
      fontFamily: {
        // Both map to Plus Jakarta Sans — existing font-syne/font-inter classes work unchanged
        syne: ["var(--font-jakarta)", "sans-serif"],
        inter: ["var(--font-jakarta)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 42s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
