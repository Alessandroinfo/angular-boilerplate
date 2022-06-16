const { patchPostCSS } = require("@ngneat/tailwind");
const tailwindConfig = require("./tailwind.config.js");

module.exports = (config) => {
  const isProd = config.mode === 'production';
  const tailwindConfig = require('./tailwind.config.js')(isProd);
  patchPostCSS(config, tailwindConfig, true);
  patchAngularPostCSS({
    webpackConfig: config,
    addPlugins: [
      require("postcss-preset-env"),
      require("postcss-css-variables")
    ],
  });
  return config;
};
