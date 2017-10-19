const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

module.exports = {
  entry: ['webpack-dev-server/client?http://0.0.0.0:8000', 'webpack/hot/only-dev-server', __root + '/config/app.js'],
  filename: '[name].js',
  exportPath: '/public',

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  imagesFilename: 'assets/[name].[ext]',
}