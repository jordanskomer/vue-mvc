const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: [ __root + '/config/app.js'],
  filename: '[name].[hash].js',
  exportPath: '/public',

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],

  imagesFilename: 'assets/[name].[hash].[ext]',
}