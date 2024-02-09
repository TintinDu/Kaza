import {Banner} from '../../components/Banner/Banner.tsx';
import {Cards} from '../../components/Cards/Cards.tsx';
import {Container} from '../../components/Container/Container.tsx';
import commonStyle from './../../assets/common.module.css';

export const Home = () => (
	<div className={commonStyle.wrapper}>
		<Banner fileName={'/IMG.png'} isHomepage/>
		<Container isntHomePage={false}>
			<Cards/>
		</Container>
	</div>
);
