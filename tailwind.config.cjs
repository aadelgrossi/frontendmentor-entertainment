/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FC4747',
        background: '#10141E',
        secondary: '#5A698F',
        surface: {
          main: '#161D2F',
          hover: '#3D4E7B',
        },
        text: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [require('daisyui')],
};
