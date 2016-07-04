const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    entry: {
      app: resolve(__dirname, 'lib/index.ts')
    },
    output: {
      filename: '[name].bundle.js',
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
      }) : undefined,
      env.prod ? new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module, count) {
          return module.resource && module.resource.indexOf(resolve(__dirname, 'lib')) === -1;
        }
      }) : undefined
    ].filter(p => !!p)
  };
};