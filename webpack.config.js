const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const config = {
  entry: {
    app: glob.sync('./app/**/*.js'),
    vendor: [
      './node_modules/angular/angular.js',
      './node_modules/angular-route/angular-route.js'
    ],
    css: glob.sync('./app/**/*.css')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'app/scripts/dist')
  },
  module: {
    rules: [
      // { test: /\.html$/, use: 'raw-loader' },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '/app/scripts/dist'
        })
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './app/index.html'}),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true
    })
  ],
  devServer: {
    contentBase: './app',
    compress: true,
    port: 4200
  }
};

module.exports = config;
