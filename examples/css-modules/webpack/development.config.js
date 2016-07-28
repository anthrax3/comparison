const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const values = require('postcss-modules-values')

module.exports = {
  entry: './src',

  output: {
    path: 'build',
    filename: 'bundle.js',
  },

  resolve: {
    root: [
      path.resolve(process.cwd(), './src'),
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css?modules!postcss',
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style!css',
      },
      {
        test: /\.svg$/,
        loader: 'babel!svg-react',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],

  postcss: () => [autoprefixer, values],
}
