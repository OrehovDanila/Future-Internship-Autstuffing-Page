const EventEmitter = require('events');
const fs = require('fs');
const http = require('http');
const path = require('path');
const qs = require('querystring');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);
const lstat = promisify(fs.lstat);

const { LOCALES_PATH = 'public/static/locales' } = process.env;

const replaces = [
	[/&nbsp;/gimu, '\u00A0'],
	[/&laquo;/gimu, '\u00AB'],
	[/&raquo;/gimu, '\u00BB'],
	[/0&#247;/gimu, '\u00F7'],
	[/&mdash;/gimu, '\u2014'],
	[/&ndash;/gimu, '\u2013'],
	[/&#8470;/gimu, '\u2116'],
	[/&#8209;/gimu, '\u2011'],
	[/&#8381;/gimu, '\u20BD'],
	[/<\/?p>/gimu, ''],
	[/<\/?nobr>/gimu, ''],
	[/<\/?i>/gimu, ''],
	[/<acronym.+?>/gimu, ''],
	[/<a.+?>/gimu, ''],
	[/<\/acronym>/gimu, ''],
	[/<\/a>/gimu, ''],
	[/<\/?strong>/gimu, ''],
	[/<br \/>/gimu, ''],
];

class Queue extends EventEmitter {
	constructor(opts = {}, ...args) {
		super(...args);

		const { throttle = 200, jitter = 50 } = opts;

		this.q = [];
		this.id = 0;
		this.throttle = throttle;
		this.jitter = throttle;
		this.lock = false;

		this.on('queue', () => {
			if (!this.lock) {
				this.next();
			}
		});

		this.on('done', async () => {
			if (this.q.length > 0) {
				// eslint-disable-next-line no-bitwise
				setTimeout(() => this.next(), this.throttle - this.jitter + ((Math.random() * jitter) << 1));
			}
		});
	}

	async next() {
		if (this.q.length === 0) {
			return;
		}

		const task = this.q.shift();

		let result = null;
		let error = null;

		try {
			this.lock = true;
			result = await task.f(...task.args);
		} catch (e) {
			error = e;
		} finally {
			this.lock = false;
		}

		this.emit('done', { id: task.id, result, error });
	}

	enqueue(f, ...args) {
		this.id += 1;
		this.q.push({ id: this.id, f, args });

		const task_id = this.id;

		this.emit('queue', task_id);

		const emitter = this;

		return new Promise((resolve, reject) => {
			function done({ id, result, error }) {
				if (id !== task_id) {
					return;
				}

				emitter.off('done', done);

				if (error) {
					reject(error);
					return;
				}

				resolve(result);
			}

			emitter.on('done', done);
		});
	}
}

const queue = new Queue();

const typograf = text =>
	new Promise((resolve, reject) => {
		const payload = qs.stringify({ text, chr: 'UTF-8' });

		const req = http.request(
			{
				host: 'www.typograf.ru',
				path: '/webservice/',
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Content-Length': Buffer.byteLength(payload),
				},
			},
			res => {
				let buf = '';

				res.on('error', reject);
				res.on('data', data => (buf += data));
				res.on('end', () => resolve(buf));
			}
		);

		req.on('error', reject);
		req.write(payload);
		req.end();
	});

const replace = content => replaces.reduce((result, [regex, to]) => result.replace(regex, to), content);

const parse = content => JSON.parse(content);
const stringify = json => JSON.stringify(json, null, 2);

const backToObject = keyvalues =>
	keyvalues.reduce(
		(result, [entry, value]) => ({
			...result,
			[entry]: value,
		}),
		{}
	);

const asyncMangleObject = mangle => obj => Object.entries(obj).map(async ([entry, value]) => [entry, await mangle(value)]);

const mangle = async json => {
	if (typeof json === 'string') {
		return queue.enqueue(typograf, json).then(replace);
	}

	if (Array.isArray(json)) {
		return Promise.all(json.map(value => mangle(value)));
	}

	return Promise.all(asyncMangleObject(mangle)(json)).then(backToObject);
};

const fileTreeWalk = async node => {
	const stats = await lstat(node);

	if (stats.isDirectory()) {
		return readdir(node).then(subnodes => Promise.all(subnodes.map(subnode => fileTreeWalk(path.resolve(node, subnode)))));
	}

	if (stats.isFile() && /\.json$/.test(node)) {
		// eslint-disable-next-line no-console
		console.log(`Processing "${path.relative(__dirname, node)}..."`);

		return (
			readFile(node, { encoding: 'utf8' })
				.then(parse)
				.then(mangle)
				.then(stringify)
				.then(content => writeFile(node, content, { encoding: 'utf8' }))
				// eslint-disable-next-line no-console
				.catch(error => console.error(`Oops. Something is wrong with "${node}":\n`, error))
		);
	}

	return Promise.resolve();
};

const pathsToLook = process.argv.slice(2);

if (pathsToLook.length === 0) {
	pathsToLook.push(LOCALES_PATH);
}

// eslint-disable-next-line no-console
Promise.all(pathsToLook.map(p => fileTreeWalk(path.resolve(__dirname, p)))).then(() => console.log('Done!'));
