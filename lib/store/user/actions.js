import axios from 'axios';
import getConfig from 'next/config';
import { SubmissionError } from 'redux-form';
import cookies from '../../../helpers/cookies';
import localStorage from '../../../helpers/LocalStorage';

const { publicRuntimeConfig } = getConfig();

const { NODE_ENV, PORT = '4000' } = publicRuntimeConfig;

export const ActionTypes = {
	SET_TOKEN: 'user/set-token',
	SET_DATA: 'user/set-data',
};

export const setToken = token => ({
	type: ActionTypes.SET_TOKEN,
	token,
});

export const setData = (firstName, lastName, email) => ({
	type: ActionTypes.SET_DATA,
	firstName,
	lastName,
	email,
});

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

const passSubmissionError = error => {
	if (error instanceof SubmissionError) {
		throw error;
	}

	throw new SubmissionError({ _error: 'Произошла ошибка. Пожалуйста, повторите попытку позднее' });
};

export const recoverPassword = credentials => {
	if (NODE_ENV === 'development') {
		const { returnPath = '/' } = credentials;
		const checkwd =
			Math.random()
				.toString(36)
				.substring(2, 15) +
			Math.random()
				.toString(36)
				.substring(2, 15);
		// eslint-disable-next-line no-console
		console.log(`Change password -> http://localhost:${PORT}${returnPath}?recover=true&checkwd=${checkwd}`);
		return () => Promise.resolve(credentials);
	}

	return () =>
		axios
			.post('/recoverypassword', credentials)
			.then(handleErrors)
			.then(() => credentials)
			.catch(passSubmissionError);
};

export const changePassword = credentials => {
	if (NODE_ENV === 'development') {
		return () => Promise.resolve(credentials);
	}

	return () =>
		axios
			.post('/changepassword', credentials)
			.then(handleErrors)
			.then(() => credentials)
			.catch(passSubmissionError);
};

export const introspectToken = token => dispatch =>
	axios
		.post('/info', { token })
		.then(handleErrors)
		.then(({ user }) => dispatch(setData(user.fname, user.lname)))
		.catch(passSubmissionError);

export const signIn = credentials => dispatch =>
	axios
		.post('/auth', credentials)
		.then(handleErrors)
		.then(({ token }) => {
			dispatch(setToken(token));
			localStorage.set('token', token);
			cookies.setCookie('user_tk_site', token);
		})
		.then(
			() =>
				(window.location.href =
					NODE_ENV === 'production' ? 'https://future-group.ru/personal/support/' : '/personal/support/')
		)
		.catch(passSubmissionError);

export const signUp = credentials => dispatch =>
	axios
		.post('/register', credentials)
		.then(handleErrors)
		.then(() => {
			const { email: login, password } = credentials;
			return dispatch(signIn({ login, password }));
		})
		.catch(passSubmissionError);
