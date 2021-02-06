const path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  mode: 'development',
  //configuración webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000,
    publicPath: "/public/js/",
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_module)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
