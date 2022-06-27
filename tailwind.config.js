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
        'happy' : ['Happiness-Sans-Bold'],
        'happy-title' : ['Happiness-Sans-Title'],
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
