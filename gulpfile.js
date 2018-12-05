var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('sass', function () {
	return gulp.src([
		'sass/style.scss'
		])
		.pipe(sass())
		.pipe(gulp.dest('dist/css'))
		.pipe(cssmin())
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('watch', ['sass'], function(){
	gulp.watch('sass/**/*.scss', ['sass']);
});
