/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        },
      },
    },
   plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
