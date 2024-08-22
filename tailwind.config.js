/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: { 'colors': {
      'custom-nav' : '#f7f6fb',
      'custom-canvas': '#f9f9fd'
    
    }
  },
  },
  plugins: [],
}