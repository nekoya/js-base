'use strict';

const isRelease = process.env.NODE_ENV === 'production';

module.exports = {
  context: __dirname + "/src",
  entry: "./app.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
      alias: {},
      root: [],
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  devtool: isRelease ? '' : 'source-map',
};