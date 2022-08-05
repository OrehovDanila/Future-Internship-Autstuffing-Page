import React from 'react';

import { Row, Col } from 'components/UI/Grid';

export default {
	title: 'UI/Row',
	component: Row,
};

const Template = args => <Row {...args} />;

// eslint-disable-next-line react/no-multi-comp
const Filler = ({ height }) => (
	<Col size={3}>
		<div
			style={{
				height: `${height}px`,
				backgroundColor: 'grey',
				marginTop: '20px',
				border: '1px solid black',
			}}
		></div>
	</Col>
);

export const Default = Template.bind({});
Default.args = {
	verticalCenter: false,
	verticalBottom: false,
	center: false,
	marginAuto: false,
	// wrapper: false,
	// wrapperHalf: false,
	pdAll: false,
	noMargin: false,
	mobileNoMargin: false,

	children: (
		<>
			<Filler height={30} />
			<Filler height={60} />
			<Filler height={20} />
		</>
	),
};
