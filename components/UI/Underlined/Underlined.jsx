import cx from 'classnames';
import React from 'react';
import capitalizeFirstLetter from '../../../helpers/capitalizeFirstLetter';
import s from './Underlined.styl';

const Underlined = ({ children, variant = 'div', noGutter, className, centered, gray, red }) => {
	const classes = cx(s.text, noGutter && s.noGutter, centered && s.center, red && s.red, gray && s.gray, className);

	const capitalized = typeof children === 'string' ? capitalizeFirstLetter(children) : children;

	return React.createElement(variant, { className: classes }, capitalized);
};

export default Underlined;
