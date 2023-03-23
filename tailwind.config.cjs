/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      ZIndex: {
        '-10': '-10',
      },
    },
    minHeight: {
      '3/4': '75vh',
    },
    fontSize: {
      '2xl': '1.5rem',
    },
  },
  plugins: [],
}