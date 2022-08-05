/* eslint-disable no-console */
const cookieParser = require('cookie-parser');
const express = require('express');
const proxy = require('express-http-proxy');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const deserialize = str => {
	return str.split(';').reduce((result, token) => {
		const [key, value] = token.trim().split('=');

		return { ...result, [key]: value };
	}, {});
};

const serialize = obj =>
	Object.entries(obj)
		.map(entry => entry.join('='))
		.join('; ');

const nextI18next = require('./i18n');

const { NODE_ENV, PORT = '4000', SPAM_KEY = '552388701836', API_URL = 'http://develop.future-group.ru/api2' } = process.env;

const API_URL_NEW = 'https://develop.future-group.ru/api/v1';

const apiUrl = new URL(API_URL);
const apiUrlNew = new URL(API_URL_NEW);

console.log(API_URL);
console.log('Origin URL:', apiUrl.origin);

const port = parseInt(PORT, 10);
const app = next({ dev: NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

const urlsToProxy = ['/forms/', '/auth/', '/register/', '/info/', '/recoverypassword/', '/changepassword/'];

const urlsToProxyNew = [/manager-test\/*/];

const proxyReqOptDecorator = req => {
	// eslint-disable-next-line dot-notation
	req.headers['X-SPAM-PROTECT'] = SPAM_KEY;
	return req;
};

const proxyReqPathResolver = req => {
	return [API_URL, req.url, req.url[req.url.length - 1] === '/' ? '' : '/'].join('');
};

const proxyReqPathResolverNew = req => {
	return [API_URL_NEW, req.url, req.url[req.url.length - 1] === '/' ? '' : '/'].join('');
};

(async () => {
	await app.prepare();
	const server = express();

	server.use(cookieParser());
	server.use(express.json());
	server.use(express.urlencoded({ extended: true }));

	if (NODE_ENV !== 'production') {
		console.log('proxying /local/* /personal/support/*');

		server.get('/local/*', proxy(apiUrl.origin));

		server.get(
			'/personal/support/*',
			proxy(apiUrl.origin, {
				userResHeaderDecorator: headers => {
					headers['cache-control'] = 'no-cache';

					const setCookie = headers['set-cookie'];

					if (setCookie) {
						if (Array.isArray(setCookie)) {
							headers['set-cookie'] = setCookie.map(str => {
								const c = deserialize(str);
								c.domain = 'localhost';
								return serialize(c);
							});
						} else {
							const c = deserialize(setCookie);
							c.domain = 'localhost';
							headers['set-cookie'] = serialize(c);
						}
					}

					return headers;
				},
			})
		);
	}

	server.post(
		urlsToProxy[0],
		proxy(apiUrl.origin, {
			proxyReqOptDecorator,
			proxyReqPathResolver,
			parseReqBody: false,
		})
	);

	urlsToProxy.slice(1).forEach(endpoint => {
		server.get(
			endpoint,
			proxy(apiUrl.origin, {
				proxyReqPathResolver,
			})
		);
		server.post(
			endpoint,
			proxy(apiUrl.origin, {
				proxyReqPathResolver,
			})
		);
	});

	urlsToProxyNew.forEach(endpoint => {
		server.get(
			endpoint,
			proxy(apiUrlNew.origin, {
				proxyReqPathResolver: proxyReqPathResolverNew,
			})
		);
		server.post(
			endpoint,
			proxy(apiUrlNew.origin, {
				proxyReqPathResolver: proxyReqPathResolverNew,
			})
		);
	});

	server.use(nextI18NextMiddleware(nextI18next));

	server.get('*', (req, res) => {
		if (/\/$/.test(req.url) && req.url !== '/') {
			const to = req.url.replace(/\/$/, '');
			return res.redirect(301, to);
		}

		return handle(req, res);
	});

	await server.listen(port);
	console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
