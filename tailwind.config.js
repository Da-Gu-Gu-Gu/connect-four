/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        awar:'#ffe44d',
        panyaung:'#f686bd',
        kayan:'#a77afe'
      }
    },

  },
  plugins: [],
}