/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray' : '#2C3639',
        'dark-green' : '#3F4E4F',
        'sand':'#A27B5C',
        'light-gray': '#DCD7C9'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}