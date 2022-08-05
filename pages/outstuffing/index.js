import TitleWithBreadcrumbs from 'components/TitleWithBreadcrumbs';
import UnderlinedListRenderer from 'components/UI/UnderlinedListRenderer';
import Feedback from 'components/Forms/Feedback';
import SectionWithBubbledList from 'components/UI/SectionWithBubbledList';
import Button from 'components/UI/Button';
import Title from 'components/UI/Title';
import SectionWithLogos from 'components/UI/SectionWithLogos';
import { Row, Col } from 'components/UI/Grid';
import StuffList from '../../components/StuffList';

import Page from 'components/UI/Page';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { openRequestModal as openRequestAction } from 'store/modal/actions';
    
import r from 'helpers/routes';
import s from 'styles/pages/outstuffing.styl'
    
import { withTranslation, Trans } from 'i18n';

const partnersLogos = [
	{ file: 'logo_hse.svg' },
	{ file: 'logo_mts_investments.svg' },
	{ file: 'logo_sistema_capital.svg' },
	{ file: 'logo_greenworks.svg' },
	{ file: 'logo_qiwi.svg' },
	{ file: 'logo_atb.svg' }
];

//Тестовый список фильтров. Итоговый список будет браться из файлов локализации. 
//Объект внутри нужен что бы фильтровать правильно вне зависимости от выбранного языка.
const filters = [
	{
		name: 'Все',
		type: 'all'
	},
	{
		name: 'Backend',
		type: 'backend'
	},
	{
		name: 'Frontend',
		type: 'frontend'
	},
	{
		name: 'DevOps',
		type: 'devops'
	},
	{
		name: 'Mobile',
		type: 'mobile'
	},
	{
		name: 'Дизайн',
		type: 'disign'
	},
	{
		name: 'Исследованиe',
		type: 'research'
	}
]

//Тестовый список сотрудников. Итоговый будет подтягиваться из бэка
const stuff = [
	{name: 'Имя Фамилия 1',
	level: 'Middle',
	filterCategory: 'frontend',
	category: 'Frontend/Mobile',
	price: '3 000',
	thumbnail: '/static/img/stuff/noPhoto.svg',
	skills: [
		'React',
		'React Native',
		'HTML',
		'JavaScript'
	]},
	{name: 'Имя Фамилия 2',
	level: 'Middle',
	filterCategory: 'frontend',
	category: 'Frontend/Mobile',
	price: '3 000',
	thumbnail: '/static/img/stuff/noPhoto.svg',
	skills: [
		'React',
		'React Native',
		'HTML',
		'JavaScript'
	]},
	{name: 'Имя Фамилия 3',
	level: 'Middle',
	filterCategory: 'frontend',
	category: 'Frontend/Mobile',
	price: '3 000',
	thumbnail: '/static/img/stuff/noPhoto.svg',
	skills: [
		'React',
		'React Native',
		'HTML',
		'JavaScript'
	]},
	{name: 'Имя Фамилия 4',
	level: 'Middle',
	filterCategory: 'frontend',
	category: 'Frontend/Mobile',
	price: '3 000',
	thumbnail: '/static/img/stuff/noPhoto.svg',
	skills: [
		'React',
		'React Native',
		'HTML',
		'JavaScript'
	]},
	{name: 'Имя Фамилия 5',
	level: 'Middle',
	filterCategory: 'backend',
	category: 'Backend',
	price: '3 000',
	thumbnail: '/static/img/stuff/noPhoto.svg',
	skills: [
		'PHP',
		'Laravel',
		'1C-Bitrix',
		'Node.js',
		'PostgreSQL',
		'MySQL'
	]},
	{name: 'Имя Фамилия 6',
	level: 'Middle',
	filterCategory: 'backend',
	category: 'Backend',
	price: '3 000',
	thumbnail: '/static/img/stuff/noPhoto.svg',
	skills: [
		'PHP',
		'Laravel',
		'1C-Bitrix',
		'Node.js',
		'PostgreSQL',
		'MySQL'
	]},
	{name: 'Имя Фамилия 7',
	level: 'Middle',
	filterCategory: 'backend',
	category: 'Backend',
	price: '3 000',
	thumbnail: '/static/img/stuff/noPhoto.svg',
	skills: [
		'PHP',
		'Laravel',
		'1C-Bitrix',
		'Node.js',
		'PostgreSQL',
		'MySQL'
	]},
	{name: 'Имя Фамилия 8',
	level: 'Junior',
	filterCategory: 'backend',
	category: 'Backend',
	price: '2 000',
	thumbnail: '/static/img/stuff/noPhoto.svg',
	skills: [
		'PHP',
		'Laravel',
		'1C-Bitrix',
		'Node.js',
		'PostgreSQL',
		'MySQL'
	]}
];

//Страница Аутстаффа. Присутствуют как старые так и новые компоненты

const OutstuffingPage = ({ t }) => {

	const dispatch = useDispatch();
	const OpenModal = () => dispatch(openRequestAction());
	const links = [r.services.support.technical, r.services.support.team, r.services.support.design];
	const [fixedFilters, setFixedFilters] = useState(false);

	//Оброботчик что бы цеплять список фильтров вместо хэддера

	useEffect(() => {
		const handleWindowScroll = () =>{
			const offset = document.querySelector("#stuffList").getBoundingClientRect().top;
			const height = document.querySelector("#stuffList").clientHeight;
			if(offset < 0 && offset > -(height-300)){
				setFixedFilters(true);
			} else {
				setFixedFilters(false)
			}
		}

		window.addEventListener('scroll', handleWindowScroll, { passive: false });

		return () => {
			window.removeEventListener('scroll', handleWindowScroll, {
				passive: false,
			});
		};
	}, []);
	
	return (
		<Page t={t}  category noHeaderFixed={fixedFilters}>

			<TitleWithBreadcrumbs 
				title={t('intro.title')}
				pdAll 
				primaryButton={{ text: "Оставить заявку", onClick: OpenModal }} 
				hideCrumbs>
				<p className="home-margin">{t('intro.sub')}</p>
				<p className="home-margin">{t('intro.work-for')}</p>
			</TitleWithBreadcrumbs>


			<UnderlinedListRenderer list={t('features', { returnObjects: true })} wrapper />


			<StuffList filters={filters} stuff={stuff} isFixed={fixedFilters}>
				<hr className={s.hr} />
				<Title variant="h2">
					<Trans t={t} i18nKey="contact.text">
						<span className="blue" />
					</Trans>
				</Title>
			</StuffList>


			<SectionWithBubbledList title={t('process.title')} list={t('process.list', { returnObjects: true })} bubbles="support">
				<p className="text text-pre">
					<Trans t={t} i18nKey="process.bottom">
						<span style={{ color: 'black' }} />
					</Trans>
				</p>
				<Button >
					{t('common:actions.presentation')}
				</Button>
			</SectionWithBubbledList>


			<SectionWithLogos title={t('partners.title')} logos={partnersLogos}>
				<Row pdAll>
					<Col>
						<p className="text text-pre">
							<Trans t={t} i18nKey="partners.text">
								<span style={{ color: 'black' }} />
							</Trans>
						</p>
					</Col>
				</Row>
			</SectionWithLogos>


			<Feedback />


		</Page>
	);
};

const namespacesRequired = ['page_outstuffing', 'common', 'nav'];

OutstuffingPage.getInitialProps = async () => ({ namespacesRequired });

export default withTranslation(namespacesRequired)(OutstuffingPage);
