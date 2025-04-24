/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rbrains: {
          "dark-brown": "#3b2b27",
          "background": "#f4eee7",
        },
      },
      fontFamily: {
        rbrains: "var(--font-serif)",
      },
    },
  },
  plugins: [],
};
