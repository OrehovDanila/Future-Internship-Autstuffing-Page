const fs = require('fs');

const parse = content => JSON.parse(content);
const stringify = json => JSON.stringify(json, null, 2);

let i = 0;
let buf = '';

const addtobuffer = json => {
	if (typeof json === 'string') {
		buf += `${json}\n\n`;
		return;
	}

	if (Array.isArray(json)) {
		json.forEach(val => addtobuffer(val));
		return;
	}

	Object.values(json).forEach(val => addtobuffer(val));
};

const replace = json => {
	if (typeof json === 'string') {
		const res = buf[i];
		// eslint-disable-next-line no-plusplus
		i++;
		return res;
	}

	if (Array.isArray(json)) {
		return json.map(val => replace(val));
	}

	return Object.entries(json).reduce(
		(res, [key, val]) => ({
			...res,
			[key]: replace(val),
		}),
		{}
	);
};

const fname = process.argv[2];
const txtfile = [fname, 'txt'].join('.');

if (!fname) {
	// eslint-disable-next-line no-console
	console.log('no file name');
	return;
}

if (fs.existsSync(txtfile)) {
	const txt = fs.readFileSync(txtfile);
	const dst = fname.replace('/ru/', '/en/');

	buf = txt.toString().split('\n\n');

	const result = replace(parse(fs.readFileSync(fname)));

	fs.writeFileSync(dst, stringify(result));
	fs.unlinkSync(txtfile);

	return;
}

addtobuffer(parse(fs.readFileSync(fname)));

fs.writeFileSync(txtfile, buf);
