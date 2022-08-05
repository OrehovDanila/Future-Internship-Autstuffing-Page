/* eslint-disable default-case */
/* eslint-disable no-useless-return */
import { ActionTypes } from './actions';

export const initialState = Object.freeze({
	screen: 0,
	initialized: false,
	bannerClosed: false,
});

export default (state = initialState, action) => {
	const { payload } = action;

	switch (action.type) {
		case ActionTypes.SET_SCREEN: {
			return { ...state, screen: payload };
		}

		case ActionTypes.INITIALIZE: {
			return { ...state, initialized: payload };
		}

		case ActionTypes.CLOSE_BANNER: {
			return { ...state, bannerClosed: true };
		}

		default:
			return state;
	}
};
