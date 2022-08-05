import cx from 'classnames';
import { useEffect, useRef } from 'react';
import debounce from '../../../helpers/debounce';
import s from './BubbledList.styl';

const BubbledList = ({ list, bubbles }) => {
	const listRef = useRef(null);
	const wrapRef = useRef(null);

	useEffect(() => {
		const listCurrent = listRef.current;
		const wrapCurrent = wrapRef.current;

		const handleMouseMove = e => {
			if (e.buttons === 1) {
				listCurrent.scrollLeft -= e.movementX;
				listCurrent.style.cursor = 'grabbing';
			} else {
				listCurrent.style.cursor = 'grab';
			}
		};

		function handleResize() {
			if (listCurrent.clientWidth < listCurrent.scrollWidth) {
				listCurrent.classList.add(s.scrollable);
				wrapCurrent.classList.add(s.wrap__scrollable);
				listCurrent.addEventListener('mousemove', handleMouseMove);
			} else {
				listCurrent.classList.remove(s.scrollable);
				wrapCurrent.classList.remove(s.wrap__scrollable);
				listCurrent.removeEventListener('mousemove', handleMouseMove);
			}
		}

		handleResize();

		const debounced = debounce(handleResize, 250);
		window.addEventListener('resize', debounced);

		return () => {
			window.removeEventListener('resize', debounced);
			listCurrent.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div className={cx(s.outer, s[bubbles])}>
			<div className={s.wrap} ref={wrapRef}>
				<ul className={cx(s.ul)} ref={listRef}>
					{list.map(el => (
						<li className={s.li} key={el}>
							{el}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BubbledList;
