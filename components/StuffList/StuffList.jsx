import { Row, Col } from 'components/UI/Grid';
import FilterLyst from 'components/UI/FilterList';
import Card from 'components/StuffList/components/card/Card';
import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { openStuffCardModal as openStuffCardModalAction } from 'store/modal/actions';

import s from './StuffList.styl';

//Компонент список карточек работников с фильтрами. Возможно его можно/стоит переделать в UI компонент 

const StuffList = ({children, filters, stuff, isFixed = false}) => {

	const dispatch = useDispatch();

	const [activeFilter, setActiveFilter] = useState(filters[0].type);

	const filtredStuff = useMemo(() => {
		if(activeFilter === 'all'){
			return stuff
		} else {
			return stuff.filter(item => item.filterCategory === activeFilter)
		}
	}, [activeFilter])

	const renderCards = (arr) => {
		return arr.map((item, i) => {
			return(
				<Card stuff={item} ModalHandler={() => dispatch(openStuffCardModalAction()) } localRoute='sergey_kolesnyk' key={item.name} />
			)
		})
	}

	const cardsElements = renderCards(filtredStuff);

	return(
		<div className={s.wrap} id="stuffList">
			<Row pdAll>
				<FilterLyst filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} isFixed={isFixed}/>
				<div className={s.list}>
					{cardsElements}
				</div>
				<Col size={12} className={s.bottom}>
					{children}
				</Col>
			</Row>
		</div>
	)
};

export default StuffList;