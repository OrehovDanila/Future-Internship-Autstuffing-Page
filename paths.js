const { resolve } = require('path');

module.exports = {
	lib: resolve(__dirname, 'lib'),
	components: resolve(__dirname, 'components'),
	pages: resolve(__dirname, 'pages'),
	static: resolve(__dirname, 'public/static'),
	helpers: resolve(__dirname, 'helpers'),
	store: resolve(__dirname, 'lib/store'),
	styles: resolve(__dirname, 'styles'),
	i18n: resolve(__dirname, 'i18n.js'),
};
