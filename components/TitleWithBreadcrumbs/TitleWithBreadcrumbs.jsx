import cx from 'classnames';
import { useDispatch } from 'react-redux';
import Fade from 'react-reveal/Fade';

import BreadCrumbs from 'components/UI/BreadCrumbs';
import Button from 'components/UI/Button';
import { Row, Col } from 'components/UI/Grid';
import Title from 'components/UI/Title';

import scrollToForm from 'helpers/scrollToForm';

import { withTranslation } from 'i18n';

import { openFeedbackModal as openFeedbackModalAction } from 'store/modal/actions';

import gradients from 'styles/gradients.styl';
// eslint-disable-next-line import-order-alphabetical/order
import s from './TitleWithBreadcrumbs.styl';

const TitleWithBreadcrumbs = ({
	variant = 'h1',
	title,
	t,
	id = 'main-section',
	pdAll,
	inner,
	children,
	primaryButton = {},
	secondaryButton = {},
	textClassName,
	hideCrumbs,
	className,
	category,
	scrollToFeedback,
	innerClass,
	textSize,
	gradient,
	noLowercase,
}) => {
	const dispatch = useDispatch();

	const defaultPrimaryAction = scrollToFeedback ? () => scrollToForm() : () => dispatch(openFeedbackModalAction());

	return (
		<section
			id={id}
			className={cx(s.wrap, inner && s.inner, category && s.major, s[innerClass], className, 'titleWithBreadCrumbs')}
		>
			<Row pdAll={pdAll}>
				<Col size={10}>
					<BreadCrumbs className={cx(hideCrumbs && 'hide-moretablet')} />
					<Title variant={variant} className={cx(s.title, noLowercase && s.noLowercase)} beforeText>
						{title}
					</Title>
				</Col>
				{children && (
					<Col size={textSize || 12} sizeMd={10} sizeSm={12} className={cx(s.bottom, textClassName)}>
						{children}
						{(primaryButton || secondaryButton) && (
							<div className={s.btnWrap}>
								{primaryButton && (
									<Button onClick={defaultPrimaryAction} className={s.btn} {...primaryButton}>
										{primaryButton.text || t('actions.discuss')}
									</Button>
								)}
								{secondaryButton && (
									<Button gray className={s.btn} {...secondaryButton}>
										{secondaryButton.text || t('actions.presentation')}
									</Button>
								)}
							</div>
						)}
					</Col>
				)}
			</Row>
			<Fade wait={200} duration={2500} ssrReveal right>
				{gradient && <div className={cx(s.gradientWrap, gradients[gradient])} />}
			</Fade>
		</section>
	);
};

export default withTranslation('common')(TitleWithBreadcrumbs);
