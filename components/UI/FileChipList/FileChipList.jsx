import cx from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formValueSelector, change } from 'redux-form';

// eslint-disable-next-line import-order-alphabetical/order
import handleLargeName from 'helpers/handleLargeName';

// eslint-disable-next-line import-order-alphabetical/order
import Close from 'static/icons/close_small.svg';

// eslint-disable-next-line import-order-alphabetical/order
import s from './FileChipList.styl';

const form_name = 'feedback';

const selector = formValueSelector(form_name);

const FileChipList = ({ remove, className, maxSize }) => {
	const list = [...(useSelector(state => selector(state, 'files')) || [])];

	const dispatch = useDispatch();

	if (list.length > 0) {
		return (
			<div className={cx(s.wrap, className)}>
				{list.map(el => {
					const removeFromList = ({ name, size }) => list.filter(file => file.name !== name && file.size !== size);
					const newList = removeFromList(el);

					const del = () => dispatch(change(form_name, 'files', newList));

					const handledName = handleLargeName(el.name);

					return (
						<div className={cx(s.chip, el.size >= maxSize && s.err)} key={el.name}>
							<span className={s.name}>{handledName}</span>
							<Close className={s.close} onClick={del} />
						</div>
					);
				})}
			</div>
		);
	}

	return null;
};

export default FileChipList;
