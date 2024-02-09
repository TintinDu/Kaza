import {Banner} from '../../components/Banner/Banner.tsx';
import {Cards} from '../../components/Cards/Cards.tsx';
import {Container} from '../../components/Container/Container.tsx';

export const Home = () => (
	<div>
		<Banner fileName={'/IMG.png'} isHomepage/>
		<Container isntHomePage={false}>
			<Cards/>
		</Container>
	</div>
);
