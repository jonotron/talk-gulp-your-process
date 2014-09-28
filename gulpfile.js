var gulp = require('gulp');
var minify = require('gulp-minify-css');

gulp.task('css', function() {
  gulp.src('styles.css')
  .pipe(minify())
  .pipe(gulp.dest('dist'));
});

var watch = gulp.watch('styles.css', ['css']);
watch.on('change', function(event) {
  console.log('File %s was %s. Running tasks...', event.path, event.type);
});

