import cx from 'classnames';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import capitalizeFirstLetter from 'helpers/capitalizeFirstLetter';
import r, { routeInfo } from 'helpers/routes';
import translationFromRoute from 'helpers/translationFromRoute';

import { Link, withTranslation } from 'i18n';

import { openSignInModal as openSignInModalAction } from 'store/modal/actions';
import { isAuthenticated as isAuthenticatedSelector } from 'store/user/selectors';

// eslint-disable-next-line import-order-alphabetical/order
import PersonalIcon from '../../public/static/icons/personal.svg';

// eslint-disable-next-line import-order-alphabetical/order
import s from './HeaderMenu.styl';

const {
	publicRuntimeConfig: { NODE_ENV, social },
} = getConfig();

const HeaderMenu = ({ showTel = true, t }) => {
	const router = useRouter();
	const dispatch = useDispatch();


	const links = [r.company.index, r.services.index, r.portfolio.index, r.contact.index];




	return (
		<nav className={s.nav}>
			<a className={cx(s.phone, showTel && s.visible)} href={`tel:${social.tel.pure}`}>
				Тут был телефон
			</a>

			<ul className={cx(s.ul, showTel && s.hide)}>
				{links.map(link => {
					const { href, disabled } = routeInfo(link);

					const active = router.pathname.indexOf(href) === 0;
					const text = 'Lorem Ipsum';

					return (
						<li key={href} className={s.item}>
							<Link href={'outstuffing'}>
								<a disabled={true} className={cx(active && s.active)}>
									{text}
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
			<span  className={s.personal} data-text={t('common:actions.lk')}>
				<PersonalIcon />
			</span>
		</nav>
	);
};

export default withTranslation(['nav', 'common'])(HeaderMenu);
