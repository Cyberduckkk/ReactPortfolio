/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary1:'#FF00FF',
        primary2:'#B300B2',
        accent1:'#FFE5FF',
        accent2:'#00FFFF',
        accent3:'#B300B2',
        accent4:'#00B2B3',
        primaryblack1:'#0E0E0E',
        primaryblack2:'#131313',
        primaryblack3:'#141414',
        primarywhite1:'#cccccc',
        primarywhite2:'#7b7b7b',
      },
      fontFamily:{
        logo:"'Fugaz One', cursive"
      }
    },
  },
  plugins: [],
}