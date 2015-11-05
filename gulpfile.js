var gulp         = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var concat       = require('gulp-concat');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var inject       = require('gulp-inject');
var wiredep      = require('wiredep').stream;
 
gulp.task('index', function () {
  var target = gulp.src('./public/index.html');
  return target
          .pipe(inject(gulp.src(['./public/src/**/*.js', './public/src/**/*.css'], {read: false}), {relative: true}))
          .pipe(gulp.dest('./public'));
});

gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('.'));
});


gulp.task('sass', function () {
  gulp.src('./assets/sass/**/*.sass')
      .pipe(sass({ style: 'expanded' }))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
      .pipe(concat('main.css'))
      .pipe(gulp.dest('assets/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'bower', 'index', 'watch'], function() {

});
