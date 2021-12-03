let gulp = require('gulp')
let concat = require('gulp-concat');

gulp.task('stylesheet', function () {
    return gulp.src('./css/*.scss')
        .pipe(concat('all.scss'))
        .pipe(gulp.dest('./dist/'));
});
