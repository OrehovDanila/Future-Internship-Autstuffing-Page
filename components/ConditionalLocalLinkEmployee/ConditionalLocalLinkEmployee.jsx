/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import r from 'helpers/routes';
import { Link } from 'i18n';

//Временный компонент дубль, чтобы вести на страничку с конкретным работником

const ConditionalLocalLinkE = ({ children, localRoute, href, ...props }) => {
	return (
		<>
			{localRoute ? (
				<Link href={r.outstaffing[localRoute]} onClick={() => alert('Da')}>
					<a {...props}>{children}</a>
				</Link>
			) : (
				<a href={!localRoute && href} target="_blank" {...props}>
					{children}
				</a>
			)}
		</>
	);
};

export default ConditionalLocalLinkE;
