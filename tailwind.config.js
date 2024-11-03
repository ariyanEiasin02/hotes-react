/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 1.5s ease-out forwards', // Duration and easing
      },
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
      },
      letterSpacing:{
        "ex-tracking-widest" : "2rem"
      },
    },
  },
  plugins: [],
}