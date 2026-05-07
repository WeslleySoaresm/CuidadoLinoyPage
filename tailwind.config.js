/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'base-lg': ['1.125rem', { lineHeight: '1.75' }], // Foco em legibilidade para idosos
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}