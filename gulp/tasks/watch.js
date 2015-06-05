var files = require('../files');
var gulp = require('gulp');

gulp.task('watch', ['browser-sync', 'css', 'lint', 'copy', 'template'], function() {
	gulp.watch(files.cssWatch, ['css']);
	gulp.watch(files.lintEntry, ['lint']);
	gulp.watch(files.copyEntry, ['copy']);
	gulp.watch(files.templateEntry, ['template']);
});
