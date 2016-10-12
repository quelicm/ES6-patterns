module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    port: 3080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }

    ]
  }

};
