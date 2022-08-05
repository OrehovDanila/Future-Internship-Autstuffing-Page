import React from 'react';
import { MockFeedbackFormStore } from '../../../.storybook/mocksRedux';

import FileInput from './FileInput';

const mockSites = ['harz.labs', 'finex', 'sam8sara'];

const defaultState = {
	feedbackForm: {
		isFormAreaOpen: false,
		isSentSuccesfully: null,
	},
};

export default {
	title: 'UI/Form/FileInput',
	component: FileInput,
	decorators: [
		Story => (
			<MockFeedbackFormStore state={defaultState}>
				<Story />
			</MockFeedbackFormStore>
		),
	],
};

const Template = args => <FileInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	options: mockSites,
	input: { name: 'monitoringTestSites' },
	className: undefined,
	headerClassName: undefined,
};
