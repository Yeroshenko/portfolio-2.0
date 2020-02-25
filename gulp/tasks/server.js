module.exports = function () {
  
  $.gulp.task('server', function () {
      $.bs.init({
        open: false,
        server: {
          baseDir: './dist'
        }
      });
  });
};