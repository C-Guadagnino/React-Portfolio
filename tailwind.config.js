const { createPortal } = require('react-dom')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'pinkish' : '#7b3c55',
      'blueish' : '#17495d',
      'white' : colors.white,
      'gray' : colors.gray,
      'black' : colors.black,
      'stone' : colors.stone,
      'blackish' : "#000000"
    },

    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage:{
        'hero-image':'url("./components/images/passion.png")'
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
