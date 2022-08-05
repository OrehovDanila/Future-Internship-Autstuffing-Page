export default (keyPresedence = ['full', 'grand', 'bread']) => path =>
	keyPresedence.map(tail =>
		path === '/'
			? ['$', tail].join('.')
			: path
					.split('/')
					.slice(1)
					.concat(['$', tail])
					.join('.')
	);
