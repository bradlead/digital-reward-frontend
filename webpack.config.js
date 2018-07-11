const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'web',
  mode: 'development',
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.otf$|\.eot$|\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: path.join(__dirname, 'src'),
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
  devServer: {
    contentBase: path.join(__dirname),
    historyApiFallback: true,
  },
};
