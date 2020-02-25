module.exports = function () {
  
  $.gulp.task('clean', function () {
      return $.del(['./dist'], { force: true });
  });

  $.gulp.task('clean-js', function () {
      return $.del(['./dist/js/common.js'], { force: true });
  });
  
};