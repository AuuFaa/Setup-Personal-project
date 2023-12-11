/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1565D8",
        dark: {
          hard: "#0D2436",
          soft: "#183B56",
        },
        palettes: {
          light: "#F3EEEA",
          lightmore: "#EBE3D5",
          brown: "#B0A695",
          brownies:"#776B5D",

        },
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
}