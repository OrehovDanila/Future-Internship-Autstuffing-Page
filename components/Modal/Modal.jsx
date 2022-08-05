import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import cx from 'classnames';
import { useEffect } from 'react';
import ReactModal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

import StuffCardFull from 'components/StuffCardFull';
import Request from 'components/Forms/Request/Request';

// eslint-disable-next-line import-order-alphabetical/order
import { Row, Col } from 'components/UI/Grid';
// eslint-disable-next-line import-order-alphabetical/order
import Title from 'components/UI/Title';

import { withTranslation } from 'i18n';

import { closeModal as closeModalAction } from 'store/modal/actions';
import kinds from 'store/modal/kinds';
import { activeModal as activeModalSelector, activeModalTitle as activeModalTitleSelector } from 'store/modal/selectors';

// eslint-disable-next-line import-order-alphabetical/order
import CloseIcon from '../../public/static/icons/close.svg';
// eslint-disable-next-line import-order-alphabetical/order
import s from './Modal.styl';

ReactModal.setAppElement('#__next');

const modalToComponent = {
	[kinds.STUFFCARD]: StuffCardFull,
	[kinds.REQUEST]: Request
};

const Modal = ({ t, className, overlayClassName }) => {
	const modalClasses = cx(s.modal, className);
	const overlayClasses = cx(s.overlay, overlayClassName);

	const dispatch = useDispatch();
	const activeModal = useSelector(s => activeModalSelector(s));
	const title = useSelector(s => activeModalTitleSelector(s));

	const onRequestClose = () => dispatch(closeModalAction());

	const ModalComponent = modalToComponent[activeModal];
	const i18nTitle = t(title || ['modal', activeModal].join('.'));

	useEffect(() => {
		if (activeModal && ModalComponent) {
			disableBodyScroll();
			document.querySelector('html').style.overflow = 'hidden';
		} else {
			enableBodyScroll();
			document.querySelector('html').removeAttribute('style');
		}

		return () => {
			clearAllBodyScrollLocks();
			document.querySelector('html').removeAttribute('style');
		};
	}, [activeModal, ModalComponent]);

	if (!activeModal || !ModalComponent) {
		return null;
	}

	return (
		<ReactModal
			isOpen={activeModal !== null}
			onRequestClose={onRequestClose}
			className={modalClasses}
			overlayClassName={overlayClasses}
			shouldCloseOnEsc
			shouldCloseOnOverlayClick
		>
			<div>
				<Row pdAll>
					<Col>
						<CloseIcon className={s.close} onClick={onRequestClose} />
						<Title className={s.title} h1like>
							{i18nTitle}
						</Title>
						<ModalComponent inModal />
					</Col>
				</Row>
			</div>
		</ReactModal>
	);
};

export default withTranslation('common')(Modal);
