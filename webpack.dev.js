const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8003/'
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: '8003'
  }
})
