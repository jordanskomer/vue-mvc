const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
global.__root = path.resolve('.')
const config = require(path.join(__root, '/config/environments/' + process.env.NODE_ENV))
const globals = require(path.join(__root, '/config/globals'))

// Plugin Initialization
// --------- 
var plugins = []
// Create globally accessible variables that were defined in environments/NODE_ENV.js 
plugins.push(new webpack.ProvidePlugin(globals.variables))
// Use the template in views/index.html
plugins.push(new HtmlWebpackPlugin({
  template: __root + '/app/index.html'
}))
// Merge anything required from the /node_modules folder into its' own js file (vendor.js) 
plugins.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: function (module) {
    return module.context && module.context.indexOf("node_modules") !== -1;
  }
}))
// Merge anything (outside of /node_modules) that is used more than once into its' own js file
plugins.push(new webpack.optimize.CommonsChunkPlugin({
  async: 'catch',
  minChunks(module, count) {
      return count >= 2 && module.context.indexOf("node_modules") === -1;
  },
}))
// Add ENV specific plugins found in environments/NODE_ENV.js
plugins = plugins.concat(config.plugins)

// Webpack Config
// --------- 
module.exports = {
  entry: config.entry,
  output: {
    filename: config.filename,
    path: path.join(__root, config.exportPath),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|vendor)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|woff|woff2|eot|ttf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: config.imagesFilename
          }
        }]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', ',json', '.scss'],
    alias: globals.aliases
  },
  plugins
}