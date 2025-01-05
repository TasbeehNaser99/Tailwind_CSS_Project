const text = require('body-parser/lib/types/text')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        '2md': '960px'
      },
      colors: {
        primary: "#7E3AF2",
        main:"#111928",
        secondary:"#6B7280",  
      },
      fontFamily: {
       Inter:['Inter','san-serif'],
      },
    },
  },
  plugins: [],
}

