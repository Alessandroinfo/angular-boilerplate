const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'TEST_WEBPACK': JSON.stringify('OK'),
    })
  ]
};
