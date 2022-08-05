import React from 'react';

import Success from './Success';

export default {
	title: 'Components/Forms/FeedbackSuccess',
	component: Success,
};

const Template = args => <Success {...args} />;

export const Default = Template.bind({});
Default.args = {};
