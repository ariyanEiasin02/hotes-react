/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-bg': 'fade-bg 5s ease-in-out infinite',
      },
      keyframes: {
        'fade-bg': {
          '0%': { opacity: '1' },
          '45%': { opacity: '1' },
          '55%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
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