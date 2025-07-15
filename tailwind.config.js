/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#003366", // Indokona Blue
        secondary: "#ff9900", // Accent Orange
        light: "#f5f5f5",
        dark: "#1a1a1a",
        success: "#22c55e",
      },
    },
  },
  plugins: [],
};
