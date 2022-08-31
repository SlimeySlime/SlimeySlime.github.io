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
      },
      spacing: {
        'innerScreen' : '90vh',
        'innerPage' : '85vh'
      },
    },
    
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container-padding': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '728px',
          },
          '@screen lg': {
            maxWidth: '1240px',
          },
          '@screen xl': {
            maxWidth: '13500px',
          },
          
        }
      })
    }
  ],
}
