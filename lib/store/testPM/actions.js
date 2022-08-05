import axios from 'axios';
import { SubmissionError } from 'redux-form';
import cookies from '../../../helpers/cookies';

export const ActionTypes = {
	SET_QUESTIONS: 'test-pm/set-questions',
	SET_DIPLOMA: 'test-pm/set-diploma',
	ADD_ANSWER: 'test-pm/add-answer',
	CLEAR_QUESTIONS: 'test-pm/clear-questions',
	SET_INITIAL: 'test-pm/set-initial',
	SET_FETCHING: 'test-pm/set-fetching',
	SET_SENDED: 'test-pm/set-sended',
	SET_ERROR: 'test-pm/set-error',
};

export const setQuestions = questions => ({
	type: ActionTypes.SET_QUESTIONS,
	questions,
});

export const addAnswer = (questionId, answerId) => ({
	type: ActionTypes.ADD_ANSWER,
	questionId,
	answerId,
});

export const setDiploma = diploma => ({
	type: ActionTypes.SET_DIPLOMA,
	diploma,
});

export const clearQuestions = () => ({
	type: ActionTypes.CLEAR_QUESTIONS,
});

export const setInitial = () => ({
	type: ActionTypes.SET_INITIAL,
});

export const setFetching = isFetching => ({
	type: ActionTypes.SET_FETCHING,
	isFetching,
});

export const setSended = isSended => ({
	type: ActionTypes.SET_SENDED,
	isSended,
});

export const setError = isError => ({
	type: ActionTypes.SET_ERROR,
	isError,
});

export const clearError = () => dispatch => {
	dispatch(setError(false));
};

const handleErrors = res => {
	if (res.status !== 200) {
		throw new Error('Request error');
	}

	const { status, data } = res.data;

	if (status !== 'success') {
		const errors = data.error || data.errors || 'Произошла ошибка. Пожалуйста, повторите попытку позднее';
		const error = errors.replace(/<br>/g, '\n');
		throw new SubmissionError({ _error: error });
	}

	return data;
};

// const passSubmissionError = error => {
// 	if (error instanceof SubmissionError) {
// 		throw error;
// 	}

// 	throw new SubmissionError({ _error: 'Произошла ошибка. Пожалуйста, повторите попытку позднее' });
// };

export const getQuestions = () => dispatch => {
	dispatch(clearError());
	dispatch(setFetching(true));
	axios
		.get('/manager-test/question/')
		.then(handleErrors)
		.then(data => {
			dispatch(setFetching(false));
			dispatch(setQuestions(data));
		})
		.catch(() => {
			dispatch(setError(true));
			dispatch(setFetching(false));
		});
};

export const sendStatistic = statistic => () => {
	const result = cookies.getCookie('is_answered');
	if (!result)
		axios
			.post('/manager-test/save-count-question/', { questions: statistic })
			.then(handleErrors)
			.then(() => {
				cookies.setCookie('is_answered', '1', { 'max-age': '3600' });
			})
			.catch(() => {});
};

export const sendDiplomaInfo = diplomaInfo => dispatch => {
	dispatch(clearError());
	dispatch(setFetching(true));
	axios
		.post('/manager-test/question/', diplomaInfo)
		.then(handleErrors)
		.then(data => {
			dispatch(setFetching(false));
			if (data) dispatch(setDiploma(data));
		})
		.catch(() => {
			dispatch(setError(true));
			dispatch(setFetching(false));
		});
};

export const saveAndSendResult = diplomaId => dispatch => {
	dispatch(clearError());
	dispatch(setFetching(true));
	axios
		.get(`/manager-test/save-and-send-certificate/${diplomaId}/`)
		.then(handleErrors)
		.then(() => {
			dispatch(setFetching(false));
			dispatch(setSended(true));
		})
		.catch(() => {
			dispatch(setError(true));
			dispatch(setFetching(false));
		});
};
