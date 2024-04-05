/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'custom-body-color' : 'rgb(245, 247, 248)',
        'custom-primary-color' : 'rgb(244, 206, 20)',
        'custom-secondary-color' : 'rgb(73, 94, 87)',
        'cutom-text-color' : 'rgb(69, 71, 75)'
      },
    },
  },
  plugins: [],
}

