var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    gconcat = require('gulp-concat');

// Make SCSS files for ./dist/
gulp.task('scss', function() {
  return gulp.src("./src/*.scss")
          .pipe(gconcat('simple-colors.scss'))
          .pipe(gulp.dest("./dist/"))
          .pipe(rename({basename: 'simple-colors'}))
          .pipe(gulp.dest("./dist/"))
});


gulp.task('scss-css', function() {
  return gulp.src(["./src/_00-simple-colors.scss","./src/_01-simple-colors-helpers.scss"])
          .pipe(gconcat('_simple-colors.scss'))
          .pipe(gulp.dest("./dist/"))
});

gulp.task('css', function() {
  return gulp.src("./dist/*.scss")
          .pipe(sass())
          .pipe(gulp.dest("./dist/css/"))
          .pipe(csso({sourceMap: true}))
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest("./dist/css/"))
});

gulp.task('simple', function() {
  return gulp.src("./src/_00-simple-colors.scss")
          .pipe(rename({basename: '_simple-colors-mini'}))
          .pipe(gulp.dest("./dist/"))
});

gulp.task('dist', ["scss", "scss-css", "simple"]);
gulp.task('build', ["dist", "css"]);
