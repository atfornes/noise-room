const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './hydra-audio-effects.js',
  plugins: [
  new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1
  })],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
