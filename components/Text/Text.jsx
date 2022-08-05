import React from 'react';
// import { Row, Col } from '../UI/Grid';
// import s from './Text.styl';

const Text = ({ children, ...props }) => {
	return (
		<div>
			<span {...props}>{children}</span>
		</div>
	);
};

export default Text;
