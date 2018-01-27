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
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
    uglifyOptions: {
      ie8: false,
      ecma: 8
    }
  })
  ]
};

/*
const {resolve} = require("path");
const webpack = require("webpack");
const validate = require("webpack-validator");
const {getIfUtils, removeEmpty} = require("webpack-config-utils");

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env)

  return validate({
    entry: "./src/augmented.js",
    context: __dirname,
    output: {
      path: resolve(__dirname, "./dist"),
      filename: "augmented-next.js",
      publicPath: "/dist/",
      pathinfo: ifNotProd(),
      library: "Augmented",
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    devtool: ifProd("source-map", "eval"),
    devServer: {
      port: 8080,
      historyApiFallback: true
    },
    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        {test: /\.css$/, loader: "style-loader!css-loader"},
        {test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: "file-loader"},
      ],
    },
    plugins: removeEmpty([
      ifProd(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        quiet: true,
      })),
      ifProd(new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: "production",
        },
      })),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          screw_ie8: true, // eslint-disable-line
          warnings: false,
        },
      })),
    ])
  });
};
*/
