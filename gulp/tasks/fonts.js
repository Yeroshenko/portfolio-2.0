module.exports = function () {
	
	$.gulp.task('fonts', () => {
		return $.gulp.src('./app/fonts/**/*.*')
			.pipe($.gulp.dest('./dist/fonts/'));
  });
};