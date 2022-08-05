import cx from 'classnames';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { change } from 'redux-form';
import { openFormArea } from 'store/respondForm/actions'; // eslint-disable-line
import { withTranslation } from '../../../i18n';
import IconDrop from '../../../public/static/icons/drop.svg';
import s from './Input.styl';

//Альтернативный список select с дополнительным значением в option. Большая часть компонента старая.

const Select = ({ form_name, label, options = [], className, headerClassName, input }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(options[0]);

	const dispatch = useDispatch();

	const toggleList = () => {
		setIsOpen(!isOpen);
	};

	const selectItem = el => {
		setSelectedItem(el);
		dispatch(openFormArea());
		dispatch(change(form_name, input.name, el));
		toggleList();
	};

	useEffect(() => {
		dispatch(openFormArea());
		dispatch(change(form_name, input.name, options[0]));
	}, [dispatch, input, options]);

	return (
		<label className={cx(s.label, className)}>
			{label}
			<div className={cx(s.selectHeader, isOpen && s['selectHeader--opened'], headerClassName)} onClick={toggleList}>
					<span>{selectedItem.name}</span>
					<img src="/static/img/stuff/ellipse.svg" alt="" className={s.Ellipse}/> 
					<span className={s.grayText}>{selectedItem.category}</span>
				<IconDrop className={s.drop} />
			</div>
			<div className={cx(s.selectOptions, isOpen && s['selectOptions--opened'])}>
				{options.map(el => (
					<div className={s.selectOption} key={el.name} onClick={() => selectItem(el)}>
						<span>{el.name}</span>
						<img src="/static/img/stuff/ellipse.svg" alt="" className={s.Ellipse}/> 
						<span className={s.grayText}>{el.category}</span>
					</div>
				))}
			</div>
			<select
				value={selectedItem}
				onChange={e => {
					setSelectedItem(e.target.value);
					dispatch(openFormArea());
					dispatch(change(form_name, input.name, e.target.value));
				}}
			>
				{options.map(el => (
					<option key={el.name}>{el.name}</option>
				))}
			</select>
		</label>
	);
};

export default withTranslation('common')(Select);
