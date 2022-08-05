export const clearPhone = val => (val ? val.replace(/[-_()+\s]/g, '') : '');

export const triads = value => {
	const regExp = /(-?\d+)(\d{3})/;
	let stringifiedValue = typeof value === 'number' ? value.toString() : value;

	while (regExp.test(stringifiedValue)) {
		stringifiedValue = stringifiedValue.replace(regExp, `$1 $2`);
	}

	return stringifiedValue;
};

export const positiveTriads = value => {
	const regExp = /(\d+)(\d{3})/;
	const stringifiedValue = typeof value === 'number' ? value.toString() : value;

	let sanitized = stringifiedValue.replace(/!\d/, '');

	while (regExp.test(sanitized)) {
		sanitized = sanitized.replace(regExp, `$1 $2`);
	}

	return stringifiedValue;
};

export const parseToInt = value => (value === '' ? '' : parseInt(value.replace(/\s/gi, ''), 10));
export const parseToFloat = value => (value === '' ? '' : parseFloat(value.replace(/\s/gi, '')));
