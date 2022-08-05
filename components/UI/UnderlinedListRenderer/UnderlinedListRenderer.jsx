import cx from 'classnames';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from '../Grid';
import Underlined from '../Underlined';
import s from './UnderlinedListRenderer.styl';

const renderList = (list, listIcons, withFade, size, sizeMd, sizeSm) =>
	list.map((el, index) => {
		return (
			<Col size={size} sizeMd={sizeMd} sizeSm={sizeSm} key={el} variant="li" className={s.li}>
				{withFade ? (
					<Fade right ssrFadeout>
						{listIcons ? <img style={{ marginBottom: '15px' }} src={listIcons[index]} /> : <></>}
						<Underlined noGutter>{el}</Underlined>
					</Fade>
				) : (
					<>
						{listIcons && <img style={{ marginBottom: '15px' }} src={listIcons[index]} />}
						<Underlined noGutter>{el}</Underlined>
					</>
				)}
			</Col>
		);
	});

const UnderlinedListRenderer = ({
	id,
	list,
	listIcons,
	className,
	pdAll = true,
	pure,
	wrapper,
	withFade = false,
	size = 4,
	sizeMd = 6,
	sizeSm = 12,
}) => {
	if (pure) {
		return renderList(list);
	}

	return (
		<Row id={id} className={cx(s.list, className)} variant="ul" pdAll={pdAll} wrapper={wrapper}>
			{renderList(list, listIcons, withFade, size, sizeMd, sizeSm)}
		</Row>
	);
};

export default UnderlinedListRenderer;
