import React from 'react';

import SectionWithLogos from './SectionWithLogos';

const partnersLogos = [
	{ file: 'logo_sberbank_autopilot.svg' },
	{ file: 'logo_mts_investments.svg' },
	{ file: 'logo_atb.svg' },
	{ file: 'logo_greenworks.svg' },
	{ file: 'logo_qiwi.svg' },
	{ file: 'logo_yandex_money.svg' },
	{ file: 'logo_alor.png' },
];

export default {
	title: 'UI/SectionWithLogos',
	component: SectionWithLogos,
};

const Template = args => <SectionWithLogos {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Заголовок',
	logos: partnersLogos,
	children: <div>Child Component</div>,
};
