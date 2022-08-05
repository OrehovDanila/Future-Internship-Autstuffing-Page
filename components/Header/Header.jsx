/* eslint-disable react/no-multi-comp */
import cx from 'classnames';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import r, { routeInfo } from '../../helpers/routes';
import useMobileMedia from '../../helpers/useMobileMedia';
import HeaderMenu from '../HeaderMenu';
import Burger from '../UI/Burger';
import { Row, Col } from '../UI/Grid';
import Logo from '../UI/Logo';

import s from './Header.styl';

const Header = ({ toggleMenu, inner, category, noHeaderMenu, noHeaderFixed, testHeader }) => {
	const [scrolled, setScrolled] = useState(false);

	const router = useRouter();
	const headerRef = useRef();

	const { isMobile } = useMobileMedia();

	useEffect(() => {
		const handleWindowScroll = () => {
			const offset = window.pageYOffset;

			if (offset > 30 && !isMobile) {
				setScrolled(true);
				headerRef.current.classList.add(s.fixed);
			} else {
				setScrolled(false);
				headerRef.current.classList.remove(s.fixed);
			}

			if (noHeaderFixed) {
				headerRef.current.classList.remove(s.fixed);
			}

			if (inner || category) {
				const graySection = document.querySelector('.titleWithBreadCrumbs');
				const bottomOfGraySection = graySection.getBoundingClientRect().bottom;
				const headerHeight = headerRef.current.offsetHeight;
				const isScrolled = headerHeight >= bottomOfGraySection;

				if (isScrolled && !headerRef.current.classList.contains(s.grayScrolled)) {
					headerRef.current.classList.add(s.grayScrolled);
				} else if (!isScrolled && headerRef.current.classList.contains(s.grayScrolled)) {
					headerRef.current.classList.remove(s.grayScrolled);
				}
			}
		};

		window.addEventListener('scroll', handleWindowScroll, { passive: false });

		return () => {
			window.removeEventListener('scroll', handleWindowScroll, {
				passive: false,
			});
		};
	}, [category, inner, isMobile, noHeaderFixed]);

	const onContactPage = router.pathname === routeInfo(r.contact.index).href;

	const classes = cx(
		s.wrap,
		inner && s.inner,
		category && s.category,
		onContactPage && s.transparent,
		noHeaderFixed && s.noFixedHeader,
		testHeader && s.testHeader
	);

	return (
		<header className={classes} ref={headerRef}>
			<Row pdAll>
				<Col className={s.content}>
					<Logo scrolled={scrolled} noHeaderFixed={noHeaderFixed} />
					<div className={s.right}>
						{!noHeaderMenu && <HeaderMenu showTel={scrolled} />}
						<Burger />
					</div>
				</Col>
			</Row>
		</header>
	);
};

// Header.whyDidYouRender = true;

export default Header;
