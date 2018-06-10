'use strict';

require('dotenv').config({ path: `${__dirname}/.env` });
const production = process.env.NODE_ENV === 'production';

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractPlugin('bundle-[hash].css'),
  new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __API_URL__: JSON.stringify(process.env.API_URL),
    __API_KEY__: JSON.stringify(process.env.API_KEY),
  }),
];

if (production) {
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}

module.exports = {
  plugins,
  devServer: {
    historyApiFallback: true,
  },
  devtool: production ? undefined : 'source-map',
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: process.env.CDN_URL,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(png|jpg|svg|jpeg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'image/[name].[hash].[ext]',
          },
        }],
      },
    ],
  },
};
