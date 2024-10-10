/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "container" : "1200px"
      },
      fontFamily:{
        "playfair" : "Playfair Display, serif",
        "open-sans" : "Open Sans, sans-serif"
      },
      backgroundImage:{
        "overlay" : 'linear-gradient(to bottom, transparent, #000000);',
        "rgbaColor" :'linear-gradient(to bottom, #000, #FF0000)'
      }
    },
  },
  plugins: [],
}