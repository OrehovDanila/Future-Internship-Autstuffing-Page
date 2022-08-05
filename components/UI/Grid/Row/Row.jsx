import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Row.styl';

/**
 * Ряд сетки. Внутрь должны помещаться Col
 */
const Row = ({
	verticalCenter,
	verticalBottom,
	center,
	marginAuto,
	children,
	className,
	wrapper,
	wrapperHalf,
	variant = 'div',
	id,
	pdAll,
	noMargin,
	mobileNoMargin,
}) => {
	const classes = cx(
		styles.row,
		verticalCenter && styles.rowVerticalCenter,
		verticalBottom && styles.rowVerticalBottom,
		center && styles.center,
		marginAuto && styles.mauto,
		wrapper && 'wrapper',
		wrapperHalf && styles.wrapperHalf,
		pdAll && styles.pdAll,
		noMargin && styles.noMargin,
		mobileNoMargin && styles.mobileNoMargin,
		className
	);

	return React.createElement(variant, { className: classes, id }, children);
};

Row.defaultProps = {
	className: null,
	verticalCenter: false,
	center: false,
	wrapper: false,
};

Row.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	/** Выравнивание по центру по вертикали */
	verticalCenter: PropTypes.bool,
	center: PropTypes.bool,
	wrapper: PropTypes.bool,
};

export default Row;
