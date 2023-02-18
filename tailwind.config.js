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
        surface: '#161D2F',
        text: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
