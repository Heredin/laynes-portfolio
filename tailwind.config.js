/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      fontFamily: {
        primary: 'Poppins',
        "Optima": ["OptimaLTStd-DemiBold", "sans-serif"],
        "Pacifico-Regular": ["Pacifico-Regular", "sans-serif"],
        "Poppins-Regular": ["Poppins-Regular", "sans-serif"],
        "Raleway-Regular": ["Raleway-Regular", "sans-serif"],
        "Sk-Modernist-Bold": ["Sk-Modernist-Bold", "sans-serif"],
        "Sk-Modernist-Regular": ["Sk-Modernist-Regular", "sans-serif"],

      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [

  ],
}

