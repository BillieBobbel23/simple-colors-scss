var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename');

gulp.task('make-css', function() {
  return gulp.src("./tests/*.scss")
          .pipe(sass())
          .pipe(gulp.dest("./tests/css/"))
          .pipe(csso({sourceMap: true}))
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest("./tests/css/"))
});
