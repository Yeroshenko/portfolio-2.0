module.exports = function () {

	$.gulp.task('img', () => {
		return $.gulp.src('./app/img/**/*.*')
			.pipe($.gulp.dest('./dist/img/'));
  });
  
};