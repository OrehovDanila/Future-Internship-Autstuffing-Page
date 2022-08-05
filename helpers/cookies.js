/* eslint-disable */
export const deserialize = str => {
	return str.split(';').reduce((result, token) => {
		const [key, value] = token
			.trim()
			.split('=')
			.map(decodeURIComponent);

		return { ...result, [key]: value };
	}, {});
};

export const serialize = obj =>
	Object.entries(obj)
		.map(entry => entry.map(encodeURIComponent).join('='))
		.join('; ');

export function setCookie(name, value, options = {}) {
	options = {
		path: '/',
		// add other defaults here if necessary
		...options,
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += '; ' + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += '=' + optionValue;
		}
	}

	document.cookie = updatedCookie;
}

function getCookie(name) {
	let matches = document.cookie.match(
		new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
	setCookie(name, '', {
		'max-age': -1,
	});
}

export default { setCookie, getCookie, deleteCookie, deserialize, serialize };
