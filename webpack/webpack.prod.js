const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  performance: {hints: false},
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].[hash].js',
  },
  optimization: {
    splitChunks: {
     cacheGroups: {
      vendor: {
       test: /node_modules/,
       chunks: 'initial',
       name: 'vendor',
       enforce: true
      },
     }
    } 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          { 
            loader: 'postcss-loader',
            options: { sourceMap: true }, 
          },
        ],
      }
    ],
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].[hash]css' }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../images'),
        to: `${path.resolve(__dirname, '../public/images')}/[name].[ext]`,
        toType: 'template'
      }
    ]),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};