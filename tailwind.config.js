/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          400: '#fd565f',
        },
        // gray: '#ececec',
        green: '#64c964',
        white: '#ffffff',
      },
      fontFamily: {
        dongle: 'Dongle',
        flora: '"Grandiflora One"',
      },
    },
  },
  plugins: [],
};
