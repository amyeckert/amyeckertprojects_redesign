var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var cleanCSS = require('gulp-clean-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

var paths = {
    styles: ['./css/scss/style.scss', './css/scss/ie.scss']
}

gulp.task('css', function () {
    gulp.src(paths.styles)
        .pipe(plumber())
        .pipe(sass())
        .pipe(minifycss())
        .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
        .pipe(gulp.dest('css'))
        .pipe(notify({message: 'SCSS Compiled!'}))
        .pipe(livereload());
});

gulp.task('js', function () {

    gulp.src('./js/vendor/plugins/*.js')
        .pipe(plumber())
        .pipe(concat('plugins.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/vendor'))
        .pipe(notify({message: 'Plugins Compiled and Minified!'}));


    gulp.src('./js/script.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({suffix: '-min'}))
        .pipe(gulp.dest('js/min'))
        .pipe(notify({message: 'JS Compiled!'}))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./css/scss/*.scss', ['css']); // watch main styles.scss  
    gulp.watch('./css/scss/**/*.scss', ['css']); // watch partials and vendor dirs
    // gulp.watch('./js/vendor/plugins/*.js', ['js']);
    // gulp.watch('./js/vendor/plugins/**/*.js', ['js']);
    // gulp.watch('./js/script.js', ['js']);
});

gulp.task('default', ['watch']);