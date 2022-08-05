import React from 'react';

import FileChip from './FileChip';

export default {
	title: 'UI/FileChip',
	component: FileChip,
};

const Template = args => <FileChip {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: 'FileName',
	remove: () => {},
};
