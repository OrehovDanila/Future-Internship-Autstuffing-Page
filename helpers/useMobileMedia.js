import { useSelector } from 'react-redux';
import { screen as screenSelector } from '../lib/store/meta/selectors';

const MOBILE_MEDIA = 680;
const TABLET_MEDIA = 1090;

const useMobileMedia = ({ customMobile, customTablet } = {}) => {
	const currentScreen = useSelector(state => screenSelector(state));

	return {
		isMobile: currentScreen <= (customMobile || MOBILE_MEDIA),
		isTablet: currentScreen <= (customTablet || TABLET_MEDIA),
		isDesctop: currentScreen > (customTablet || TABLET_MEDIA),
		sreen: currentScreen,
	};
};

export default useMobileMedia;
