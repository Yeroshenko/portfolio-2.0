module.exports = function () {

  $.gulp.task('pug', () => {
    return $.gulp.src('./app/template/pages/*.pug')
      .pipe($.gp.pug({
        // locals: JSON.parse(fs.readFileSync('./content.json', 'utf-8')),
        pretty: true
      }))
      .pipe($.gulp.dest('./dist'))
      .on('end', $.bs.reload);
  });

};