module.exports = {
  purge: ['./components/**/*.{vue,js}', './assets/**/*.{css,scss,sass}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  darkMode: 'class', // or 'media' or 'class'
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
          1: '#e23e57',
          2: '#522546',
          3: '#2f1b3d',
          4: '#88304e'
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
  plugins: [require('tailwindcss-rtl')]
}
