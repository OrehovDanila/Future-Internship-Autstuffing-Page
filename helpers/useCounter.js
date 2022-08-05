import { useSelector, useDispatch } from 'react-redux';
import { increment as incrementAction, tick, toggle } from '../lib/store/indexPageCounter/actions';
import { getPlayStatus, getTrigger, getCount } from '../lib/store/indexPageCounter/selectors';

const useCounter = () => {
	const isRunning = useSelector(state => getPlayStatus(state));
	const trigger = useSelector(state => getTrigger(state));
	const count = useSelector(state => getCount(state));

	const dispatch = useDispatch();
	const increment = () => dispatch(incrementAction());
	const toggleTrigger = () => dispatch(tick());
	const toggleCounter = bool => dispatch(toggle(bool));

	return { count, increment, isRunning, trigger, toggleTrigger, toggleCounter };
};

export default useCounter;
