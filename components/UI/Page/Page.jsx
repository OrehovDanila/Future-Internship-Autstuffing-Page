/* eslint-disable react/jsx-no-target-blank */
import cx from 'classnames';
import Head from 'next/head';
import { useState } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Modal from 'components/Modal';



import GrandNav from 'components/UI/GrandNav';
import Sidemenu from 'components/UI/Sidemenu';

import setAppMeta from 'helpers/setAppMeta';

// eslint-disable-next-line import-order-alphabetical/order
import s from './Page.styl';

const Page = ({
	t,
	title,
	ogTitle = title,
	description,
	ogDescription = description,
	keywords,
	url = 'www.fugr.ru',
	children,
	component,
	className,
	bottomLinks = [],
	pdAll,
	inner,
	category,
	style,
	noFooterMargin,
	grandNavClassName,
	ogImage,
	noHeaderMenu,
	noHeaderFixed,
}) => {
	const [sideOpen, toggleSideMenu] = useState(false);

	const toggleMenu = () => {
		toggleSideMenu(prev => !prev);
	};

	setAppMeta();

	return (
		<>
			<Head>
				<title>{title || t(['head.title', 'common:head.title'])}</title>
				<meta name="keywords" content={keywords || t(['head.keywords', 'common:head.keywords'])} />
				<meta name="description" content={description || t(['head.description', 'common:head.description'])} />
				<meta name="format-detection" content="telephone=no" />

				<meta
					property="og:title"
					content={ogTitle || t(['head.ogTitle', 'head.title', 'common:head.ogTitle', 'common:title'])}
				/>
				<meta
					property="og:description"
					content={
						ogDescription ||
						t(['head.ogDescription', 'head.description', 'common:head.ogDescription', 'common:head.description'])
					}
				/>
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />

				<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

				<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />

				<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

				<link rel="manifest" href="/manifest.json" />

				<link rel="stylesheet" href="/static/swiper.min.css" />
				{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" /> */}

				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<Header
				toggleMenu={toggleMenu}
				sideOpen={sideOpen}
				inner={inner}
				category={category}
				noHeaderMenu={noHeaderMenu}
				noHeaderFixed={noHeaderFixed}
			/>
			<main className={cx(s.wrap, pdAll && s.pdAll, className)} id="pagewrap" style={style}>
				{component ? React.createElement(component, [], children) : children}
			</main>
			{bottomLinks.length > 0 && <GrandNav links={bottomLinks} className={cx(s.bottom, grandNavClassName)} />}
			<Sidemenu isOpen={sideOpen} toggleMenu={toggleMenu} />
			<Footer noGutter={noFooterMargin} />
			<Modal />
		</>
	);
};

// Page.whyDidYouRender = true;

export default Page;
