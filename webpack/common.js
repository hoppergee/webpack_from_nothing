const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: 'css-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./html/index.html"
    })
  ],
  entry: './js/index.js'
};