import cx from 'classnames';
import React from 'react';
import s from './IosToggle.styl';

const IosToggle = ({ text, className, onChange, checked }) => {
	return (
		<label className={cx(s.label, className)}>
			<input type="checkbox" hidden="hidden" onChange={onChange} checked={checked} />
			<span className={s.toggle}></span>
			<span className={s.text}>{text}</span>
		</label>
	);
};

export default IosToggle;
