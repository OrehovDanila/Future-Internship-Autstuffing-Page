import Button from 'components/UI/Button';
import { Row, Col } from 'components/UI/Grid';

import { useDispatch } from 'react-redux';
import { openRequestModal as openRequestAction } from 'store/modal/actions';

import s from './StuffCardFull.styl';

//Вёрстка компонента для отображения полных данных о работнике

const StuffCardFull = () => {

	const dispatch = useDispatch();

	return(
		<Row className={s.container}>
			<Col className={s.container__leftColumn}>
				<div className={s.imgBlock}>
					<img src="/static/img/stuff/noPhoto.svg" alt="" className={s.imgBlock__img}/>
					<div className={s.imgBlock__greyText}>
						<span>Senior</span>
						<img src="/static/img/stuff/Ellipse.svg" alt="" className={s.imgBlock__Ellipse}/> 
						<span>DevOps</span>
					</div>
					<div className={s.list}>
						<span className={s.list__item}>Docker</span>
						<span className={s.list__item}>Kubernetes</span>
						<span className={s.list__item}>Настройка CI/CD</span>
					</div>
					<span className={s.imgBlock__bottomText}>5 000 ₽/час</span>
					<Button className={s.imgBlock__btn} onClick={() => dispatch(openRequestAction())}>
						Оставить заявку
					</Button>
				</div>
				<div className={s.imgBlock__icons}>
					<img src="/static/img/stuff/share.svg" alt="share" />
					<img src="/static/img/stuff/download.svg" alt="download" />
				</div>
			</Col>
			<Col size={7} className={s.container__rightColumn}>
				<span className={s.title}>проекты</span>
				<div className={s.textWithTitle}>
					<div className={s.textWithTitle__title}>
						Lorem ipsum
					</div>
					<div className={s.textWithTitle__text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
				<div className={s.textWithTitle}>
					<div className={s.textWithTitle__title}>
						Lorem ipsum
					</div>
					<div className={s.textWithTitle__text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
				<div className={s.textWithTitle}>
					<div className={s.textWithTitle__title}>
						Lorem ipsum
					</div>
					<div className={s.textWithTitle__text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
				
			</Col>
		</Row>
	)
}

export default StuffCardFull;