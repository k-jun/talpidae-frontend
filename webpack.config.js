const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        loader: 'svelte-loader',
        options: {
          preprocess:  require('svelte-preprocess')({})
        }
      },
    ]
  },
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.svelte'
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/build/',
  }
};

module.exports = config;
