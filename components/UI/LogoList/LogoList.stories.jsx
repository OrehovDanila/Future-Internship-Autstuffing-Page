import React from 'react';

import LogoList from './LogoList';

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
	title: 'UI/LogoList',
	component: LogoList,
};

const Template = args => <LogoList {...args} />;

export const Default = Template.bind({});
Default.args = {
	list: partnersLogos,
	className: '',
};
