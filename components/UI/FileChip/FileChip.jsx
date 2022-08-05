import React from 'react';
import Close from 'static/icons/close_small.svg';
// eslint-disable-next-line import-order-alphabetical/order
import s from './FileChip.styl';

const FileChip = ({ name, remove }) => {
	return (
		<div className={s.wrap}>
			<span className={s.name}>{name}</span>
			<Close className={s.close} onClick={remove} />
		</div>
	);
};

export default FileChip;
