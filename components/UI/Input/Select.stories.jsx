import React from 'react';
import { MockRespondFormStore } from '../../../.storybook/mocksRedux';

import Select from './Select';

const mockSites = ['harz.labs', 'finex', 'sam8sara'];

const defaultState = {
	respondForm: {
		isFormAreaOpen: false,
		isSentSuccesfully: null,
	},
};

export default {
	title: 'UI/Form/Select',
	component: Select,
	decorators: [
		Story => (
			<MockRespondFormStore state={defaultState}>
				<Story />
			</MockRespondFormStore>
		),
	],
};

const Template = args => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
	options: mockSites,
	input: { name: 'monitoringTestSites' },
	className: undefined,
	headerClassName: undefined,
};
