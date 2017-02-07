// @flow

const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: [
        'json-loader'
      ]
    }, {
      test: /\.png$/,
      loaders: [
        "file-loader?name=/[path][name].[ext]&context=./src"
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      enforce: 'pre'
    }, {
      test: /\.(css|scss)$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        'babel-loader'
      ]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'vue-style-loader!css-loader?minimize!sass-loader!postcss-loader',
          sass: 'vue-style-loader!css-loader?minimize!sass-loader!postcss-loader'
        }
      }
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    FailPlugin,
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      },
      debug: true
    })
  ],
  // devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: '/index.js'
  },
  entry: `./${conf.path.src('index')}`
};
