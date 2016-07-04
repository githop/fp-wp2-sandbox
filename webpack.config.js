const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = env => {
  return {
    entry: resolve(__dirname, 'lib/index.ts'),
    output: {
      filename: 'fp.bundle.js',
      path: resolve(__dirname, 'dist'),
      pathinfo: true
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    context: resolve(__dirname, 'lib'),
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
      loaders: [
        {test: /.ts$/, loader: 'ts-loader'}
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
        hash: false
      }),
      env.prod ? new webpack.optimize.OccurrenceOrderPlugin() : undefined,
      env.prod ? new webpack.optimize.DedupePlugin() : undefined,
      env.prod ? new webpack.optimize.UglifyJsPlugin({
        compress: {
          drop_console: false,
          warnings: true
        },
        mangle: {
          except: ['$super', '$', 'exports', 'require']
        }
      }) : undefined
    ].filter(p => !!p)
  };
};