const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV == "production" ? '[chunkhash]-bundle.js' : "bundle.js"
  }
}