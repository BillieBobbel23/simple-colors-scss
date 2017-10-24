var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    gconcat = require('gulp-concat');

gulp.task('make-css', function() {
  return gulp.src("./tests/*.scss")
          .pipe(sass())
          .pipe(gulp.dest("./tests/css/"))
          .pipe(csso({sourceMap: true}))
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest("./tests/css/"))
});

gulp.task('make-dist', function() {
  return gulp.src("./src/*.scss")
          .pipe(gconcat('_simple-colors.scss'))
          .pipe(gulp.dest("./dist/"))
});
gulp.task('make-dist-mini', function() {
  return gulp.src("./src/_00-simple-colors.scss")
          .pipe(gconcat('_simple-colors-mini.scss'))
          .pipe(gulp.dest("./dist/"))
});

gulp.task('build', ["make-dist", "make-dist-mini"]);
