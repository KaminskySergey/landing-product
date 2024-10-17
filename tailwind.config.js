/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: { min: "320px", max: "767px" },
      md: "768px",
      lg: { min: "1280px" },
    },
  },
  plugins: [],
}

