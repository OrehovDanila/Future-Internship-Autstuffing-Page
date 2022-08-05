import cx from 'classnames';
import React from 'react';
import { Link } from '../../../i18n';
import s from './Logo.styl';

const Logo = ({ className, scrolled, noHeaderFixed }) => {
	return (
		<Link href="/">
			<a className={cx(s.wrap, className)}>
				<img src="/static/logo.png" alt="fugr.ru" className={s.img} />
				{scrolled && !noHeaderFixed && <span className={s.text}></span>}
				{/* <span className={s.tooltip}>Future</span> */}
			</a>
		</Link>
	);
};

export default Logo;
