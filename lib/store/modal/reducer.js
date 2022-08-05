/* eslint-disable default-case */
/* eslint-disable no-useless-return */
import { ActionTypes } from './actions';

export const initialState = Object.freeze({
	kind: null,
	title: null,
});

export default (state = initialState, action) => {
	const { payload } = action;

	switch (action.type) {
		case ActionTypes.OPEN_MODAL: {
			const { kind, title } = payload;
			return { ...state, kind, title };
		}

		case ActionTypes.CLOSE_MODAL: {
			return { ...state, kind: null, title: null };
		}

		default:
			return state;
	}
};
