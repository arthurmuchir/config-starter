var files = require('../files');
var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var errorHandler = require('../error-handler');

gulp.task('lint', function() {
	return gulp.src(files.lintEntry)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'))
		.on('error', errorHandler)
		.pipe(jscs())
		.on('error', errorHandler);
});
