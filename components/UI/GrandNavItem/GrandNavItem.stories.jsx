import React from 'react';

import GrandNavItem from './GrandNavItem';

export default {
	title: 'UI/GrandNavItem',
	component: GrandNavItem,
};

const Template = args => <GrandNavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
	text: 'GrandNavItem text',
	href: '#',
	disabled: false,
};
