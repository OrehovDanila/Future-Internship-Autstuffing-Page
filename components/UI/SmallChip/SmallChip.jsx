import cx from 'classnames';
import s from './SmallChip.styl';

const SmallChip = ({ children, href, notifications = 0, active, disabled, transparent, onClick }) => {
	return (
		<a
			onClick={onClick}
			href={href}
			className={cx(s.wrap, active && s.active, transparent && s.transparent, notifications && s.notifications)}
			disabled={disabled || transparent}
		>
			{children}
			{!!notifications && <div className={s.num}>{notifications}</div>}
		</a>
	);
};

export default SmallChip;
