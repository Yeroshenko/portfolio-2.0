/*
  __  ____     __   _____ _    _ _      _____  
 |  \/  \ \   / /  / ____| |  | | |    |  __ \ 
 | \  / |\ \_/ /  | |  __| |  | | |    | |__) |
 | |\/| | \   /   | | |_ | |  | | |    |  ___/ 
 | |  | |  | |    | |__| | |__| | |____| |     
 |_|  |_|  |_|     \_____|\____/|______|_| */

global.$ = {

  fs: require('fs'),
  bs: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  gulp: require('gulp'),

  path: {
    task: require('./gulp/paths/tasks.js'),
    libs: require('./gulp/paths/libs.js')
  }
};

$.path.task.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug',
		'styles:app',
		$.gulp.series(
			'scripts',
			'scripts:libs'
		),
		'svg',
		'img',
		// 'fonts'
	)
));

// $.gulp.task('build', $.gulp.series(
// 	'clean',
// 	$.gulp.parallel(
// 		'pug',
// 		'styles:dist',
// 		'scripts:_s',
// 		'scripts:admin_dist',
// 		$.gulp.series(
// 			'common-js',
// 			'scripts:vendors',
// 			'scripts:dist',
// 			'clean-js'
// 		),
// 		'svg',
// 		'img',
// 		'fonts'
// 	)
// ));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel(
		'watch',
		'server'
	)
));
