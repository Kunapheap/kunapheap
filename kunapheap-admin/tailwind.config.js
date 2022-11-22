/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'bgColor': '#FEFBF3',
      'primary': '#2B2B2B',
      'secondary': '#7DBE7C',
      'blue' : colors.blue,
      'black' : colors.black,
      'slate' : colors.slate,
      'white' : colors.white,
      'red' : colors.red,
    },
    extend: {},
  },
  plugins: [],
}