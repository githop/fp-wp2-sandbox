
var gulp = require('gulp');
var webpack = require('webpack');
var gutil =  require("gulp-util");
var wpConfig = require('./webpack.config');

gulp.task("webpack prod", function(callback) {
  // run webpack
  webpack(
    // configuration
    wpConfig({prod: true})
  , function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    callback();
  });
});

gulp.task("webpack dev", function(callback) {
  // run webpack
  webpack(
      // configuration
      wpConfig({dev: true})
      , function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
          // output options
        }));
        callback();
      });
});