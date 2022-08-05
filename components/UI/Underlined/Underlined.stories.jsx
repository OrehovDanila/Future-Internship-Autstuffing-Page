import React from 'react';

import Underlined from './Underlined';

export default {
	title: 'UI/Underlined',
	component: Underlined,
};

const Template = args => <Underlined {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Underlined child string',
	variant: 'div',
	noGutter: false,
	centered: false,
	gray: false,
	red: false,
	className: undefined,
};
