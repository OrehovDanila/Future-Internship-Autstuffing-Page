import { addDays } from 'date-fns';
import { setCookie } from '../../../helpers/cookies';

export const ActionTypes = {
	SET_SCREEN: 'meta/set-screen',
	INITIALIZE: 'meta/initialize',
	CLOSE_BANNER: 'meta/close-banner',
};

export const setScreen = payload => ({
	type: ActionTypes.SET_SCREEN,
	payload,
});

export const initialize = payload => ({
	type: ActionTypes.INITIALIZE,
	payload,
});

export const closeBanner = () => async dispatch => {
	const now = new Date();
	const twoDaysLater = addDays(now, 2);

	if (typeof window !== 'undefined') {
		setCookie('bannerClose', true, { expires: twoDaysLater });
	}

	dispatch({ type: ActionTypes.CLOSE_BANNER });
};
