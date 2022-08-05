import getConfig from 'next/config';
import React from 'react';
import Pulse from 'react-reveal/Pulse';
import s from './MailAndTelBlock.styl';

const {
	publicRuntimeConfig: { social },
} = getConfig();

const MailAndTelBlock = () => {
	return (
		<>
			<a className={s.phone} href={``}>
				Тут был телефон
			</a>
			<br />
			<a className={s.mail} href={``}>
				Тут была почта
			</a>
		</>
	);
};

export default MailAndTelBlock;
