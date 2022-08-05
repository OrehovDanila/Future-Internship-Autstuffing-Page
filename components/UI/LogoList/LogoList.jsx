import { join } from 'path';
import cx from 'classnames';
import React, { useState } from 'react';

import s from './LogoList.styl';

const LogoList = ({ className, list = [] }) => {
	const [hovered, setHovered] = useState();

	return (
		<div className={cx(s.wrap, className)}>
			{list.map(({ file }, index) => {
				const src = join('/static/icons/logos/', index !== hovered ? 'grey/' : '', file);

				const hover = () => setHovered(index);
				const unhover = () => setHovered(undefined);

				return (
					<div key={[file, index].join('-')} className={s.logo}>
						<img
							draggable="false"
							className={s.logo__img}
							onTouchStart={hover}
							onTouchEnd={unhover}
							onMouseEnter={hover}
							onMouseLeave={unhover}
							src={src}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default LogoList;
