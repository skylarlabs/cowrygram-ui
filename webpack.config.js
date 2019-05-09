const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const rules = [
  /* fonts */
  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
  { test: /\.(ttf|eot)?$/, loader: 'file-loader' },

  /* img */
  {
    test: /\.(jpg|png|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'img/',
          name: '[name].[ext]'
        }
      }
    ]
  },

  /* babel */
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: 'babel-loader'
  },

  /* scss */
  {
    test: /\.(css|scss)$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  },
];


const plugins = [
  new HtmlWebpackPlugin({
    template: './assets/templates/index.template.html',
    alwaysWriteToDisk: true,
    filename: 'index.html'
  }),

  new HtmlWebpackHarddiskPlugin(),
  new webpack.HotModuleReplacementPlugin()
];


const NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
  entry: {
    app: './app/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },

  module: {
    rules: rules
  },

  plugins: plugins,

  devServer: {
    inline: true,
    contentBase: './dist',
    port: 8000,
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true
  },

  mode: NODE_ENV,
  watch: NODE_ENV != 'production'
};