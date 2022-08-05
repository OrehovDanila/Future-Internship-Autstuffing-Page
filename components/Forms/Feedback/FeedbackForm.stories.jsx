import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { MockFeedbackFormStore } from '../../../.storybook/mocksRedux';
import { feedbackForm } from '../../../lib/store/feedbackForm/reducer';
import { modal } from '../../../lib/store/modal/reducer';
import FeedbackForm from './Feedback';

// const rootReducer = combineReducers({ feedbackForm, modal });

const defaultState = {
	feedbackForm: { isFormAreaOpen: false },
	modal: {},
};

// const store = createStore(rootReducer, defaultState);

export default {
	title: 'Components/Forms/FeedbackForm',
	component: FeedbackForm,
	decorators: [
		Story => (
			// <Provider store={store}>
			<MockFeedbackFormStore store={defaultState}>
				<Story />
			</MockFeedbackFormStore>
			// </Provider>
		),
	],
};

const Template = args => <FeedbackForm {...args} />;

export const Default = Template.bind({});
Default.args = {
	wrapper: true,
	error: 'error',
	title: 'Title',
	inModal: false,
	onLanding: false,
	handleSubmit: () => {},
	submitting: false,
	valid: true,
	className: undefined,
};
