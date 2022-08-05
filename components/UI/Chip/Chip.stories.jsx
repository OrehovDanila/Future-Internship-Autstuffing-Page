import React from 'react';

import Chip from './Chip';

export default {
	title: 'UI/Chip',
	component: Chip,
	// decorators: [
	// 	Story => (
	// 		<div style={{ padding: '3em', backgroundColor: '#000' }}>
	// 			<Story />
	// 		</div>
	// 	),
	// ],
	parameters: {
		backgrounds: {
			default: 'footer',
			values: [{ name: 'footer', value: '#000' }],
		},
	},
};

const chips = [
	{ i: 'ВК', txt: 'Вконтакте', href: '#' },
	{ i: 'F', txt: 'F', href: '#' },
];

const Template = args => <Chip {...args} />;

export const Long = Template.bind({});
Long.args = {
	name: chips[0].txt,
	href: chips[0].href,
	icon: chips[0].i,
};

export const Short = Template.bind({});
Short.args = {
	name: chips[1].txt,
	href: chips[1].href,
	icon: chips[1].i,
};
