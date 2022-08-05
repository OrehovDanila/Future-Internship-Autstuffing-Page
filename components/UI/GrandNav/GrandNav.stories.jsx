import React from 'react';
import r from '../../../helpers/routes';
import GrandNav from './GrandNav';

const mockLinks = [r.services.index, r.company.index];

export default {
	title: 'UI/GrandNav',
	component: GrandNav,
};

const Template = args => <GrandNav {...args} />;

export const Default = Template.bind({});
Default.args = {
	links: mockLinks,
	className: undefined,
	children: <div>Child component</div>,
};
