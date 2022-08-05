import React from 'react';

import Title from './Title';

export default {
	title: 'UI/Title',
	component: Title,
};

const Template = args => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
	h1like: false,
	firstLetterUpper: false,
	variant: 'h2',
	children: <div>Child Component</div>,
	beforeText: false,
	beforeBubbles: false,
	hyphens: true,
	className: undefined,
};
