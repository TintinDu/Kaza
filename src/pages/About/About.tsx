import {Banner} from '../../components/Banner/Banner.tsx';
import {Container} from '../../components/Container/Container.tsx';
import {NavBar} from '../../components/NavBar/NavBar.tsx';

export const About = () => (
	<div>
		<NavBar/>
		<Banner fileName={'/IMG2.png'} isHomepage={false}/>
		<Container isHomepage={false} isAboutPage={true} housingId='c67ab8a7'/>
	</div>
);
