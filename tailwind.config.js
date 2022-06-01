// Remember to edit
// theme.extend.colors.primary
// theme.extend.colors.secondary
// with same primary and secondary angular material
// theme colors in assets/ds/abstract/_palettes.scss
// Choice they wisely on https://material.io/resources/color
// Check if it's good the important true to override Material styles

module.exports = (isProd) => ({
  important: true,
  prefix: '',
  purge: {
    enabled: isProd,
    content: ['**/*.html', '**/*.ts'],
    keyframes: true,
    fontFace: true,
    rejected: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2EC4B6',
        secondary: '#2E88C4',
      },
      spacing: {
        96: '24rem',
        128: '32rem',
      },
      transitionDelay: {
        0: '0ms',
        2000: '2000ms',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  variants: {
    display: ['children', 'DEFAULT', 'responsive'],
    zIndex: ['children', 'DEFAULT ', 'responsive'],
    padding: ['children', 'DEFAULT ', 'responsive'],
    margin: ['children', 'DEFAULT ', 'responsive'],
    height: ['children', 'DEFAULT ', 'responsive'],
    width: ['children', 'DEFAULT ', 'responsive'],
    flexGrow: ['children', 'DEFAULT ', 'responsive'],
    lineHeight: ['children', 'DEFAULT ', 'responsive'],
    backgroundColor: [
      'children',
      'DEFAULT ',
      'children-hover',
      'hover',
      'focus',
      'responsive',
    ],
    justifyContent: ['children', 'DEFAULT ', 'responsive'],
    alignItems: ['children', 'DEFAULT ', 'responsive'],
  },
  plugins: [
    // https://github.com/benface/tailwindcss-children
    require('tailwindcss-children'),
  ],
});
