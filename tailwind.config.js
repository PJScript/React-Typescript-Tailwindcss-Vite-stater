/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

import spacing from "./src/styles/spacing"
import colors from "./src/styles/colors"
import font from "./src/styles/font"
import screens from "./src/styles/screens"
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      colors
      // Configure your color palette here
    },
    fontFamily: font,
    spacing:spacing,
    screens:screens,
    extend: {},
  },
  plugins: [],
});
