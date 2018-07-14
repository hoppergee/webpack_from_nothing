const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlPlugin({
      templates: "./html/index.html"
    })
  ],
  entry: './js/index.js'
};