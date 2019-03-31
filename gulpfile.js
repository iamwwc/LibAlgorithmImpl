let gulp = require('gulp')
let sass = require('gulp-sass')

gulp.task('tocss',cb => {
	gulp.src('*.sass').pipe(sass()).pipe(gulp.dest(f => f.base))
})