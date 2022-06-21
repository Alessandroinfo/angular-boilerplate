const webpack = require('webpack');
const version = require('./package.json').version;

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'APP_VERSION': JSON.stringify(version)
    })
  ]
};
