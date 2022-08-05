const isMobile = () => {
	switch (true) {
		case window.matchMedia(`(max-width: 680px)`).matches:
			return 'mobile';

		case window.matchMedia(`(max-width: 1090px)`).matches:
			return 'tablet';

		default:
			return 'desc';
	}
};

export default isMobile;
