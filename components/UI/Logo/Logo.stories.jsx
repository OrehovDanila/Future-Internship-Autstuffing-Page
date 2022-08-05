import React from 'react';

import Logo from './Logo';

export default {
	title: 'UI/Logo',
	component: Logo,
};

const Template = args => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
	scrolled: false,
	noHeaderFixed: false,
	className: '',
};
