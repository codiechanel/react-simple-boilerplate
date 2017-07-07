var gulp = require("gulp");
var gutil = require("gulp-util");
var runSequence = require("run-sequence");
// import browserSync from 'browser-sync';
// const server = browserSync.create();

var browserSync = require("browser-sync");
// var browserSync = require('browser-sync').create();

gulp.task("build:scripts", function() {
  var fs = require("fs");
  var browserify = require("browserify");
  browserify("./src/index.js")
    .transform("babelify", { presets: ["es2015", "react"] })
    .bundle()
    .pipe(fs.createWriteStream("./public/dev.js"));
  gutil.log(gutil.colors.green("Build complete."));
});

// gulp.task('watch', function() {
//     var callback = function() {
//         gulp.watch(filePaths.src.scripts.all, ['reload:scripts']);
//         gulp.watch(filePaths.src.styles.all, ['reload:styles']);
//         gulp.watch(filePaths.src.teplates.entry, ['reload:templates']);

//         gutil.log(gutil.colors.green('Watching for changes...'));
//     };

//     runSequence(
//         'clean',
//         'lint:scripts',
//         ['build:scripts', 'build:styles', 'build:templates'],
//         'browser-sync',
//         callback
//     );
// });

gulp.task("browser-sync", function() {
  browserSync({
    logLevel: "debug",
    logConnections: true,
    files: "*",
    server: {
      baseDir: "./public"
    },
    port: process.env.PORT || 8080
  });
});

gulp.task("reload:scripts", function( done) {
  gutil.log(gutil.colors.green("reloading..."));

  var callback = function() {
    gutil.log(gutil.colors.green("calling browserSync."));
    browserSync.reload()
     done();
    // browserSync.reload('./index.html')

    // gutil.log(gutil.colors.green("Build complete."));
  };

  callback()

  // runSequence(["build:scripts"], callback);
  // runSequence( callback);
});

// gulp.task("watch", function() {
//   var callback = function() {
//     gulp.watch("./src/*", ["reload:scripts"]);
//     // gutil.log(gutil.colors.green("Build complete."));
//   };

//   runSequence(["build:scripts"], "browser-sync", callback);
// })

gulp.task('watch', ['browser-sync'], function () {
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("./src/*", ["build:scripts", "reload:scripts"]);
});

gulp.task("build", function() {
  var callback = function() {
    // gutil.log(gutil.colors.green("Build complete."));
  };

  runSequence(["build:scripts"], callback);
});

gulp.task("default", ["build"]);
