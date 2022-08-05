import React from 'react';

import { Row, Col } from 'components/UI/Grid';

export default {
	title: 'UI/Col',
	component: Col,
	decorators: [
		Story => (
			<Row pdAll>
				<Story />
				<Story />
				<Story />
				<Story />
				<Story />
				<Story />
			</Row>
		),
	],
};

const Template = args => <Col {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: 2,
	sizeL: 3,
	sizeMd: 4,
	sizeSmd: 6,
	sizeSm: 12,

	stretchHeight: false,
	fullMobile: false,
	pdAll: false,
	withoutPadding: false,

	children: <div style={{ height: '60px', backgroundColor: 'grey', marginTop: '20px', border: '1px solid black' }}></div>,
};
