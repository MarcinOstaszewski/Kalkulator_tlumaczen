var gulp = require('gulp');
var functionSass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compilescss', function() {
        return gulp.src('src/sass/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(functionSass({ outputStyle: 'nested', sourcemap: true }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('css'))
    }) // wczytuje pliki / inicjuje sourcemapy / przerabia / zapisuje / wysła do .css

gulp.task('default', function() {
    gulp.start('compilescss');
    gulp.watch('src/sass/**/*.scss', ['compilescss']);
})