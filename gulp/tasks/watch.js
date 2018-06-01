var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "."
    }
  });

  watch('./index.html, ./pages/*.html', function() {
    browserSync.reload();
  });
});
