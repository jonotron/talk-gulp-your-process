var gulp = require('gulp');
var minify = require('gulp-minify-css');

gulp.task('css', function() {
  gulp.src('styles.css')
  .pipe(minify())
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('styles.css', ['css']);
});

