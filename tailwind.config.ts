import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#ffffff",
        "card-foreground": "#1c1c1c",
        background: "#fffbf9",
        border: "#442F2C",
        muted: "#442F2C",
        primary: "#4B2E29",
        destructive: "#dc2626",
        accent: "#fef3c7",
        rbrains: {
          "dark-brown": "#4B2E29",
          background: "#f9f5ef",
        },
      },
      fontFamily: {
        rbrains: "var(--font-besley)",
        seoul: ["SeoulHangangCL", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
