/* eslint-disable default-case */
/* eslint-disable no-useless-return */
import { ActionTypes } from './actions';

export const initialState = Object.freeze({
	isFormAreaOpen: false,
	isSentSuccesfully: null,
});

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.OPEN_FORM: {
			return { ...state, isFormAreaOpen: true };
		}

		case ActionTypes.ON_SUCCESS_SEND: {
			return { ...state, isSentSuccesfully: true };
		}

		case ActionTypes.RESET: {
			return initialState;
		}

		default:
			return state;
	}
};
