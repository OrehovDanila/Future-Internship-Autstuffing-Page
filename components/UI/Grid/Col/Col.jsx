import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './Col.styl';

/**
 * Колонка сетки
 */
const Col = ({
	size,
	sizeL,
	sizeMd,
	sizeSm,
	sizeSmd,
	offsetSize,
	stretchHeight,
	children,
	className,
	variant = 'div',
	fullMobile,
	pdAll,
	withoutPadding,
}) => {
	const classes = cx(
		styles.col,
		styles[`col-${size}`],
		sizeL && styles[`col-l-${sizeL}`],
		sizeMd && styles[`col-md-${sizeMd}`],
		sizeSm && styles[`col-sm-${sizeSm}`],
		sizeSmd && styles[`col-smd-${sizeSmd}`],
		offsetSize && styles[`col-offset-${offsetSize}`],
		stretchHeight && styles.colFlex,
		fullMobile && styles.fullMobile,
		pdAll && styles.pdAll,
		withoutPadding && styles.withoutPadding,
		className
	);

	return React.createElement(variant, { className: classes }, children);
};

Col.defaultProps = {
	size: 12,
	sizeL: null,
	sizeMd: null,
	sizeSm: null,
	offsetSize: null,
	stretchHeight: false,
	fullMobile: false,
};

Col.propTypes = {
	/** Ширина колонки */
	size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	/** Ширина колонки в версии $desc (1200px) */
	sizeL: PropTypes.number,
	/** Ширина колонки в планшетной версии */
	sizeMd: PropTypes.number,
	/** Ширина колонки в мобильной версии */
	sizeSm: PropTypes.number,
	/** Отступ слева в ширинах колонок */
	offsetSize: PropTypes.number,
	/** Добавляет display: flex для растягивания контента на всю высоту */
	stretchHeight: PropTypes.bool,
	fullMobile: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default Col;
