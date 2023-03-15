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

  },
  plugins: [],
}