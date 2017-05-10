var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'build.js'
  },
  externals: {
    'BMap': 'BMap'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },{
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },
}
