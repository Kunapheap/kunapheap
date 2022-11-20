/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: "#2B2B2B",
      secondary: "#7DBE7C",
      bgColor : '#FEFBF3'
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],

  variants: {
    scrollbar: ["rounded"],
  },
};
