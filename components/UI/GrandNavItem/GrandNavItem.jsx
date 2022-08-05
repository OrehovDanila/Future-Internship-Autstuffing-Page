import React from 'react';

import { Row, Col } from 'components/UI/Grid';

import { Link } from 'i18n';

// eslint-disable-next-line import-order-alphabetical/order
import s from './GrandNavItem.styl';

const GrandNavItem = ({ href, disabled, text }) => {
	if (disabled) {
		return (
			<a disabled className={s.link}>
				<Row pdAll>
					<Col className={s.inner}>
						{text}
						<div className={s.arrow} />
					</Col>
				</Row>
			</a>
		);
	}

	return (
		<Link href={href}>
			<a className={s.link}>
				<Row pdAll>
					<Col className={s.inner}>
						{text}
						<div className={s.arrow} />
					</Col>
				</Row>
			</a>
		</Link>
	);
};

export default GrandNavItem;
