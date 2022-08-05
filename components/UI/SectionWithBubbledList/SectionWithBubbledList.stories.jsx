import React from 'react';

import SectionWithBubbledList from './SectionWithBubbledList';

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
	title: 'UI/SectionWithBubbledList',
	component: SectionWithBubbledList,
};

const Template = args => <SectionWithBubbledList {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: process.title,
	list: process.list,
	bubbles: 'support',
	children: <div>Child component</div>,
	wrapper: false,
};
