const escape = require('shell-quote').quote;

const isWin = process.platform === 'win32';

module.exports = {
	'**/*.{js,jsx,ts,tsx}': filenames => {
		const escapedFileNames = filenames.map(filename => `"${isWin ? filename : escape([filename])}"`).join(' ');
		return [`prettier --write ${escapedFileNames}`, `eslint --fix --ext js,jsx ${filenames.map(f => `"${f}"`).join(' ')}`];
	},
};
