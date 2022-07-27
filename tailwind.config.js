/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        general: {
          primary: '#3361FF',
          secondary: '#4D5E80',
        },
        text: {
          primary: '#3361FF',
          dark: '#4D5E80',
          light: '#7D8FB3'
        }
      }
    },
  },
  plugins: [],
}
