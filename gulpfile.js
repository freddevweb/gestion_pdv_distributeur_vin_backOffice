var gulp = require('gulp');
// npm install gulp --save-dev
var ts = require('gulp-typescript');
// npm install gulp-typescript typescript
var livereload = require('gulp-livereload');
// npm install --save-dev gulp-livereload 
var sourcemaps = require('gulp-sourcemaps');
// npm install --save-dev gulp-sourcemaps 

gulp.task('ts', function () {
    return gulp.src('TS/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js',
            module : "system",
            target: "es6"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('JS'))
        .pipe(livereload());
});

gulp.task("watch", function(){
    livereload.listen();
    gulp.watch( ["./TS/**/*.ts"], ["ts"] );
});