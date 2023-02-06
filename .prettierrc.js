module.exports = {
  singleQuote: true,
  bracketSpacing: false,
  bracketSameLine: true,
  singleAttributePerLine: false,
  htmlWhitespaceSensitivity: 'ignore',
  plugins: [require('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
