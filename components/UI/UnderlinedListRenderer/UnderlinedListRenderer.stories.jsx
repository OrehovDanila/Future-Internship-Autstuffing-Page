import React from 'react';

import UnderlinedListRenderer from './UnderlinedListRenderer';

const mockList = [
	'Единое окно',
	'Автоматизация менеджеров',
	'Встроенная телефония',
	'Сквозная аналитика',
	'Автоматизация рутинных процессов',
	'Аналитика продаж',
	'Отчетность по сделкам',
	'Построение воронок продаж',
];

const mockListIcons = [
	'/static/icons/crm/opportunities/icon-1.svg',
	'/static/icons/crm/opportunities/icon-2.svg',
	'/static/icons/crm/opportunities/icon-3.svg',
	'/static/icons/crm/opportunities/icon-4.svg',
	'/static/icons/crm/opportunities/icon-5.svg',
	'/static/icons/crm/opportunities/icon-6.svg',
	'/static/icons/crm/opportunities/icon-7.svg',
	'/static/icons/crm/opportunities/icon-8.svg',
];

export default {
	title: 'UI/UnderlinedListRenderer',
	component: UnderlinedListRenderer,
};

const Template = args => <UnderlinedListRenderer {...args} />;

export const Default = Template.bind({});
Default.args = {
	pure: false,
	withFade: true,
	wrapper: false,
	pdAll: true,
	list: mockList,
	listIcons: mockListIcons,
	size: 4,
	sizeMd: 6,
	sizeSm: 12,
	id: undefined,
	className: undefined,
};

export const Pure = Template.bind({});
Pure.args = {
	pure: true,
	withFade: false,
	wrapper: false,
	pdAll: true,
	list: mockList,
	listIcons: undefined,
	size: 4,
	sizeMd: 6,
	sizeSm: 12,
	id: undefined,
	className: undefined,
};
