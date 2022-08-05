const NextI18Next = require('next-i18next').default;

const currency = {
	ru: { sign: '₽', ratio: 1 },
	en: { sign: '$', ratio: 75 },
};

const triads = value => {
	const regExp = /(-?\d+)(\d{3})/;
	let stringifiedValue = typeof value === 'number' ? value.toString() : '';

	while (regExp.test(stringifiedValue)) {
		// eslint-disable-next-line no-irregular-whitespace
		stringifiedValue = stringifiedValue.replace(regExp, `$1 $2`);
	}

	return stringifiedValue;
};

const price = (value, lng) => {
	if (typeof value !== 'number' || !currency[lng]) {
		return value;
	}

	const { sign, ratio } = currency[lng];

	// eslint-disable-next-line no-irregular-whitespace
	return `${triads(Math.floor(value / ratio))} ${sign}`;
};

// value in minutes
const time = (value, lng) => {
	let minutes = Math.floor(value % 60);
	let hours = Math.floor((value / 60) % 24);
	let days = Math.floor(value / 60 / 24);

	days = days > 0 ? [days, lng === 'ru' ? 'д.' : 'd.'].join(' ') : null;
	hours = hours > 0 ? [hours, lng === 'ru' ? 'ч.' : 'h.'].join(' ') : null;
	minutes = [minutes, lng === 'ru' ? 'мин.' : 'min.'].join(' ');

	return [days, hours, minutes].filter($ => $ !== null).join(' ');
};

const formatters = {
	price,
	time,
};

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'ru',
	fallbackLng: 'ru',
	otherLanguages: ['en'],
	defaultNS: 'common',
	fallbackNS: ['nav'],
	localePath: process.browser ? 'static/locales' : 'public/static/locales',
	serverLanguageDetection: false,
	localeSubpaths: {
		en: 'en',
	},
	interpolation: {
		format: (value, format, lng) => {
			const fn = formatters[format];
			return typeof fn === 'function' ? fn(value, lng) : value;
		},
	},
});

NextI18NextInstance.languages = ['ru', 'en'];

module.exports = NextI18NextInstance;
