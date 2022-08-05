import React from 'react';
import { defaultMetaState, tabletMetaState, MockMetaStore } from '../../../.storybook/mocksRedux';

import Sidemenu from './Sidemenu';

export default {
	title: 'UI/Sidemenu',
	component: Sidemenu,
	decorators: [
		Story => (
			<MockMetaStore state={defaultMetaState}>
				<Story />
			</MockMetaStore>
		),
	],
};

const Template = args => <Sidemenu {...args} />;

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
	toggleMenu: () => {},
};

export const Tablet = Template.bind({});
Tablet.decorators = [story => <MockMetaStore state={tabletMetaState}>{story()}</MockMetaStore>];
Tablet.parameters = {
	viewport: {
		defaultViewport: 'mobile2',
	},
};
Tablet.args = {
	isOpen: true,
	toggleMenu: () => {},
};
