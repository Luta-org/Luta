/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    screens: {
      sm: "320px",
      xm:"400px",
      md: "640px",
      xmd: "840px",
      lg: "1024px",
      xl: "1280px",
      _2k: "2000px"
    },
     extend: {
      fontFamily: {
        poppins: ['Cambay', "sans-serif"]
      },
      colors : {
        primary: "#1AFFD5",
        secondary: "#00072D",
        gray: "#ADADAD",
        success: "#00072D",
      }
    }
  },
  plugins: [],
}
