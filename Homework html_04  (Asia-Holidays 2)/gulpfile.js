require('cache-require-paths');
var gulp        = require('gulp');
var haml        = require('gulp-ruby-haml');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var paths       = {
  html:['index.html'],
  css:['main.scss']
}

gulp.task('haml', function () {
    gulp.src('src/index.haml')
    .pipe(haml())
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream:true}));
});

gulp.task('sass', function() {
    gulp.src('src/sass/style.sass')
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream:true}));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./dist"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('default', ['haml', 'sass', 'browserSync']);
gulp.watch('src/index.haml', ['haml']);
gulp.watch('src/sass/style.sass', ['sass']);