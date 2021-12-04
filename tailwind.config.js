module.exports = {
  purge: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          1: '#e23e57',
          2: '#522546',
          3: '#2f1b3d',
          4: '#88304e'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwindcss-rtl')]
}
