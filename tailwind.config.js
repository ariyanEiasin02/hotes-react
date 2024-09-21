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
        "poppins" : "Poppins, sans-serif;"
      },
      backgroundImage:{
        "overlay" : 'linear-gradient(to bottom, transparent, #000000);'
      }
    },
  },
  plugins: [],
}