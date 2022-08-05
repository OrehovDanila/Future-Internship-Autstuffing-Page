const checkElementPartIsInViewport = (el, additionalHeight = 0) => {
	if (!el) return false;
	const rect = el.getBoundingClientRect();
	return rect.bottom >= additionalHeight && rect.top + additionalHeight <= window.innerHeight;
};

export default checkElementPartIsInViewport;
