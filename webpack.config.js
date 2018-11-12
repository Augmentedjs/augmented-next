const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "web",
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
  stats: "errors-only",
  devtool: "source-map",
  externals: {
    'next-core-application': {
      commonjs: 'next-core-application',
      commonjs2: 'next-core-application',
      amd: 'next-core-application',
      root: 'next-core-application'
    },
    'next-core-bundle': {
      commonjs: 'next-core-bundle',
      commonjs2: 'next-core-bundle',
      amd: 'next-core-bundle',
      root: 'next-core-bundle'
    },
    'next-core-logger': {
      commonjs: 'next-core-logger',
      commonjs2: 'next-core-logger',
      amd: 'next-core-logger',
      root: 'next-core-logger'
    },
    'next-core-model': {
      commonjs: 'next-core-model',
      commonjs2: 'next-core-model',
      amd: 'next-core-model',
      root: 'next-core-model'
    },
    'next-core-object': {
      commonjs: 'next-core-object',
      commonjs2: 'next-core-object',
      amd: 'next-core-object',
      root: 'next-core-object'
    },
    'next-core-security': {
      commonjs: 'next-core-security',
      commonjs2: 'next-core-security',
      amd: 'next-core-security',
      root: 'next-core-security'
    },
    'next-core-sort': {
      commonjs: 'next-core-sort',
      commonjs2: 'next-core-sort',
      amd: 'next-core-sort',
      root: 'next-core-sort'
    },
    'next-core-structures': {
      commonjs: 'next-core-structures',
      commonjs2: 'next-core-structures',
      amd: 'next-core-structures',
      root: 'next-core-structures'
    },
    'next-core-utilities': {
      commonjs: 'next-core-utilities',
      commonjs2: 'next-core-utilities',
      amd: 'next-core-utilities',
      root: 'next-core-utilities'
    },
    'next-core-validation': {
      commonjs: 'next-core-validation',
      commonjs2: 'next-core-validation',
      amd: 'next-core-validation',
      root: 'next-core-utilvalidationities'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
