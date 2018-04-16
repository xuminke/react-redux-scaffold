const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client?noInfo=true&reload=true',
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
    new ExtractTextPlugin('[name].css', {allChunks: true}),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development'),
    }),
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
            { loader: 'css-loader' },
            { loader: 'postcss-loader', options: { config: { ctx: { autoprefixer: true } } } },
          ],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
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
}