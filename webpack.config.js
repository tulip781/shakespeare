var path = require('path');
const fs = require('fs');
var package = require('./package.json');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/scripts/app.js",
    vendor: Object.keys(package.dependencies),
    otherpages: "./src/scripts/otherpages.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  watch:true,
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
      hash: true,
      filename: 'index.html',
      template: './src/index.html',
      favicon: './src/img/favicon.ico',
      chunks: ['vendor', 'app']
    }),
    new HtmlWebpackPlugin({
      title: "Webpack demo",
      hash: true,
      filename: 'about.html',
      template: './src/about.html',
      favicon: './src/img/favicon.ico',
      chunks: ['vendor', 'otherpages']
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: true
        }
      },
    ],
  },
};
