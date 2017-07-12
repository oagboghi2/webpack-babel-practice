module.exports = {
  entry: './index.js'
};

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.bundle.js',
    path: __dirname,
    publicPath: __dirname
  }
};
