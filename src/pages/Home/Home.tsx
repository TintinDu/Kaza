import {Banner} from '../../components/Banner/Banner.tsx';
import {Cards} from '../../components/Cards/Cards.tsx';
import {Container} from '../../components/Container/Container.tsx';
import {NavBar} from '../../components/NavBar/NavBar.tsx';

export const Home = () => (
	<div>
		<NavBar/>
		<Banner fileName={'/IMG.png'} isHomepage/>
		<Container>
			<Cards/>
		</Container>
	</div>
);
