const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/augmented.js',
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'augmented-next.js',
    publicPath: '/dist/',
    library: "Augmented",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',

};

/*
plugins: [
  new UglifyJsPlugin({
  uglifyOptions: {
    ie8: false,
    ecma: 8
  }
})
]
*/
