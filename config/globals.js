const glob = require('glob')
const _ = require('lodash')
const libFiles = glob.sync(__root + '/lib/**/*.js')
process.env.FILES = glob.sync(__root + '/views/**/*.js')
var variables = {}

libFiles.forEach((file) => {
  var filename = file.replace(/^.*[\\\/]/, '').replace('.js', '')
  variables['$' + filename] = file
})


// Pull in all files in /lib and create 
module.exports = {
  // Setup globally accessible variables that can be called anywhere. The second argument
  // must relate to one of the aliases you set below so the connection to the file is made. 
  // More info can be found below.
  // https://webpack.js.org/plugins/provide-plugin/
  //
  // Example
  // Aliases entry: http$: path.join(__root, 'node_modules/axios/dist/axios.min.js')
  // Variables entry: $http: axios 
  variables: _.merge(variables, {
    '$axios': 'axios',
  }),
  // Setup alias to easily import files without having to worry about the full
  // file path. More info can be found in the docs below.  
  // https://webpack.js.org/configuration/resolve/#src/components/Sidebar/Sidebar.jsx
  //
  // Example 
  // Aliases entry: components: path.join(__root, '/app/components')
  // 
  // NoAlias: import Component from '../../components/Component' 
  // Aliased: import Component from 'components/Component' 
  aliases: {
    vue$: __root + '/node_modules/vue/dist/vue.min.js',
    axios$: __root + '/node_modules/axios/dist/axios.min.js',
    views: __root + '/app/views/',
    components: __root + '/app/components/',
    mixins: __root + '/app/mixins/',
    models: __root + '/app/models/',
    store: __root + '/app/store/',
    styles: __root + '/app/assets/styles/',
    images: __root + '/app/assets/images/',
    config: __root + '/config/',
  }
}
