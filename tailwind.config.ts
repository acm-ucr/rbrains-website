/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rbrains: {
          "dark-brown": "#4B2E29",
          background: "#f4eee7",
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
