import Title from 'components/UI/Title';

// eslint-disable-next-line import-order-alphabetical/order
import s from './Feedback.styl';

const FormTitle = ({ title, preTitle, inModal }) => {
	if (inModal) {
		return null;
	}

	return (
		<Title variant="h3" h1like className={s.title}>
			{preTitle} <br className="hide-mobile" />
			{title}
		</Title>
	);
};

export default FormTitle;
