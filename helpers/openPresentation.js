export const presentations = {
	COMMON: '/static/pdf/Presentation',
	DESIGN: '/static/pdf/Presentation_design',
	INVEST: '/static/pdf/Presentation_invest',
	APPS: '/static/pdf/Future_presentations_apps',
	UX: '/static/pdf/Future_presentation_ux',
	IDENTITY: '/static/pdf/Future_identity_presentation',
	SUPPORT: '/static/pdf/Future_presentation_support',
	CJM: '/static/pdf/Future_presentation_cjm',
	RESEARCH: '/static/pdf/Future_presentation_research',
};

const openPresentation = (currentLanguage = 'ru', presentation = presentations.COMMON) => {
	window.open(`${presentation}${currentLanguage === 'ru' ? `` : `_eng`}.pdf`, '_blank');
};
export default openPresentation;
