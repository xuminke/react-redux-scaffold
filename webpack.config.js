const path = require('path');
const webpack = require('webpack');
const babelPolyfill = require('babel-polyfill');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ReplacePlugin = require('webpack-plugin-replace');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const ProxyServer = 'http://10.167.223.135:8080';

module.exports = {
  mode: 'production',

  entry: [
    'babel-polyfill',
    // 'webpack-hot-middleware/client?noInfo=true&reload=true',
    path.resolve(__dirname, 'src/index.js'),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    chunkFilename: '[id].[hash].js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less'],
  },

  plugins: [
    new ProgressBarPlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ReplacePlugin({
      include: [
        path.resolve(__dirname, 'src/constants/config.js'),
      ],
      values: {
        PROXYSERVER: ProxyServer,
      },
    }),
    new UglifyJSPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true} },
            { loader: 'postcss-loader', options: { config: { ctx: { autoprefixer: true } } } },
          ],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true} },
            { loader: 'postcss-loader', options: { config: { ctx: { autoprefixer: true } } } },
            { loader: 'less-loader' },
          ],
        }),
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf)$/,
        loader: 'url-loader?prefix=font/&limit=10000',
      },
    ],
  },
};
