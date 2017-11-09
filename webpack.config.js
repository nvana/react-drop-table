var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./src/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['react','es2015']
        }
      }
    ],
  },
  output: {
    path: __dirname + "/build",
    filename: "./index.min.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};