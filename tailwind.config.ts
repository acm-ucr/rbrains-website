/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        besley: ["Besley", "serif"], // Add Besley as a custom font
      },
    },
  },
  plugins: [],
};
