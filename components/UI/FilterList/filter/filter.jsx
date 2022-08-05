import cx from 'classnames';

import s from './filter.styl';

//Альтернативная кнопка, субкомпонент для списка фильтров

const Filter = ({children, onClick, active = false}) => {
	return(
		<button className={cx(s.filter, active? s.filter_active : null)} onClick={onClick}>
			{children}
		</button>
	)
}

export default Filter;