/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
import cx from 'classnames';
import getConfig from 'next/config';
import Pulse from 'react-reveal/Pulse';

import Chip from 'components/UI/Chip';
import { Row, Col } from 'components/UI/Grid';
import IosToggle from 'components/UI/IosToggle';
import MailAndTelBlock from 'components/UI/MailAndTelBlock';


import { withTranslation, Link } from 'i18n';


// eslint-disable-next-line import-order-alphabetical/order
import s from './Footer.styl';

const {
	publicRuntimeConfig: { social },
} = getConfig();

const chips = [
	{ i: 'ВК', txt: 'ВКонтакте', href: 'outstuffing' },
	{ i: 'TG', txt: 'Telegram', href: 'outstuffing' },
	{ i: 'F', txt: 'F', href: 'outstuffing' },
	{ i: 'I', txt: 'I', href: 'outstuffing' },
];

const currentYear = new Date().getFullYear();

const Footer = ({ t, i18n, noGutter }) => {

	const checked = i18n.language === 'en';

	return (
		<footer className={cx(s.wrap, noGutter && s.noGutter)}>
			<Row className={s.row} pdAll>
				<Col size={12} variant="address">
					<span className={s.name}>{t('common:info.name', { name: 'Future' })}</span>
					<span className={s.text}>{t('common:info.address')}</span>
				</Col>
				<Col variant="ul" className={cx(s.chips, 'pd-all')}>
					{chips.map(chip => (
						<Pulse key={chip.txt}>
							<li className={s.chip}>
								<Chip icon={chip.i} name={chip.txt} href={chip.href} />
							</li>
						</Pulse>
					))}
				</Col>
				<Col className={cx(s.contacts, 'pd-all')}>
					<MailAndTelBlock />
				</Col>
				<Col className={cx(s.copyright, 'pd-all')}>
					<span>© 2010-{currentYear} &nbsp;</span>
					<span>
						{t('common:info.privacy')}{' '}
						<Link href={'outstuffing'}>
							<a className={s.privacy}>Privacy</a>
						</Link>
					</span>
					<IosToggle text="English" className={s.langToggle}  checked={checked} />
				</Col>
			</Row>
		</footer>
	);
};

Footer.getInitialProps = async () => ({
	namespacesRequired: ['common'],
});

export default withTranslation(['common'])(Footer);
