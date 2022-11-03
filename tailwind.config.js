/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    mytheme: {

      "primary": "B20600",

      "secondary": "#F000B8",

      "accent": "#37CDBE",

      "neutral": "#3D4451",

      "base-100": "#000000",

      "info": "#3ABFF8",

      "success": "#36D399",

      "warning": "#FBBD23",

      "error": "#be123c",
    },

    extend: {},
  },
  plugins: [require("daisyui")],
}
