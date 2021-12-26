const plugin = require('tailwindcss/plugin')

module.exports = function useVar () {
  return plugin(({ addUtilities, theme, variants }) => {
    const fn = (prefix, key, prop, opacity) => {
      const t = theme(prop)

      addUtilities(Object.keys(t)
        .reduce((_o, _k) => ({
          ..._o,
          ...Object.keys(t[_k])
            .filter(x => /^rgb\(.*\)$/i.test(t[_k][x]))
            .reduce((o, k) => ({
              ...o,
              [`.${prefix}-${_k}-${k}`]: {
                [key]: t[_k][k].replace(/^rgb\((.*)\)$/i, `rgba($1, var(${opacity})) !important`)
              }
            }), {})
        }), {}), {
        respectImportant: false,
        variants: variants(prop)
      })
    }

    // add more utils here...
    fn('bg', 'background-color', 'backgroundColor', '--tw-bg-opacity')
    fn('text', 'color', 'textColor', '--tw-text-opacity')
  })
}
