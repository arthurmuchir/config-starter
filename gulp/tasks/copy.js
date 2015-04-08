var files = require('../files');
var gulp = require('gulp');
var reload = require('browser-sync').reload;

gulp.task('copy', function() {
	return gulp.src(files.copyEntry, {
			base: files.copyBase
		})
		.pipe(gulp.dest(files.copyDest))
		.pipe(reload({
			stream: true,
			once: true
		}));
});
