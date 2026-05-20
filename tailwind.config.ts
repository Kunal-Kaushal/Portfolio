import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        surface: "#111111",
        border: "#1f1f1f",
        text: {
          primary: "#f5f5f5",
          secondary: "#737373",
        },
        accent: "#e2e8f0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -20px rgba(255,255,255,0.08)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset",
      },
    },
  },
  plugins: [],
};
export default config;
