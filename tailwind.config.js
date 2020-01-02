module.exports = {
  theme: {
    gradients: theme => ({
      'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
      'purple-blue': [theme('colors.purple.500'), theme('colors.blue.500')],
      'primary-secondary': [theme('colors.primary'), theme('colors.secondary')],
      'teal-indigo': [theme('colors.teal.500'), theme('colors.indigo.500')],
    }),
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
      code: ['"FiraCode"', 'monospace']
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
      print: { raw: 'print' },
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: 'var(--color-primary, #3dc9b0)',
        secondary: 'var(--color-secondary, #c594c5)',
      },
    },
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [
    function({ addBase, config }) {
      addBase({
        h1: { fontSize: config('theme.fontSize.2xl') },
        h2: { fontSize: config('theme.fontSize.xl') },
        h3: { fontSize: config('theme.fontSize.lg') },
        pre: {fontFamily: config('theme.fontFamily.code')},
        code: {fontFamily: config('theme.fontFamily.code')}
      })
    },
    // function({ addComponents }) {
    //   const buttons = {
    //     '.btn': {
    //       padding: '.5rem 1rem',
    //       borderRadius: '.25rem',
    //       fontWeight: '600',
    //     },
    //     '.btn-blue': {
    //       backgroundColor: '#3490dc',
    //       color: '#fff',
    //       '&:hover': {
    //         backgroundColor: '#2779bd'
    //       },
    //     },
    //     '.btn-red': {
    //       backgroundColor: '#e3342f',
    //       color: '#fff',
    //       '&:hover': {
    //         backgroundColor: '#cc1f1a'
    //       },
    //     },
    //   }
    //   addComponents(buttons)
    // },
    require('./plugins/gradients'),
    require('tailwindcss-responsive-embed')(),
    require('tailwindcss-aspect-ratio')({
      ratios: {
        square: [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '21/9': [21, 9],
      },
    }),
  ],
}
