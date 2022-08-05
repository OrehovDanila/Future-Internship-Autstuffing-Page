import Button from 'components/UI/Button';

import ConditionalLocalLinkE from '../../../ConditionalLocalLinkEmployee/ConditionalLocalLinkEmployee';

import s from './Card.styl'

//Компонент - маленькая карточка одного работника

const Card = ({stuff, ModalHandler}) => {

	const { name, level, category, price, skills = [], thumbnail } = stuff;

	const renderSkills = (arr) => {
		return arr.map(item => {
			return(
				<div className={s.list__item} key={item}>
					{item}
				</div>
			)
		})
	}

	const skillsElement = renderSkills(skills);

	return(
		<div className={s.card}>
			<div className={s.content}>
				<div className={s.topSection}>
					<img src={thumbnail} alt={name} className={s.topSection__img}/>
					<div className={s.topSection__top}>
						{name}
					</div>
					<div className={s.topSection__grayText}>
						<span>{level}</span>
						<img src="/static/img/stuff/ellipse.svg" alt="" /> 
						<span>{category}</span>
					</div>
					<div className={s.list}>
						{skillsElement}
					</div>
				</div>
				<div className={s.bottom}>
					{price} ₽/час
				</div>
					<Button onClick={() => ModalHandler()}>
						Подробнее
					</Button>
			</div>
		</div>
	)
};

export default Card;