import React from 'react';

import Burger from './Burger';

export default {
	title: 'UI/Burger',
	component: Burger,
};

const Template = args => <Burger {...args} />;

export const Default = Template.bind({});
Default.args = {
	forClose: false,
};
