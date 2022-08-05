import React from 'react';

import SmallChip from './SmallChip';

export default {
	title: 'UI/SmallChip',
	component: SmallChip,
};

const Template = args => <SmallChip {...args} />;

export const Default = Template.bind({});
Default.args = {
	notifications: 0,
	active: false,
	disabled: false,
	transparent: false,
	children: <div>Child components</div>,
	href: '#',
	onClick: () => {},
};

export const Active = Template.bind({});
Active.args = {
	notifications: 0,
	active: true,
	disabled: false,
	transparent: false,
	children: <div>Child components</div>,
	href: '#',
	onClick: () => {},
};

export const Notifications = Template.bind({});
Notifications.args = {
	notifications: 10,
	active: false,
	disabled: false,
	transparent: false,
	children: <div>Child components</div>,
	href: undefined,
	onClick: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
	notifications: 8,
	active: false,
	disabled: true,
	transparent: false,
	children: <div>Child components</div>,
	href: undefined,
	onClick: () => {},
};

export const Transparent = Template.bind({});
Transparent.args = {
	notifications: 6,
	active: false,
	disabled: false,
	transparent: true,
	children: <div>Child components</div>,
	href: undefined,
	onClick: () => {},
};
