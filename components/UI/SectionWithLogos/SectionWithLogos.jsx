import cx from 'classnames';
import { Row, Col } from '../Grid';
import LogoList from '../LogoList';
import Title from '../Title';
import s from './SectionWithLogos.styl';

const SectionWithLogos = ({ title, logos = [], children }) => (
	<div className={cx(s.wrap, 'wrapper')}>
		<Row variant="section" pdAll>
			<Col size={8}>
				<Title h1like variant="h2" beforeText className="casesTitle">
					{title}
				</Title>
			</Col>
			<Col size={12}>
				<LogoList className={s.logos} list={logos} />
			</Col>
		</Row>
		{children}
	</div>
);

export default SectionWithLogos;
