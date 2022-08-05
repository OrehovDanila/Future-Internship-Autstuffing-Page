import React from 'react';

import IosToggle from './IosToggle';

export default {
	title: 'UI/IosToggle',
	component: IosToggle,
	parameters: {
		backgrounds: {
			default: 'footer',
			values: [{ name: 'footer', value: '#000' }],
		},
	},
};

const Template = args => <IosToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
	text: 'IosToggle text',
	className: '',
	onChange: () => {},
	checked: false,
};
