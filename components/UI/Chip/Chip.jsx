import cx from 'classnames';
import React from 'react';
import s from './Chip.styl';

const Chip = ({ name, href, icon: Icon, target = '_blank' }) => {
	return (
		<a
			href={href}
			target={target}
			className={cx(typeof Icon === 'string' && s.textIcon, name.length <= 2 && s.isShort, s.wrap)}
		>
			<span className={s.text}>{name}</span>
			<div className={s.icon}>{typeof Icon === 'string' ? Icon : <Icon />}</div>
		</a>
	);
};

export default Chip;
