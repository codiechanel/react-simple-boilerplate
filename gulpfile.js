var gulp = require('gulp')
var gutil = require('gulp-util')
var runSequence = require('run-sequence');

gulp.task("build:scripts", function() {
  var fs = require("fs");
  var browserify = require("browserify");
  browserify("./src/index.js")
    .transform("babelify", { presets: ["es2015", "react"] })
    .bundle()
    .pipe(fs.createWriteStream("./public/dev.js"));
});

gulp.task("build", function() {
  var callback = function() {
    gutil.log(gutil.colors.green("Build complete."));
  };

  runSequence(["build:scripts"], callback);
});

gulp.task("default", ["build"]);
