module.exports = function () {
  
  $.gulp.task('styles', () => {
      return $.gulp.src('./app/sass/style.sass')
          .pipe($.gp.plumber())
          .pipe($.gp.sourcemaps.init())
          .pipe($.gp.sass({
              outputStyle: 'expanded'
          }))
          .on("error", $.gp.notify.onError({
            message: 'Error: <%= error.message %>',
            title: 'Style error'
          }))
          .pipe($.gp.autoprefixer({ overrideBrowserslist: 'last 8 version' }))
          .pipe($.gp.sourcemaps.write())
          .pipe($.gulp.dest('./dist/css'))
          .pipe($.bs.reload({ stream: true }));
  });
  
  $.gulp.task('styles:libs', () => {
    return $.gulp.src($.path.cssLibs)
      .pipe($.gp.concat('libs.css'))
      .pipe($.gulp.dest('./dist/css/'));
  });

  // $.gulp.task('styles:dist', () => {
  //     return $.gulp.src('./app/sass/style.sass')
  //         .pipe($.gp.plumber())
  //         .pipe($.gp.sass({
  //             outputStyle: 'expanded'
  //         }))
  //         .on("error", $.gp.notify.onError({
  //           message: 'Error: <%= error.message %>',
  //           title: 'Style error'
  //         }))
  //         // .pipe($.gp.rename({
  //         //     suffix: '.min',
  //         //     prefix : ''
  //         // }))
  //         .pipe($.gp.autoprefixer({ overrideBrowserslist: 'last 8 version' }))
  //         // .pipe($.gp.csscomb())
  //         // .pipe($.gp.csso())
  //         .pipe($.gulp.dest('./dist/css'));
  // });
};