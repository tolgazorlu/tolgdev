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
        primary: "#00ADB5",
        secondary: "#fbd36d",
        light: "#EEEEEE",
        dark: "#29363a",
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