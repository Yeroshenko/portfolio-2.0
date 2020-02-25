module.exports = function () {
  $.gulp.task('svg', () => {
      return $.gulp.src('./app/img/svg/*.svg')
          .pipe($.gp.svgmin({
              js2svg: {
                  pretty: true
              }
          }))
          .pipe($.gp.cheerio({
              run: function ($) {
                  $('[fill]').removeAttr('fill');
                  $('[stroke]').removeAttr('stroke');
                  $('[style]').removeAttr('style');
              },
              parserOptions: { xmlMode: true }
          }))
          .pipe($.gp.replace('&gt;', '>'))
          .pipe($.gp.svgSprite({
              mode: {
                  symbol: {
                      sprite: "sprite.svg"
                  }
              },
              svg: {
                  xmlDeclaration: false,
                  doctypeDeclaration: false
              }
          }))
          .pipe($.gulp.dest('./dist/img/svg/'));
  });
};