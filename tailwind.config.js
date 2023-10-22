/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      robotoSerif: ['Lobster', 'cursive'],
      latoSerif : ['Playfair Display', 'serif'],
      sans: ['ui-sans-serif', 'system-ui'],
    }
  },
  plugins: [require("daisyui")],
}

