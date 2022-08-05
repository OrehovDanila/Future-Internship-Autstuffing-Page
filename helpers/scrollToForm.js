import { animateScroll } from 'react-scroll';

const scrollToForm = (id = 'pageform', onlyUp = false) => {
	const form = document.getElementById(id);

	if (form) {
		const bodyPosition = document.body.getBoundingClientRect().top;
		const formPosition = form.getBoundingClientRect().top;
		const headerOffset = 95;

		const offsetPosition = formPosition - headerOffset - 10 - bodyPosition;

		if (!onlyUp || offsetPosition < window.scrollY) animateScroll.scrollTo(offsetPosition);
	}
};

export default scrollToForm;
