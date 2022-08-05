import React from 'react';

import MailAndTelBlock from './MailAndTelBlock';

export default {
	title: 'UI/MailAndTelBlock',
	component: MailAndTelBlock,
	parameters: {
		backgrounds: {
			default: 'footer',
			values: [{ name: 'footer', value: '#000' }],
		},
	},
};

const Template = args => <MailAndTelBlock {...args} />;

export const Default = Template.bind({});
Default.args = {};
