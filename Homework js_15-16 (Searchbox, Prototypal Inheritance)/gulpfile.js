const gulp        = require('gulp');
const haml        = require('gulp-ruby-haml');
const sass        = require('gulp-sass');
const browserSync = require('browser-sync');
const babili      = require('gulp-babili');
const htmlmin     = require('gulp-htmlmin');
const cleanCSS    = require('gulp-clean-css');
const reload      = browserSync.reload;
const paths       = {
  html:['index.html'],
  css:['main.scss']
}

gulp.task('haml', function () {
  gulp.src('src/*.haml')
  .pipe(haml()
  .on('error', function(e) { console.log(e.message); }))
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist'))
  .pipe(reload({stream:true}));
});

gulp.task('sass', function() {
  gulp.src('src/sass/*.sass')
  .pipe(sass()
  .on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/css'))
  .pipe(reload({stream:true}));
});

gulp.task('minify', function () {
  gulp.src('src/js/script.js')
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
  .pipe(gulp.dest('dist/js'));

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
//gulp.watch('src/js/*.js', ['minify']);
