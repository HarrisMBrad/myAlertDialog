// frontend/webpack.config.js

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Add other loaders (CSS, images, etc.) as needed
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000,
    proxy: {
      '/submit-form': 'http://localhost:5000',
    },
  },
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "timers": require.resolve("timers-browserify")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};

