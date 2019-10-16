var gulp = require('gulp'),
    path = require('path'),

    browserSync = require("browser-sync").create(),

    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css'),
    browserify = require('gulp-browserify'),
    babelify = require('babelify'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    sftp = require("gulp-sftp")
;

// BrowserSync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: { baseDir: "./dist/" }
  });
});

// Styles
gulp.task('styles', function() {
    gulp.src('src/styles/app.scss')
        .pipe(sass({style: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(minify())
        .pipe(gulp.dest('dist/'))
});

// JavaScript
gulp.task('scripts', function () {
    gulp.src(['src/scripts/app.js'])
        .pipe(browserify({
          transform: ('babelify', {presets: ["es2015", "react"]}),
        }))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

// Images
gulp.task('images', function () {
    gulp.src('src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'))
});

// Build the site to dist
gulp.task('build', function () {
  gulp.src(['src/index.html', 'src/audio/**/*', 'src/fonts/**/*'], {base: "./src"})
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());
});

// Deploy the site to preview location
gulp.task('previews', function(){
  gulp.src(['dist/**', 'dist/**/**'])
    .pipe(sftp({
      host: "159.203.76.23",
      user: "root",
      remotePath: "/var/www/jackwreid.uk/public_html/jm_preview",
      key: {location: "~/.ssh/id_rsa", passphrase: "Joe09051989"}
    }));
});

// Default task is a local build
gulp.task('default', ['styles', 'scripts', 'images', 'build', 'browser-sync'], function(){
  gulp.watch(['src/styles/*.scss', 'src/styles/*/*.scss'] , ['styles', 'build']);
  gulp.watch(['src/scripts/**.js'], ['scripts', 'build'])
  gulp.watch(['src/index.html'], ['build']);
});

// Trigger a full deploy build
gulp.task('outbuild', ['styles', 'scripts', 'images', 'build', 'previews']);
