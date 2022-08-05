import React from 'react';
import Slide from 'react-reveal/Slide';

import GrandNavItem from 'components/UI/GrandNavItem';

import { routeInfo } from 'helpers/routes';
import translationFromRoute from 'helpers/translationFromRoute';

import { withTranslation } from 'i18n';

// eslint-disable-next-line import-order-alphabetical/order
import s from './GrandNav.styl';

const GrandNav = ({ t, links, className }) => {
	const getTKeys = translationFromRoute(['grand', 'full', 'bread']);

	return (
		<nav className={className}>
			<ul>
				{links.map(link => {
					const { href, disabled } = routeInfo(link);
					const text = t(getTKeys(href));

					return (
						<Slide left key={href} ssrFadeout>
							<li className={s.li}>
								<GrandNavItem disabled={disabled} href={href} text={text} />
							</li>
						</Slide>
					);
				})}
			</ul>
		</nav>
	);
};

export default withTranslation('nav')(GrandNav);
