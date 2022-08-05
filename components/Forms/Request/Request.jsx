import cx from 'classnames';

import { Row, Col } from 'components/UI/Grid';
import FileInput from 'components/UI/Input/FileInput';
import Input from 'components/UI/Input/Input';
import SelectWithProps from 'components/UI/Input/SelectWithProp';
import Textarea from 'components/UI/Input/Textarea';
import Suggestion from 'components/UI/Suggestion';
import Button from 'components/UI/Button';


import { useTranslation, Link, Trans } from 'i18n';
import s from './Request.styl'

import r, { routeInfo } from 'helpers/routes';

// import { Form, Field, reduxForm, destroy, SubmissionError } from 'redux-form'; Импорты на будущее


const PrivacyLink = ({ children }) => {

	const { href } = routeInfo(r.privacy.index);

	return (
		<Link href={href}>
			<a className={cx('link', s.privacy)}>{children}</a>
		</Link>
	);
};

//Будут получаться из бэка
const options = [
	{name: 'Lorem Ipsum', category: 'DevOps'}, {name: 'Lorem Ipsum', category: 'Frontend/Mobile'}, {name: 'Lorem Ipsum', category: 'Backend'}
]

//Вёрстка новой формы

const Request = () => {
	const { t } = useTranslation('common');

	return(
		<Row>
			<Col>
				{/* div Заглушка под форму редакса */}
				<div>
					<Row>
						<Col size={8} className={s.top}>
							<SelectWithProps options={options} input={{name: 'a'}} label={'Сотрудник'} className={s.select}>
							</SelectWithProps>
						</Col>
						<Col size={12} className={s.line}>
							<Input label={'Имя*'} />
							<Input label={'Телефон*'} />
							<Input label={'Email*'} />
						</Col>
						<Col size={8} className={s.bottom}>
							<Textarea label={'Сообщение'} placeholder={'Опишите проект или задачу...'} className={s.bottom__textarea} />
						</Col>
						<Col size={4}>
							<div className={s.bottom__suggestion}>
								{/* Для верной вёрстки нужно подключение i18n */}
								<Suggestion >
									{"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
								</Suggestion>
							</div>
						</Col>
						<Col size={4} sizeL={6} className={s.buttons}>
							<Button type="submit" className={s.btn_send} disabled={false}>
								Отправить
							</Button>
							<FileInput
								defaultValue={[]}
								multiple
								input={{value: 'a', onChange: 'b'}}
							/>
						</Col>
					</Row>
					<p className={s.disclaimer}>
						<Trans t={t} i18nKey="privacy.accept">
							<br />
							<PrivacyLink />
						</Trans>
					</p>
				</div>
			</Col>
		</Row>
	)
}

export default Request;