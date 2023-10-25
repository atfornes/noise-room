const path = require('path');

module.exports = {
  entry: './hydra-audio-effects.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
