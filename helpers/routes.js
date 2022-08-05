export default {
	home: '/',
	services: {
		index: '/services',
		create: {
			index: '/services/create',
			turnkey: '/services/create/turnkey',
			react: '/services/create/react',
			cabinets: '/services/create/cabinets',
			ecommerce: '/services/create/ecommerce',
			portals: '/services/create/portals',
			fintech: '/services/create/fintech',
			apps: '/services/create/apps',
		},
		marketing: {
			index: '/services/marketing',
			seo: '/services/marketing/seo',
			adstrategy: '/services/marketing/adstrategy',
			email: '/services/marketing/email',
			copywriting: '/services/marketing/copywriting',
		},
		support: {
			index: '/services/support',
			team: '/services/support/team',
			technical: '/services/support/technical',
			speed: '/services/support/speed',
			bitrix24: '/services/support/bitrix24',
			design: '/services/support/design',
			sla: {
				href: '/services/support/sla',
				disabled: true,
			},
			virus: {
				href: '/services/support/virus',
				disabled: true,
			},
		},
		design: {
			index: '/services/design',
			ux: '/services/design/ux',
			ui: '/services/design/ui',
			identity: '/services/design/identity',
			control: '/services/design/control',
		},
		research: {
			index: '/services/research',
			cjm: '/services/research/cjm',
			audit: '/services/research/audit',
			business: '/services/research/business',
		},
	},
	company: {
		index: '/company',
		vacancy: {
			href: '/company/vacancy',
		},
		reviews: {
			href: '/company/reviews',
		},
	},
	outstaffing: {
		index: '/outstuffing',
		sergey_kolesnyk: '/outstuffing/sergey-kolesnyk'
	},
	portfolio: {
		index: '/portfolio',
		sam8sara: '/portfolio/sam8sara',
		berber: '/portfolio/berber',
		greenworks: '/portfolio/greenworks',
		alor: '/portfolio/alor',
		hse_digital_smart_doc: '/portfolio/hse-digital-smart-doc',
		future_support: '/portfolio/future-support',
	},
	landing: {
		personalAccounts: `/landing/development-of-personal-accounts`,
		mvp: `/landing/MVP`,
	},
	contact: {
		index: '/contact',
	},
	privacy: {
		index: '/privacy',
	},
	personal: {
		index: {
			href: '/personal',
			disabled: true,
		},
		support: {
			href: '/personal/support',
			disabled: true,
		},
	},
	lc: {
		monitoring: '/lc/monitoring',
	},
};

export const routeInfo = route => {
	if (typeof route === 'string') {
		return { href: route };
	}

	return route.href ? route : { ...route, directory: true };
};

export const generateLinks = (root, opts = {}) => {
	const { exclude = [], excludeDisabled = true } = opts;

	const { directory } = routeInfo(root);
	if (!directory) {
		return [root];
	}

	return Object.entries(root).reduce(
		(result, [key, val]) =>
			exclude.indexOf(key) >= 0 || (excludeDisabled && routeInfo(val).disabled) ? result : result.concat(val),
		[]
	);
};

export const adaptRoute = route => route.split(`-`).join(`_`);
