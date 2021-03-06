var gulp = require("gulp");
var gutil = require("gulp-util");

const paths = {
  scripts: {
    src: "src/*.js",
    dest: "dist/scripts/"
  }
};

import browserSync from "browser-sync";
const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: "./public"
    }
  });
  done();
}

function scripts(done) {
  gutil.log(gutil.colors.green("scripts called."));
  var browserify = require("browserify");
  var fs = require("fs");
  //   return gulp.src(paths.scripts.src, { sourcemaps: true })
  //     .pipe(babel())
  //     .pipe(uglify())
  //     .pipe(concat('index.min.js'))
  //     .pipe(gulp.dest(paths.scripts.dest));

  return browserify("./src/index.js")
    .transform("babelify", { presets: ["es2015", "react"] })
    .bundle()
    .pipe(fs.createWriteStream("./public/dev.js"));
//   done();
}


var watcher = gulp.watch(paths.scripts.src, gulp.series(scripts))
watcher.on('change', function(path, stats) {
  console.log('File ' + path + ' was changed');
});

watcher.on('unlink', function(path) {
  console.log('File ' + path + ' was removed');
})

const watchy = () => watcher

const watchDemo = gulp.series(scripts,watchy);
export { watchDemo }

// export { watcher }



const watch = () => gulp.watch(paths.scripts.src, gulp.series(scripts, reload));

// export function styles() {
//   console.log("cool");
//   return "success";
// }

const browser = gulp.series(serve, watch);
export { browser }



const build = gulp.series(scripts);
export { build }

/*
 * Export a default task
 */
export default build;
