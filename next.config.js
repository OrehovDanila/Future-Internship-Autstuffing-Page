/* eslint-disable dot-notation */
const withStylus = require('@zeit/next-stylus');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const getLocalIdentName = require('react-dev-utils/getCSSModuleLocalIdent');

const paths = require('./paths');

const { NODE_ENV = 'development' } = process.env;

const baseConf = {
	cssModules: true,
	cssLoaderOptions: {
		getLocalIdent: getLocalIdentName,
	},
	env: {
		API_URL: process.env.API_URL || '',
		SPAM_KEY: process.env.SPAM_KEY || '',
	},
	publicRuntimeConfig: {
		NODE_ENV,
		GA_UID: 'foo',
		GMAP_KEY: 'AIzaSyD2vds89ocgEPMq9ZiNYy8ao9O_QsI-gcg',
		gtm: {
			gtmId: 'GTM-WJN9Q6S',
		},
		social: {
			tel: {
				pure: '',
				visual: '',
			},
			mail: '',
			telegram: '',
			vk: '',
			facebook: '',
			instagram: '',
		},
	},
	distDir: 'build',
	// assetPrefix: isProd ? '' : '',
	webpack(config, options) {
		config.resolve.alias = { ...config.resolve.alias, ...paths };

		config.module.rules.forEach(rule => {
			if (rule.test instanceof RegExp && rule.test.test('.svg')) {
				rule.exclude = /\.svg$/;
			}
		});

		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: '@svgr/webpack' }],
		});

		return config;
	},
};

const apply = (...args) => base => args.reduce((g, f) => f(g), base);

module.exports = apply(withImages, withFonts, withStylus)(baseConf);
