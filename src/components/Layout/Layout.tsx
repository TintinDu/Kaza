import {Footer} from '../Footer/Footer';
import {NavBar} from '../NavBar/NavBar';

export const Layout = (props: any) =>
	<>
		<NavBar />
		{props.children}
		<Footer />
	</>;
