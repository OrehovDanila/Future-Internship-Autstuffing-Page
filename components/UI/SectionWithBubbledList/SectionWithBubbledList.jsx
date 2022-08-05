import React from 'react';
import BubbledList from '../BubbledList';
import { Row, Col } from '../Grid';
import Title from '../Title';
import s from './SectionWithBubbledList.styl';

const SectionWithBubbledList = ({ title, list, wrapper = true, children, bubbles }) => {
	return (
		<Row wrapper={wrapper} pdAll className={s.wrap}>
			<Col>
				<Title h1like variant="h2" beforeBubbles>
					{title}
				</Title>
				<BubbledList list={list} bubbles={bubbles} />
				{children && <div className={s.divider} />}
			</Col>
			<Col size={8} sizeMd={12}>
				<div className={s.bottom}>{children}</div>
			</Col>
		</Row>
	);
};

export default SectionWithBubbledList;
