import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import feedbackForm from './feedbackForm/reducer';
import indexPageCounter from './indexPageCounter/reducer';
import meta from './meta/reducer';
import modal from './modal/reducer';
import respondForm from './respondForm/reducer';
import testPM from './testPM/reducer';
import user from './user/reducer';

const createRootReducer = () =>
	combineReducers({
		feedbackForm,
		respondForm,
		meta,
		user,
		modal,
		indexPageCounter,
		testPM,
		form: formReducer,
	});

export default createRootReducer;
