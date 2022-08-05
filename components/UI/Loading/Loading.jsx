import cx from 'classnames';
import React from 'react';
import { Row, Col } from '../Grid';
import Circle from './Circle';
import s from './Loading.styl';

const Loading = ({ loading = true, centered = false, children, inForm, inModal, wrapper = true, gray }) => {
	if (!loading) {
		return children;
	}

	if (inForm) {
		return (
			<Row pdAll={!inModal} wrapper={wrapper}>
				<Col>
					<div className={!inModal && s.loader}>
						<Circle centered={centered} gray={gray} />
					</div>
				</Col>
			</Row>
		);
	}

	return (
		<div className={cx(centered && s.centered)}>
			<Circle gray={gray} />
		</div>
	);
};

export default Loading;
