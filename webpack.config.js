const {DefinePlugin} = require('webpack');
const version = require('./package.json').version;

module.exports = {
  plugins: [
    new DefinePlugin({
      APP_VERSION: JSON.stringify(version),
    }),
  ],
};
