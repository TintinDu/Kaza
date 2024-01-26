import {Banner} from '../../components/Banner/Banner.tsx';
import {Container} from '../../components/Container/Container.tsx';
import {NavBar} from '../../components/NavBar/NavBar.tsx';

export const Home = () => (
	<div>
		<NavBar/>
		<Banner fileName={'/IMG.png'} isHomepage/>
		<Container isHomepage/>
	</div>
);
