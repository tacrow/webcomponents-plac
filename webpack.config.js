const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const WebpackNotifier = new WebpackNotifierPlugin();
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin('all.css');

module.exports = {
  entry: [
    // 'babel-polyfill',
    './src/js/app.js',
    './src/scss/all.scss',
  ],
  output: {
    path: `${__dirname}/bundle/js`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // envの指定でES2017をES5に変換
              // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
              // webpack の Tree Shaking 機能が使えない
              // ['env', {'modules': false}]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.css', '.scss']
  },
  plugins: [
    extractSass,
    WebpackNotifier,
  ]
};