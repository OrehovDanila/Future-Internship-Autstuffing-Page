import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import { Row, Col } from 'components/UI/Grid';
import Page from 'components/UI/Page';

import r from 'helpers/routes';
import useCounter from 'helpers/useCounter';
import useInterval from 'helpers/useInterval';
import useMobileMedia from 'helpers/useMobileMedia';

import { withTranslation } from 'i18n';

import { openFeedbackModal as openFeedbackModalAction } from 'store/modal/actions';

import s from 'styles/pages/index.styl';

const HomePage = ({ t, i18n: { language } }) => {
	const { isMobile } = useMobileMedia();

	const tags = {
		create: [r.services.create.index, r.services.create.fintech, r.services.create.cabinets],
		design: [r.services.design.index, r.services.design.ux, r.services.design.control],
		support: [r.services.support.index, r.services.support.technical, r.services.support.sla],
		marketing: [r.services.marketing.index, r.services.marketing.adstrategy, r.services.marketing.seo],
		research: [r.services.research.index, r.services.research.cjm, r.services.research.audit],
	};


	const links = [r.services.index, r.portfolio.index, r.company.index, r.contact.index];

	const { increment, isRunning, toggleTrigger, toggleCounter } = useCounter();

	useInterval(
		() => {
			toggleTrigger();
		},
		isRunning ? 2000 : null
	);

	useInterval(
		() => {
			increment();
		},
		isRunning ? 4000 : null
	);

	const dispatch = useDispatch();

	const openModal = () => dispatch(openFeedbackModalAction());

	useEffect(() => {
		const stopCounter = () => toggleCounter(false);
		const startCounter = () => toggleCounter(true);

		const gruppa = document.querySelector(`.${s.competencies}`);

		if (!isMobile && gruppa) {
			gruppa.addEventListener('mouseenter', stopCounter);
			gruppa.addEventListener('mouseleave', startCounter);
		}

		return () => {
			if (gruppa) {
				gruppa.removeEventListener('mouseenter', stopCounter);
				gruppa.removeEventListener('mouseleave', startCounter);
			}
		};
	}, [isMobile, toggleCounter]);

	return (
		<Page t={t} bottomLinks={links} grandNavClassName={s.grandNav}>
			<div className={s.gradientWrap}>
				<Row className={s.intro} variant="section" pdAll>
					<Col size={11} sizeMd={12}>
						<a href="outstuffing">Перейти на свёрстанную страницу</a>
					</Col>
				</Row>
			</div>
		</Page>
	);
};

const namespacesRequired = ['page_home', 'common', 'nav'];

HomePage.getInitialProps = async () => ({ namespacesRequired });

export default withTranslation(namespacesRequired)(HomePage);
