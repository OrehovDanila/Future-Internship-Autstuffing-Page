import React from 'react';

import Loading from './Loading';

export default {
	title: 'UI/Loading',
	component: Loading,
};

const Template = args => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
	loading: true,
	centered: false,
	gray: false,
	children: <div>Загрузка завершена. Здесь может быть любой компонент.</div>,
	inForm: false,
	inModal: false,
	wrapper: undefined,
};

export const CenteredGray = Template.bind({});
CenteredGray.args = {
	loading: true,
	centered: true,
	gray: true,
	children: <div>Загрузка завершена. Здесь может быть любой компонент.</div>,
	inForm: false,
	inModal: false,
	wrapper: undefined,
};
