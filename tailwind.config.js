/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px', 
      'lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    backgroundImage: {
      'abu': "url('../Assets/background/bg-bercak.webp')",
      'home': "url('../Assets/background/home-bg.webp')",
      'welcome': "url('../Assets/background/opening-bg.webp')"
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
        outfit: "'Outfit', 'sans-serif'",
        quicksand: "'Quicksand', 'sans-serif'"
      },
      colors: {
        main: '#CB9D4D',
        dark: '#222222',
        text: '#3E3E3E',
        bg1: '#E4E4E4',
        bg2: '#FFFFFF',
      },
    },
  },
  plugins: [],
}