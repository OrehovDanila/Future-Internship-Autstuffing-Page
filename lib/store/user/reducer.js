/* eslint-disable default-case */
/* eslint-disable no-useless-return */
import { ActionTypes } from './actions';

export const initialState = Object.freeze({
	token: null,
	fname: null,
	lname: null,
	email: null,
});

export default (state = initialState, action) => {
	const { token, fname, lname, email } = action;

	switch (action.type) {
		case ActionTypes.SET_TOKEN: {
			return { ...state, token };
		}

		case ActionTypes.SET_DATA: {
			return { ...state, fname, lname, email };
		}

		default:
			return state;
	}
};
