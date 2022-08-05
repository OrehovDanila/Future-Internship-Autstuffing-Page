import React from 'react';

import BubbledList from './BubbledList';

const process = {
	title: 'process',
	list: [
		'We audit the site and find weaknesses',
		'Personal manager evaluates tasks, announces implementation deadlines',
		'We correct errors and configure hosting (server) of the site',
		'Manager provides the result to the customer',
		'Deploy to production',
	],
};

export default {
	title: 'UI/BubbledList',
	component: BubbledList,
};

const Template = args => <BubbledList {...args} />;

export const Default = Template.bind({});
Default.args = {
	list: process.list,
	bubbles: '',
};

export const Support = Template.bind({});
Support.args = {
	list: process.list,
	bubbles: 'support',
};

export const Design = Template.bind({});
Design.args = {
	list: process.list,
	bubbles: 'design',
};
