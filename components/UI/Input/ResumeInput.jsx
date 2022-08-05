import cx from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formValueSelector, change } from 'redux-form';

import { withTranslation } from 'i18n';

import { openFormArea } from 'store/respondForm/actions';

// eslint-disable-next-line import-order-alphabetical/order
import s from './Input.styl';

const form_name = 'respond';

const selector = formValueSelector(form_name);

const ResumeInput = ({ t, input, className }) => {
	const { value, onChange, ...rest } = input;

	const dispatch = useDispatch();

	const fileList = [...(useSelector(state => selector(state, 'files')) || [])];

	const handleOnChange = e => {
		dispatch(openFormArea());
		dispatch(change(form_name, 'files', [...fileList, ...e.target.files]));
	};

	return (
		<label className={cx(s.fileLabel, className)}>
			{t('form.actions.attach_summary', { count: fileList.length + 1 })}
			<input onChange={handleOnChange} {...rest} multiple type="file" style={{ display: 'none' }} />
		</label>
	);
};

export default withTranslation('common')(ResumeInput);
