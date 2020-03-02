module.exports = function () {

  $.gulp.task('scripts', () => {
    return $.gulp.src( './app/js/app.js')
      .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
      // .pipe($.gp.browserify({ debug: true })) 
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('./dist/js/'));
  });

  $.gulp.task('scripts:libs', () => {
    return $.gulp.src($.path.jsLibs)
      .pipe($.gp.concat('libs.js'))
      .pipe($.gulp.dest('./dist/js/'));
  });

};