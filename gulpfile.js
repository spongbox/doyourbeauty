var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sourcemaps = require('gulp-sourcemaps')
var templateCache = require('gulp-angular-templatecache');
var minifyHTML = require('gulp-minify-html');

gulp.task('js', function () {
  gulp.src(['app/app.module.js', 'app/app.routes.js', 'app/shared/**/*.js', 'app/components/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.min.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js/'))
});

gulp.task('templates', function () {
  return gulp.src('app/**/*.html')
    .pipe(minifyHTML({ empty: true }))
    .pipe(templateCache('app.tpl.min.js', {
            module: 'app',
            root: 'app/',
            standAlone: false
      }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});
