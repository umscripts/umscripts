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
        PrimaryBG: '#ffffff',
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
        'fade-right': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-left': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'custom-shadow': '0px 3px 12px 0px #ccc',
      },
      animation: {
        'fill-80': 'fill-80 1.5s ease-out forwards',
        'fill-70': 'fill-70 1.5s ease-out forwards',
        'fade-right': 'fade-right 1s ease-out forwards',
        'fade-left': 'fade-left 1s ease-out forwards',
        'zoom-in': 'zoom-in 0.8s ease-out forwards',
      },
      screens: {
        'xsm': '300px',
        'sm': '580px'
      },
    },
  },
  plugins: [],
};