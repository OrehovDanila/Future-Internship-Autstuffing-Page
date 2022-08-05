import r, { adaptRoute } from 'helpers/routes';
import { withTranslation, Trans } from 'i18n';
import cx from 'classnames';

import Modal from 'components/Modal/Modal'
import StuffCardFull from '../../components/StuffCardFull/StuffCardFull';
import { Row, Col } from 'components/UI/Grid';
import Title from 'components/UI/Title';
import CloseIcon from '../../public/static/icons/close.svg';
import Page from 'components/UI/Page';

import s from 'styles/pages/employee.styl';

//Загатовка под страницу с большой карточкой работника

const EmployeePage = ({t}) => {

	return(
		<div className={cx(s.modal, s.overlay)}>
			<div>
				<Row pdAll>
					<Col>
						<CloseIcon className={s.close}  />
						<Title className={s.title} h1like>
							александр мамаев
						</Title>
						<StuffCardFull>
						</StuffCardFull>
					</Col>
				</Row>
			</div>
			<Modal />
		</div>
	)
};

const namespacesRequired = ['page_project', 'common', 'nav'];

EmployeePage.getInitialProps = async () => ({ namespacesRequired });

export default withTranslation(namespacesRequired)(EmployeePage);