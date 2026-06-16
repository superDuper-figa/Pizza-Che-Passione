import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#111111",
        tomato: "#c42127",
        basil: "#168447",
        brass: "#8a857b",
        panna: "#f7f5ef",
        flour: "#e9e6dc"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 20, 18, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
