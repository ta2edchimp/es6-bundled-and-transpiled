var webpack = require('webpack');

module.exports = {
  entry: './source/entry.js',
  output: {
    filename: './dist/bundle.js',
    libraryTarget: 'assign',
    library: 'MainNamespace'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      text: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
        semicolons: true
      }
    })
  ]
};
