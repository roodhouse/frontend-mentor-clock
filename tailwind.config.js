/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      dark: '#303030',
      gray: 'rgba(255,255,255,0.75)',
      hoverGray: '#999999'

    }
  },
  plugins: [],
}