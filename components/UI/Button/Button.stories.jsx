import React from 'react';

import Button from './Button';

export default {
	title: 'UI/Button',
	component: Button,
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Button Default',
	type: 'button',
	gray: false,
	lightGray: false,
	className: '',
	disabled: false,
	onClick: () => {},
	to: false,
	loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
	children: 'Button Loading',
	loading: true,
	type: 'button',
	gray: false,
	lightGray: false,
	className: '',
	disabled: false,
	onClick: () => {},
	to: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Button Disabled',
	disabled: true,
	type: 'button',
	gray: false,
	lightGray: false,
	className: '',
	onClick: () => {},
	to: false,
	loading: false,
};

export const Link = Template.bind({});
Link.args = {
	children: 'Button Link',
	to: '/',
	type: 'button',
	gray: false,
	lightGray: false,
	className: '',
	disabled: false,
	onClick: () => {},
	loading: false,
};

export const Gray = Template.bind({});
Gray.args = {
	children: 'Button Gray',
	gray: true,
	type: 'button',
	lightGray: false,
	className: '',
	disabled: false,
	onClick: () => {},
	to: false,
	loading: false,
};

export const LightGray = Template.bind({});
LightGray.args = {
	children: 'Button LightGray',
	lightGray: true,
	type: 'button',
	gray: false,
	className: '',
	disabled: false,
	onClick: () => {},
	to: false,
	loading: false,
};
