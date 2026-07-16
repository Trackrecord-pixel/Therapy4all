import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#effcf9", 100: "#c9f3ea", 200: "#96e6d6", 300: "#5fd1bd",
          400: "#33b6a2", 500: "#199887", 600: "#0f7b6e", 700: "#116256",
          800: "#124e46", 900: "#123f3a", 950: "#04211e",
        },
        ink: {
          50: "#f6f7f8", 100: "#eceef1", 200: "#d4d9e0", 300: "#aeb7c4",
          400: "#8090a2", 500: "#607085", 600: "#4c596c", 700: "#3f4a58",
          800: "#37404b", 900: "#1f2733", 950: "#141922",
        },
        sand: "#f4f7f6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(18, 62, 58, 0.14)",
        "card-hover": "0 16px 40px -12px rgba(18, 62, 58, 0.22)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: { "fade-up": "fade-up 0.6s ease-out both", "fade-in": "fade-in 0.8s ease-out both" },
    },
  },
  plugins: [],
};
export default config;
