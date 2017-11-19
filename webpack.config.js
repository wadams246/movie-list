const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const config = {
  entry: {
    app: glob.sync('./app/**/*.js'),
    vendor: [
      './node_modules/angular/angular.js',
      './node_modules/angular-route/angular-route.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'app/scripts/dist')
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './app/index.html'})
  ]
};

module.exports = config;
