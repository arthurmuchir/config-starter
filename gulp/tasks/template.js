var files = require('../files');
var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var reload = require('browser-sync').reload;
var errorHandler = require('../error-handler');

gulp.task('template', function() {
	gulp.src(files.templateEntry)
		.pipe(nunjucks())
		.on('error', errorHandler)
		.pipe(gulp.dest(files.templateDest));

	// add a delay to allow node to empty template cache
	setTimeout(reload, 1000);
});
