import cx from 'classnames';
import s from './Loading.styl';

const Circle = ({ gray }) => (
	<div className={cx(s.ring, gray && s['ring--gray'])}>
		<div />
		<div />
		<div />
		<div />
	</div>
);

export default Circle;
