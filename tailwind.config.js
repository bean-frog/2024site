/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './public/index.html', 
  ],
  theme: {
    extend: {
      colors: {
        'glass-light': '#f0f0f0',
        'glass-medium': '#d0d0d0',
        'glass-dark': '#a0a0a0',
        'glass-reflective': '#e0e0e0', 
        'glass-border': '#c0c0c0', 
      },
    },
 },
  plugins: [],
}

