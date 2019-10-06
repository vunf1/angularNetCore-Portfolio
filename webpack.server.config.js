const path = require('path');
const nodeExternals = require('webpack-node-externals');module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist', 'server')
  }
};