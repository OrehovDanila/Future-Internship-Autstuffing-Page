import cx from 'classnames';
import React from 'react';
import s from './Burger.styl';

const Burger = ({ className, onClick, forClose }) => {
	return <div className={cx(s.burger, forClose && s.close, className)} onClick={onClick} />;
};

export default Burger;
