// include gulp

var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint', function() {
    gulp.src('./src/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
//JS minifying task
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
    gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./src/compressedFiles'))
});
//Automated Task Runner

gulp.watch('./src/scripts/*.js', function() {
    gulp.run('jshint','compress');
});
// default gulp task
gulp.task('default', ['jshint','compress'], function() {
});

