/* eslint-disable eqeqeq */
import Button from 'components/UI/Button';
import { Row, Col } from 'components/UI/Grid';
import LayoutFullHeight from 'components/UI/LayoutFullHeight';
import Page from 'components/UI/Page';
import Title from 'components/UI/Title';

import { withTranslation } from 'i18n';

import s from 'styles/pages/error.styl';

const ErrorPage = ({ t, statusCode }) => {
	const errorText = statusCode === 404 ? t('not-found') : t('error-without-status');

	return (
		<LayoutFullHeight>
			<Page t={t} title={statusCode} className={s.page} pdAll>
				<Row className={s.row} id="main-section">
					<Col className={s.container}>
						<Title variant="h1">{statusCode}</Title>
						<p className={s.text}>{errorText}</p>
						<Button className={s.btn} to="/">
							{t('link')}
						</Button>
					</Col>
				</Row>
			</Page>
		</LayoutFullHeight>
	);
};

const namespacesRequired = ['page_error', 'common', 'nav'];

ErrorPage.getInitialProps = async ({ res, err }) => {
	let statusCode = null;
	if (res) {
		({ statusCode } = res);
	} else if (err) {
		({ statusCode } = err);
	}

	return {
		namespacesRequired,
		statusCode,
	};
};

export default withTranslation(namespacesRequired)(ErrorPage);
