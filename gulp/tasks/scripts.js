module.exports = function () {

  $.gulp.task('scripts', () => {
    return $.gulp.src( './app/js/scripts.js')
      .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
      // .pipe($.gp.browserify({ debug: true })) 
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('scripts.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('./dist/js/'));
  });


};