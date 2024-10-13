/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#0CB7C6',
      },
      keyframes: {
        fill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'fill-80': {
          '0%': { width: '0%' },
          '100%': { width: '95%' },
        },
        'fill-70': {
          '0%': { width: '0%' },
          '100%': { width: '90%' },
        },
      },
      boxShadow: {
        'custom-shadow': '0px 3px 12px 0px #ccc',
      },
      animation: {
        'fill-80': 'fill-80 1.5s ease-out forwards',
        'fill-70': 'fill-70 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};