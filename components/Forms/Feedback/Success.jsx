import { Row, Col } from 'components/UI/Grid';
import Title from 'components/UI/Title';

import { useTranslation } from 'i18n';

// eslint-disable-next-line import-order-alphabetical/order
import s from './Feedback.styl';

const Success = ({ withoutTitle }) => {
	const { t } = useTranslation('common');

	return (
		<Col size={12} sizeSmd={12} sizeSm={12}>
			{!withoutTitle && (
				<Title variant="h3" h1like className={s.title}>
					<span dangerouslySetInnerHTML={{ __html: t('form.feedback.done.title') }} />
				</Title>
			)}
			<p className="text">{t('form.feedback.done.sub')}</p>
			<img src="/static/emojis/ok.png" alt="" className={s.ok} />
		</Col>
	);
};

export default Success;
