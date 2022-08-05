/* eslint-disable default-case */
/* eslint-disable no-useless-return */
import { ActionTypes } from './actions';

export const initialState = Object.freeze({
	trigger: true,
	isRunning: true,
	// isRunning: false,
	count: 0,
});

export default (state = initialState, action) => {
	const { payload } = action;

	switch (action.type) {
		case ActionTypes.TICK: {
			return { ...state, trigger: !state.trigger };
		}

		case ActionTypes.TOGGLE: {
			return { ...state, isRunning: payload };
		}

		case ActionTypes.INCREMENT: {
			if (state.count === 4) {
				return { ...state, count: 0 };
			}

			return { ...state, count: state.count + 1 };
		}

		default:
			return state;
	}
};
