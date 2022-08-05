import cx from 'classnames';
import React from 'react';
import InputMask from 'react-input-mask';
import { withTranslation } from '../../../i18n';
import s from './Input.styl';
import masks from './masks';

const Input = props => {
	const {
		t,
		label,
		input = {},
		meta: { active, error, touched } = {},
		type = 'text',
		placeholder,
		className,
		half,
		mask,
		onClick,
	} = props;

	const inputProps = { className: cx(s.input), type, placeholder, onClick, ...input };

	return (
		<label className={cx(s.label, half && s.half, touched && error && s.error, className)}>
			{label}
			<InputMask {...inputProps} mask={masks[mask]} maskChar="" />
			{touched && error && <span className={s.errorText}>{t(error)}</span>}
		</label>
	);
};

export default withTranslation('common')(Input);
