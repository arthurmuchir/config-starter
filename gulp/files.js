module.exports = {
	delEntry: [
		'**/.DS_Store',
		'app/public/dist',
		'npm-debug.log'
	],
	copyEntry: [
		'app/public/src/*',
		'app/public/src/media/img/**',
		'app/public/src/media/font/**',
		'app/public/src/media/vendor/**'
	],
	copyDest: 'app/public/dist',
	copyBase: 'app/public/src',
	browserifyEntry: './app/public/src/media/js/main.js',
	browserifyDest: 'app/public/dist/media/js',
	cssEntry: 'app/public/src/media/stylus/main.styl',
	cssDest: 'app/public/dist/media/css',
	cssBase: 'app/public/src',
	cssWatch: 'app/public/src/media/stylus/**/*.styl',
	lintEntry: 'app/public/src/media/js/**/*.js',
	remapifyEntry: 'app/public/src/media/js',
	templateEntry: 'app/views/**/*.html',
	templateDest: 'app/public/dist/media/jst'
};
