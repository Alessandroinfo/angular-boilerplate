module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      }
    }
  },
  variants: {
    zIndex: ['children', 'default', 'responsive'],
    padding: ['children', 'default', 'responsive'],
    margin: ['children', 'default', 'responsive'],
    height: ['children', 'default', 'responsive'],
    width: ['children', 'default', 'responsive'],
    flexGrow: ['children', 'default', 'responsive'],
    lineHeight: ['children', 'default', 'responsive'],
    backgroundColor: ['children', 'default', 'children-hover', 'hover', 'focus', 'responsive'],
    display: ['children', 'default', 'responsive'],
    justifyContent: ['children', 'default', 'responsive'],
    alignItems: ['children', 'default', 'responsive'],
  },
  plugins: [
    // https://github.com/benface/tailwindcss-children
    require('tailwindcss-children'),
  ],
}
