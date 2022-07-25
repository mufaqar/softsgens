
 module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        'main': '#D1B9D7',
        'secoundry': '#1F3958',
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }