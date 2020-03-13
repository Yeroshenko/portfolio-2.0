module.exports = function () {

  $.gulp.task('watch', function () {
    
    $.gulp.watch('./app/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./app/sass/**/*.sass', $.gulp.series('styles'));
    $.gulp.watch(['./app/js/**/*.js'], $.gulp.series('scripts'));
    $.gulp.watch('./app/fonts/**/*.*', $.gulp.series('fonts'));
    $.gulp.watch('./app/img/svg/*.svg', $.gulp.series('svg'));
    $.gulp.watch('./app/img/**/*.*', $.gulp.series('img'));
  });
};