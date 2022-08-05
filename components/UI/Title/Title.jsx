import cx from 'classnames';
import React from 'react';
import { Row, Col } from '../Grid';
import s from './Title.styl';

const Title = ({ children, variant = 'h2', className, h1like, beforeText, beforeBubbles, hyphens, firstLetterUpper }) => {
	const classes = cx(
		s.title,
		firstLetterUpper && s.firstLetterUpper,
		h1like ? s.h1 : s[variant],
		beforeText && s.before_text,
		beforeBubbles && s.before_bubbles,
		hyphens && s.hyphens,
		className
	);

	return React.createElement(variant, { className: classes }, children);
};

export default Title;
