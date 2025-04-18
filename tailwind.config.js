/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.js", "./app/**/*.{js,jsx,ts,tsx}", "./App.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

