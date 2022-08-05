/* eslint-disable max-classes-per-file */
class LocalStorage {
	constructor() {
		this.available = typeof window !== 'undefined' && window.localStorage != null;
	}

	set(key, item) {
		if (this.available) {
			localStorage.setItem(key, item);
		}
	}

	write(key, item, ...rest) {
		const json = JSON.stringify(item, ...rest);

		this.set(key, json);
	}

	read(key) {
		return JSON.parse(this.get(key));
	}

	// eslint-disable-next-line class-methods-use-this
	entries() {
		return Object.entries(localStorage);
	}

	get(key) {
		if (this.available) {
			return localStorage.getItem(key);
		}

		return null;
	}

	remove(key) {
		if (this.available) {
			localStorage.removeItem(key);
		}
	}

	clear() {
		if (this.available) {
			localStorage.clear();
		}
	}
}

export default new LocalStorage();
