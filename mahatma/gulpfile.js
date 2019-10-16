var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var watch = require("gulp-watch");
var rename = require("gulp-rename");
var inject = require("gulp-inject-string");

var wpheader = "/*\nTheme Name: Mahatma\nAuthor: Jack Reid\nAuthor URI: http://jackwreid.uk/\nDescription: Wordpress theme for the nightlife company's website.\nVersion: 1.0\nLicense: GNU General Public License v2 or later\nLicense URI: http://www.gnu.org/licenses/gpl-2.0.html\nText Domain: mahatma_theme\n*/\n"

gulp.task("styles", function() {
  return gulp.src("scss/app.scss")
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(autoprefixer())
    .pipe(inject.prepend(wpheader))
    .pipe(rename("style.css"))
    .pipe(gulp.dest("."));
});

gulp.task("watch", function () {
  gulp.watch(["scss/*", "scss/*/*"], ["styles"]);
});

gulp.task("default", ["styles"]);