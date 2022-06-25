/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*/**.{js,ts,jsx,tsx}',
    // './src/*/*/**.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu' : ['Ubuntu'],
      },
      screens: {
        'mobile' : {'max': '640px'},
      },
      transitionProperty: {
        'left' : 'left',
      }
    },
    
  },
  plugins: [],
}
