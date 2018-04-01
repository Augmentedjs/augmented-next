const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/augmented.js',
  context: __dirname,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'augmented-next.js',
    publicPath: '/dist/',
    library: "Augmented",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  plugins: []
};
