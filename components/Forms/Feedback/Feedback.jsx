/* eslint-disable react/no-multi-comp */
import axios from 'axios';
import cx from 'classnames';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field, reduxForm, destroy, SubmissionError } from 'redux-form';

import Button from 'components/UI/Button';
import { Row, Col } from 'components/UI/Grid';
import Input from 'components/UI/Input';
import FileInput from 'components/UI/Input/FileInput';
import Textarea from 'components/UI/Input/Textarea';
import Loading from 'components/UI/Loading';
import Suggestion from 'components/UI/Suggestion';

import { clearPhone } from 'helpers/normalize';
import r, { routeInfo } from 'helpers/routes';
import scrollToForm from 'helpers/scrollToForm';
import startCase from 'helpers/startCase';
import { testEmail, testName } from 'helpers/validators';

import { useTranslation, Link, Trans } from 'i18n';

import { openFormArea, onSuccessSend } from 'store/feedbackForm/actions';
import { isAreaOpen as isAreaOpenSelector, isSentSuccesfully as isSentSuccesfullySelector } from 'store/feedbackForm/selectors';
import { openSignUpModal as openSignUpModalAction } from 'store/modal/actions';

// eslint-disable-next-line import-order-alphabetical/order
import Success from './Success';
// eslint-disable-next-line import-order-alphabetical/order
import Title from './Title';

// eslint-disable-next-line import-order-alphabetical/order
import s from './Feedback.styl';

const MAX_SIZE = 10485760;
const validMimeTypes = [
	'application/pdf',
	'application/zip',
	'application/msword',
	'image/bmp',
	'image/png',
	'image/gif',
	'image/jpeg',
	'image/webp',
	'image/tiff',
	'image/svg+xml',
	'image/vnd.microsoft.icon',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const form_name = 'feedback';

const validate = ({ name, phone, email, files }) => {
	const errors = {};

	if (!name) {
		errors.name = 'form.fields.name.errors.empty';
	} else if (!testName(name)) {
		errors.name = 'form.fields.name.errors.invalid';
	}

	if (!phone) {
		errors.phone = 'form.fields.phone.errors.empty';
	} else if (clearPhone(phone).length !== 11) {
		errors.phone = 'form.fields.phone.errors.invalid';
	}

	if (email && !testEmail(email)) {
		errors.email = 'form.fields.email.errors.invalid';
	}

	if (files) {
		if (Array.from(files).some(el => validMimeTypes.indexOf(el.type) < 0)) {
			errors.files = 'form.fields.files.errors.invalid-type';
		} else if (Array.from(files).some(el => el.size >= MAX_SIZE)) {
			errors.files = 'form.fields.files.errors.exceed';
		}
	}

	return errors;
};

const PrivacyLink = ({ children }) => {
	const { href } = routeInfo(r.privacy.index);

	return (
		<Link href={href}>
			<a className={cx('link', s.privacy)}>{children}</a>
		</Link>
	);
};

const FeedbackForm = ({ wrapper = true, error, title, inModal, onLanding, handleSubmit, submitting, valid, className }) => {
	const { t } = useTranslation('common');
	const dispatch = useDispatch();

	const router = useRouter();

	useEffect(
		() => () => dispatch(destroy(form_name)),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const isAreaOpenFromRedux = useSelector(state => isAreaOpenSelector(state));
	const isAreaOpen = inModal || isAreaOpenFromRedux;
	const isSentSuccesfully = useSelector(state => isSentSuccesfullySelector(state));

	const openArea = () => dispatch(openFormArea());
	const openSignUp = () => dispatch(openSignUpModalAction());
	const onSubmit = async values => {
		scrollToForm('pageform', true);
		const formData = new FormData();
		formData.append('SIMPLE_QUESTION_712', router.asPath);
		formData.append('NAME', values.name);
		formData.append('PHONE', values.phone);
		formData.append('form_name', 'feedback');

		if (values.email) {
			formData.append('SIMPLE_QUESTION_241', values.email);
		}

		if (values.message) {
			formData.append('QUESTIONS', values.message);
		}

		if (Array.isArray(values.files)) {
			values.files.forEach(file => formData.append('SIMPLE_QUESTION_910', file));
		}

		try {
			await axios({
				method: 'POST',
				url: '/forms',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				data: formData,
			});
		} catch (e) {
			if (e instanceof SubmissionError) {
				throw error;
			}

			throw new SubmissionError({ _error: 'Произошла ошибка. Пожалуйста, повторите попытку позднее' });
		}
	};

	if (submitting) {
		return <Loading inForm inModal={inModal} />;
	}

	if (isSentSuccesfully) {
		if (!inModal) {
			return (
				<Row pdAll={!inModal} wrapper={wrapper} className={s.wrap}>
					<Success />
				</Row>
			);
		}

		if (document) {
			const titleNode = document.querySelector('.modalTitle');
			if (titleNode) {
				titleNode.innerText = t('form.feedback.done.title');
			}

			return (
				<Row pdAll={!inModal} wrapper={wrapper} className={s.injectedSub}>
					<Success withoutTitle />
				</Row>
			);
		}
	}

	const disableButton = submitting || !valid;

	return (
		<Row id="pageform" pdAll={!inModal} wrapper={wrapper} className={cx(s.wrap, className)}>
			<Col>
				{!onLanding && <Title title={title} preTitle={t('form.feedback.pretitle')} inModal={inModal} />}

				<Form onSubmit={handleSubmit(onSubmit)} className={inModal ? s.inModal : s.onPage}>
					<Row className={s.row}>
						<Col size={onLanding ? 6 : 4} sizeL={6} sizeSm={12} className={cx(!inModal && s.pseudoRow, s.col)}>
							<Field
								name="name"
								label={`${t('form.fields.name.label')}*`}
								component={Input}
								type="text"
								normalize={startCase}
							/>
						</Col>
						{!inModal && <div className={s.break} />}
						<Col size={onLanding ? 6 : 4} sizeL={6} sizeSm={12} className={s.col}>
							<Field
								name="phone"
								label={`${t('form.fields.phone.label')}*`}
								component={Input}
								type="phone"
								placeholder="+7 ..."
								mask="phone"
							/>
						</Col>
						<Col size={onLanding ? 6 : 4} sizeL={6} sizeSm={12} className={s.col}>
							<Field
								name="email"
								label={t(`form.fields.email.label`)}
								component={Input}
								type="text"
								placeholder=" "
							/>
						</Col>
					</Row>
					{isAreaOpen ? (
						<Row className={s.row}>
							<Col size={12}>
								<Field
									label={t('form.fields.message.label')}
									name="message"
									area
									component={Textarea}
									type="text"
									placeholder={t('form.fields.message.placeholder')}
									autoFocus={!inModal}
								/>
							</Col>
							{inModal && (
								<Col size={4} sizeMd={12} sizeSm={12} className={s.suggest}>
									<Suggestion>
										<Trans t={t} i18nKey="form.feedback.aside">
											<span style={{ color: '#000' }} />
											<a className="link" onClick={openSignUp} />
										</Trans>
									</Suggestion>
								</Col>
							)}
						</Row>
					) : (
						<div className={s.addMessage} onClick={openArea}>
							{t('form.actions.add-message')}
						</div>
					)}
					<Row>
						{error && (
							<Col variant="span" className={s.error} size={12}>
								{error}
							</Col>
						)}
						<Col size={onLanding ? 6 : 4} sizeL={6} sizeSm={12} className={cx(s.buttons)}>
							<Button type="submit" className={s.btn_send} disabled={disableButton}>
								{t('form.actions.send')}
							</Button>
							<Field
								name="files"
								component={FileInput}
								openArea={openArea}
								type="file"
								defaultValue={[]}
								multiple
								className={cx(!inModal && s.fileButton)}
							/>
						</Col>
					</Row>
					<p className={s.disclaimer}>
						<Trans t={t} i18nKey="privacy.accept">
							<br />
							<PrivacyLink />
						</Trans>
					</p>
				</Form>
			</Col>
		</Row>
	);
};

export default reduxForm({
	form: form_name,
	validate,
	onSubmitSuccess: (res, dispatch) => dispatch(onSuccessSend()),
})(FeedbackForm);
