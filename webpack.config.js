const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const isDev = process.env.NODE_ENV === 'development';

// normal
const baseConfig = {
  // entry: './src/index.ts',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

// development
const devConfig = {
  mode: 'development',
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'cheap-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8003,
    // open: true,
    overlay: {
      errors: true,
    },
  },
};

// production
const proConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
};

module.exports = merge(baseConfig, isDev ? devConfig : proConfig);
