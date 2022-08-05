/* eslint-disable class-methods-use-this */
import App from 'next/app';
import getConfig from 'next/config';
import Router from 'next/router';
import React from 'react';
import TagManager from 'react-gtm-module';
import { connect } from 'react-redux';
import { change } from 'redux-form';

import cookies from 'helpers/cookies';
import localStorage from 'helpers/LocalStorage';

import { appWithTranslation } from 'i18n';

import { withRedux } from 'lib/redux';

import { closeBanner } from 'store/meta/actions';
import { closeModal as closeModalAction, openChangePasswordModal as openChangePasswordModalAction } from 'store/modal/actions';
import { setToken as setTokenAction } from 'store/user/actions';

import 'styles/global.styl';

if (process.env.NODE_ENV !== 'production') {
	const whyDidYouRender = require('@welldone-software/why-did-you-render');
	whyDidYouRender(React);
}

class MyApp extends App {
	static async getInitialProps({ Component, ctx, reduxStore }) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
		const { query, req } = ctx;

		if (req?.cookies?.bannerClose) {
			await reduxStore.dispatch(closeBanner());
		}

		const { recover, checkwd, login } = query;
		if (recover === 'true' && checkwd) {
			await reduxStore.dispatch(change('recover', 'login', login));
			await reduxStore.dispatch(change('recover', 'checkword', checkwd));
			await reduxStore.dispatch(openChangePasswordModalAction());
		}

		return { pageProps };
	}

	componentDidMount() {
		const { setToken, closeModal } = this.props;
		const { publicRuntimeConfig } = getConfig();

		TagManager.initialize(publicRuntimeConfig.gtm);

		const token = localStorage.get('token');
		if (token) {
			cookies.setCookie('user_tk_site', token);
			setToken(token);
		}

		Router.events.on('routeChangeStart', closeModal);
	}

	componentWillUnmount() {
		const { closeModal } = this.props;

		Router.events.off('routeChangeStart', closeModal);
	}

	render() {
		const { Component, pageProps } = this.props;

		return <Component {...pageProps} />;
	}
}

const withActions = connect(null, { setToken: setTokenAction, closeModal: closeModalAction });

export default withRedux(withActions(appWithTranslation(MyApp)));
