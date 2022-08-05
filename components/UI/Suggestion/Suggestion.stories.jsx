import React from 'react';

import Suggestion from './Suggestion';

export default {
	title: 'UI/Suggestion',
	component: Suggestion,
};

const Template = args => <Suggestion {...args} />;

export const Default = Template.bind({});
Default.args = {
	emoji: undefined,
	children: <div>Child component</div>,
};

export const Robot = Template.bind({});
Robot.args = {
	emoji: 'robot',
	children: <div>Child component</div>,
};

export const Smile = Template.bind({});
Smile.args = {
	emoji: 'smile',
	children: <div>Child component</div>,
};

export const Anxious = Template.bind({});
Anxious.args = {
	emoji: 'anxious',
	children: <div>Child component</div>,
};
