import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initialize as initializeAction, setScreen } from '../lib/store/meta/actions';
import { media as mediaSelector } from '../lib/store/meta/selectors';
import debounce from './debounce';

const useSetAppMeta = () => {
	const currentMedia = useSelector(state => mediaSelector(state));
	const dispatch = useDispatch();

	useEffect(() => {
		function handleResize() {
			dispatch(setScreen(document.documentElement.clientWidth));
		}

		const debounced = debounce(handleResize, 250);

		window.addEventListener('resize', debounced);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
			dispatch(initializeAction(false));
		};
	}, [currentMedia, dispatch]);
};

export default useSetAppMeta;
