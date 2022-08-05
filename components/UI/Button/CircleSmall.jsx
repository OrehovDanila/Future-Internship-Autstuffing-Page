import cx from 'classnames';
import s from './CircleSmall.styl';

const CircleSmall = ({ gray }) => (
	<div className={cx(s.ring, gray && s['ring--gray'])}>
		<div />
		<div />
		<div />
		<div />
	</div>
);

export default CircleSmall;
