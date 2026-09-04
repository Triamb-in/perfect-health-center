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
        primary: {
          dark: "#134633",
          main: "#245742",
          light: "#487252",
          subtle: "#e8f0e6",
          hover: "#0b2e21",
        },
        sage: {
          50: "#f6f8f5",
          100: "#eaf1e8",
          200: "#dce7d9",
          300: "#c3d6bf",
          400: "#a2be9c",
          500: "#7da276",
        },
        cream: {
          50: "#fafaf7",
          100: "#f6f6f1",
          200: "#ecece4",
          300: "#e4e4db",
        },
        forest: {
          900: "#0e3325",
          800: "#134633",
          700: "#1a5c43",
          600: "#245742",
          500: "#367c5e",
        },
        text: {
          dark: "#1a3328",
          body: "#3b5247",
          muted: "#596e62",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 8px rgba(19, 70, 51, 0.04)",
        card: "0 8px 24px rgba(19, 70, 51, 0.08)",
        floating: "0 16px 40px rgba(19, 70, 51, 0.12)",
        button: "0 4px 14px rgba(19, 70, 51, 0.2)",
        "button-hover": "0 6px 20px rgba(19, 70, 51, 0.3)",
      },
      borderRadius: {
        card: "16px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
