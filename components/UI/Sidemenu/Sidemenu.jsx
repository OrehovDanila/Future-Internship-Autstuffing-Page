import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import Burger from 'components/UI/Burger';
import { Row, Col } from 'components/UI/Grid';
import IosToggle from 'components/UI/IosToggle';
import MailAndTelBlock from 'components/UI/MailAndTelBlock';

import r, { routeInfo } from 'helpers/routes';
import translationFromRoute from 'helpers/translationFromRoute';
import useMobileMedia from 'helpers/useMobileMedia';

import { withTranslation, Link } from 'i18n';

// eslint-disable-next-line import-order-alphabetical/order
import s from './Sidemenu.styl';

const Sidemenu = ({ isOpen, toggleMenu, t, i18n }) => {
	const [scrolledBurger, setBurgerScroll] = useState(false);
	const iosToggleText = 'English';
	const checked = i18n.language === 'en';
	const onLangToggleChange = () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

	// чтобы менюшка не скакала при первом рендере страницы
	useEffect(() => {
		document.getElementById('aside-nav').removeAttribute('style');
	}, []);

	const { isMobile } = useMobileMedia();

	useEffect(() => {
		const aside = document.getElementById('aside-nav');

		const onKeyPress = e => {
			if (e.keyCode === 27) {
				toggleMenu();
			}
		};

		if (aside) {
			if (isOpen) {
				disableBodyScroll(aside);
				window.addEventListener('keyup', onKeyPress);
				document.querySelector('html').style.overflow = 'hidden';
			} else {
				enableBodyScroll(aside);
				window.removeEventListener('keyup', onKeyPress);
				document.querySelector('html').removeAttribute('style');
			}
		}

		if (window.pageYOffset >= 160 && !isMobile) {
			setBurgerScroll(true);
		} else {
			setBurgerScroll(false);
		}

		return () => {
			window.removeEventListener('keyup', onKeyPress);
			document.querySelector('html').removeAttribute('style');
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const links = [r.home, r.company.index, r.services.index, r.portfolio.index, r.contact.index];

	const getTKeys = translationFromRoute(['side', 'grand', 'full', 'bread']);

	return (
		<aside className={cx(s.wrap, isOpen && s.open)} id="aside-nav" style={{ transition: 'none' }}>
			<Row className={s.inner} pdAll>
				<Col className={s.col}>
					<Burger forClose onClick={toggleMenu} className={cx(s.burger, scrolledBurger && s.scrolled)} />
					<nav className={s.nav}>
						<ul className={s.ul}>
							{links.map(link => {
								const { href, disabled } = routeInfo(link);
								const text = t(getTKeys(href));

								return (
									<li key={href} className={s.li} onClick={toggleMenu}>
										{disabled ? (
											<span className={cx(s.link, s['link--disabled'])}>{text}</span>
										) : (
											<Link href={href}>
												<a className={s.link}>{text}</a>
											</Link>
										)}
									</li>
								);
							})}
							<li className={s.li} onClick={toggleMenu}>
								<a href="/personal/support/" className={s.link}>
									{t('personal.$.full')}
								</a>
							</li>
						</ul>
					</nav>
					<div className={s.footer}>
						<div>
							<MailAndTelBlock />
						</div>
						<IosToggle
							text={iosToggleText}
							className={s.langToggle}
							onChange={onLangToggleChange}
							checked={checked}
						/>
					</div>
				</Col>
			</Row>
		</aside>
	);
};

export default withTranslation('nav')(Sidemenu);
