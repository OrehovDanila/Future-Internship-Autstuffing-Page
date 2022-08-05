const fs = require('fs');
const path = require('path');
const { SitemapStream } = require('sitemap');

const nextI18next = require('./i18n');

const output = process.argv[2];

if (!output) {
	// eslint-disable-next-line no-console
	console.error('Supply output file path');
	return process.exit(-1);
}

const sitemap = new SitemapStream({ hostname: 'https://future-group.ru', xmlns: { xhtml: true } });

const writeStream = fs.createWriteStream(output);
sitemap.pipe(writeStream);

const createFileTreeWalker = regex => node => {
	const stats = fs.lstatSync(node);

	if (stats.isDirectory()) {
		return fs
			.readdirSync(node)
			.map(subnode => createFileTreeWalker(regex)(path.resolve(node, subnode)))
			.reduce((result, subnode) => (subnode ? result.concat(subnode) : result), []);
	}

	if (stats.isFile() && regex.test(path.basename(node))) {
		return [node];
	}

	return null;
};

const langs = nextI18next.config.otherLanguages || [];

const walk = createFileTreeWalker(/^[^_][^\[\]]*\.js$/);

const root = path.resolve(__dirname, './pages');

walk(root).forEach(node => {
	const relative = path.relative(root, node);
	const url = ['', relative.replace(/(\/?index)?\.js$/, '')].join('/');

	const links = langs.map(lang => ({ lang, url: url === '/' ? `/${lang}` : `/${lang}${url}` })).concat({ lang: 'ru', url });

	sitemap.write({ url, links });
});

sitemap.end();
