import React from 'react';
import UIDesignServices from './UIDesignServices';
// eslint-disable-next-line import/order
import Button from 'components/UI/Button';

export default {
	title: 'Components/UIDesignServices',
	component: UIDesignServices,
	parameters: { layout: 'fullscreen' },
};

const Template = args => <UIDesignServices {...args} />;

export const Default = Template.bind({});
Default.args = {
	inModal: false,
	children: (
		<Button gray onClick={() => {}}>
			Все работы
		</Button>
	),
};
