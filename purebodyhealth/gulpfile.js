var gulp = require('gulp'),
    path = require('path'),
    shell = require('gulp-shell'),

    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    sftp = require("gulp-sftp")
;


// SASS
gulp.task('sass', function() {
    gulp.src('_sass/style.scss')
        .pipe(sass({style: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(minify())
        .pipe(gulp.dest('css/'))
});

// JS
gulp.task('js', function () {
    gulp.src(['_js/**.js'])
        .pipe(concat('build.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
});

// Images
gulp.task('images', function () {
    gulp.src('_images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
});

// Jekyll build runners
gulp.task('jekyll-local', shell.task ([
  "jekyll build --config _local.yml"
]));
gulp.task('jekyll-deploy', shell.task ([
  "jekyll build --config _deploy.yml"
]));

// Default task is a local build
gulp.task('default', ['sass', 'js', 'images', 'jekyll-local'], function(cb){
  gulp.watch(['_sass/*.scss', '_sass/*/*.scss'] , ['sass', 'jekyll-local']);
  gulp.watch(['*.html', 'work/*.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-local']);
});

