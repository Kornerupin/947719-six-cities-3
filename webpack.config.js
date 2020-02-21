const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'PureComponent': [`react`, `PureComponent`],
      'PropTypes': 'prop-types'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: `source-map`,
};
