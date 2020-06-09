module.exports = {
  // Tailwind Paths
  configJS: 'tailwind.config.js',
  sourceCSS: './src/tailwind.scss',
  outputCSS: './src/styles.scss',
  // Sass
  sass: true,
  // PurgeCSS Settings
  purge: false,
  keyframes: true,
  fontFace: true,
  rejected: true,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
