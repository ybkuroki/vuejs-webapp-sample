const webpack = require('webpack')

module.exports = {
  devServer: {
    port: 3000
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js'],
      alias: {
        'jquery': 'jquery/dist/jquery.slim.js',
        'vue$': 'vue/dist/vue.esm.js',
      }
    }
  },
  productionSourceMap: false
}