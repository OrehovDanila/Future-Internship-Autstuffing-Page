import cx from 'classnames';
import { useRouter } from 'next/router';

import capitalizeFirstLetter from 'helpers/capitalizeFirstLetter';

import { withTranslation, Link } from 'i18n';

// eslint-disable-next-line import-order-alphabetical/order
import s from './BreadCrumbs.styl';

const BreadCrumbs = ({ t, className }) => {
	const router = useRouter();
	const breadPath = router.pathname.split('/').slice(0, -1);

	return (
		<ul className={cx(s.list, className)}>
			{breadPath.map((el, index) => {
				const href = index ? breadPath.slice(0, index + 1).join('/') : '/';
				const tKeys = ['bread', 'full', 'grand'].map(tail =>
					breadPath
						.slice(1, index + 1)
						.concat(['$', tail])
						.join('.')
				);

				const text = capitalizeFirstLetter(t(tKeys));

				return (
					<li className={s.item} key={href}>
						<Link href={href}>
							<a className={s.link}>{text}</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

// BreadCrumbs.whyDidYouRender = true

export default withTranslation('nav')(BreadCrumbs);
