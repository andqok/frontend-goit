var gulp = require('gulp'),
    haml = require('gulp-ruby-haml');
    sass = require('gulp-sass');
    livereload = require('gulp-livereload');

gulp.task('haml', function () {
    gulp.src('src/index.haml')
    .pipe(haml())
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('sass', function () {
    gulp.src('src/sass/**/*.sass')
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('default', ['haml', 'sass']);
livereload.listen();
  gulp.watch('src/index.haml', ['haml']);
  gulp.watch('src/sass/style.sass', ['sass']);
