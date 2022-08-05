/* eslint-disable default-case */
/* eslint-disable no-useless-return */
import { ActionTypes } from './actions';

export const initialState = Object.freeze({
	diploma: null,
	questions: [],
	answers: [],
	isSended: false,
	isFetching: false,
	isError: false,
});

export default (state = initialState, action) => {
	const { diploma, questions, answerId, questionId, isError, isSended, isFetching } = action;

	switch (action.type) {
		case ActionTypes.SET_QUESTIONS: {
			return { ...state, questions: [...questions] };
		}

		case ActionTypes.ADD_ANSWER: {
			const answerIndex = state.answers.findIndex(answer => answer.questionId === questionId);
			const newAnswers = state.answers.map((answer, idx) => {
				if (idx !== answerIndex) return answer;
				return {
					answerId,
					questionId,
				};
			});
			if (answerIndex === -1)
				newAnswers.push({
					answerId,
					questionId,
				});
			return {
				...state,
				answers: newAnswers,
			};
		}

		case ActionTypes.SET_DIPLOMA: {
			return { ...state, diploma };
		}

		case ActionTypes.SET_SENDED: {
			return { ...state, isSended };
		}

		case ActionTypes.CLEAR_QUESTIONS: {
			return { ...state, questions: [], answers: [] };
		}

		case ActionTypes.SET_INITIAL: {
			return { ...initialState };
		}

		case ActionTypes.SET_FETCHING: {
			return { ...state, isFetching };
		}

		case ActionTypes.SET_ERROR: {
			return { ...state, isError };
		}

		default:
			return state;
	}
};
