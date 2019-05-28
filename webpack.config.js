const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ],
      include: [
        path.resolve(__dirname, 'src/assets/styles')
      ]
    }, {
      test: /\.ezwc$/,
      use: [
        "ezwc-loader"
      ]
    }]
  }
};
