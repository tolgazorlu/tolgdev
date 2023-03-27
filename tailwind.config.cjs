/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#245ab2",
        secondary: "#efd81a",
        light: "#cbd9e5",
        dark: "#2A363B",
        bgCard: "#ffffff",
        bgDarkCard: "#152226"
      },
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif'],
      }
    },
  },
  plugins: [],
}