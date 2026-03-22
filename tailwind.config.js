/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F5F0',
        charcoal: '#1A1A1A',
        gold: '#D4AF37'
      },
      fontFamily: {
        serif: ['ui-serif', 'Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
