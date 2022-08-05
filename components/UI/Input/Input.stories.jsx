import React from 'react';

import Input from './Input';

export default {
	title: 'UI/Form/Input',
	component: Input,
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Input example',
	meta: { active: 'active', error: 'error', touched: false },
	type: 'text',
	placeholder: 'Placeholder',
	half: false,
	mask: '',
	onClick: () => {},
};

export const Error = Template.bind({});
Error.args = {
	label: 'Input example',
	input: { value: 'Error text' },
	meta: { active: 'active', error: 'error', touched: true },
	type: 'text',
	placeholder: 'Placeholder',
	half: true,
	mask: '',
	onClick: () => {},
};
