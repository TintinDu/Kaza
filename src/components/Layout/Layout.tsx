import {Footer} from '../Footer/Footer';
import {NavBar} from '../NavBar/NavBar';

type Props = {
	children: JSX.Element | JSX.Element[];
};

export const Layout = (props: Props) =>
	<>
		<NavBar />
		{props.children}
		<Footer />
	</>;
