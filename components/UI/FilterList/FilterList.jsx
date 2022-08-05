import s from './FilterList.styl';
import Filter from './filter/filter';
import { Col } from 'components/UI/Grid';

import cx from 'classnames';
import { useEffect, useRef } from 'react';

//UI-компонент, список фильтров. Может цепляться за верх страницы

const FilterLyst = ({filters, activeFilter, setActiveFilter, isFixed}) => {

	const filtersRef = useRef();
	const titleRef = useRef();

	useEffect(() => {
		if(isFixed){
			filtersRef.current.classList.add(s.fixed);
			titleRef.current.classList.add(s.string__title_fixed);
		} else {
			filtersRef.current.classList.remove(s.fixed);
			titleRef.current.classList.remove(s.string__title_fixed);
		}
	},[isFixed])

	const renderFilters = (arr) => {
		return arr.map(item => {

			return(
				<Filter active={item.type === activeFilter? true : false} key={item.type} onClick={() => setActiveFilter(item.type)}>
					{item.name}
				</Filter>
			)
		})
	}

	const filtersElement = renderFilters(filters);

	return(
		<Col className={s.wrap}>
			<div className={s.string__title} ref={titleRef}>
				
			</div>
			<div className={s.string} ref={filtersRef}>
					{filtersElement}
			</div>
		</Col>
	)

}

export default FilterLyst;