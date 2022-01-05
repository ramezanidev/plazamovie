const useVar = require('./utility/tailwindcss/useVar')

module.exports = {
  purge: ['./components/**/*.{vue,js}', './assets/**/*.{css,scss,sass}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      spacing: {
        92: '23rem',
        112: '28rem',
        116: '29rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem'
      },
      colors: {
        brand: {
          1: 'rgb(var(--color-brand-1))',
          2: 'rgb(var(--color-brand-2))',
          3: 'rgb(var(--color-brand-3))',
          4: 'rgb(var(--color-brand-4))'
        }
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
          '2xl': '8rem'
        },
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px'
        }
      }
    }
  },
  variants: {
    extend: {
      translate: ['group-hover']
    }
  },
  plugins: [require('tailwindcss-rtl'), useVar()]
}
