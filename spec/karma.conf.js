module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      '**/*.spec.js'
    ],
/* start new code */
    preprocessors: {
      '**/*.spec.js': [ 'webpack' ]
    },
    webpack: require('../webpack.config.js'),
/* end new code */
    browsers: ['PhantomJS']
  })
}