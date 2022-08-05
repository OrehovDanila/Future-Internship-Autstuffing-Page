import cx from 'classnames';
import React from 'react';
import { Link } from '../../../i18n';
import s from './Button.styl';
import CircleSmall from './CircleSmall';

// Loading only in button type, disabled when loading true
const Button = ({ gray, lightGray, type = 'button', children, className, disabled, onClick, to, loading = false }) => {
	const isLink = typeof to === 'string' && to.includes('/');
	const classes = cx(s.btn, isLink && s.link, gray && s.gray, className, lightGray && s.lightGray, loading && s.loading);

	if (isLink) {
		return (
			<Link href={to}>
				<a disabled={disabled} className={classes} onClick={onClick}>
					{children}
				</a>
			</Link>
		);
	}

	return (
		<button type={type} disabled={disabled || loading} className={classes} onClick={onClick}>
			{loading ? (
				<>
					<CircleSmall gray />
					<span className={s.hidden}>{children}</span>
				</>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
