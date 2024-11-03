/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        backgroundImages: {
          '0%': { backgroundImage: 'url("./src/assets/popular1.jpg")' },
          '20%': { backgroundImage: 'url("./src/assets/popular2.jpg")' },
          '40%': { backgroundImage: 'url("./src/assets/popular3.jpg")' },
          '60%': { backgroundImage: 'url("./src/assets/popular4.jpg")' },
          '80%': { backgroundImage: 'url("./src/assets/popular5.jpg")' },
          '100%': { backgroundImage: 'url("./src/assets/popular6.jpg")' },
        },
      },
      animation: {
        backgroundImages: 'backgroundImages 30s infinite ease-in-out', // Adjust duration as needed
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