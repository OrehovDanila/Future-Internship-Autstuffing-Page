import SectionWithUnderlinedLists from 'components/UI/SectionWithUnderlinedLists';

import { withTranslation } from 'i18n';

// eslint-disable-next-line import-order-alphabetical/order
import s from './UIDesignServices.styl';

const UIDesignServices = ({ t, children, inModal }) => {
	const menu = [
		t('services.categories.sites', { returnObjects: true }),
		t('services.categories.web-services', { returnObjects: true }),
		t('services.categories.mobile-apps', { returnObjects: true }),
	];

	if (!inModal) {
		menu.splice(3);
		menu.forEach(({ items }) => items?.splice(3));
	}

	return (
		<SectionWithUnderlinedLists pdAll={!inModal} wrapper={!inModal} title={!inModal && t('services.title')} lists={menu}>
			{children}
		</SectionWithUnderlinedLists>
	);
};

export default withTranslation('page_services_design_ui')(UIDesignServices);
