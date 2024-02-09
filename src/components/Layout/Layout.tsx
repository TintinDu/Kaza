import {Footer} from '../Footer/Footer';
import {NavBar} from '../NavBar/NavBar';

type Props = {
	children: JSX.Element | JSX.Element[];
};

export const Layout = (props: Props) =>
	<>
		<div style={{minHeight: '80vh'}}>
			<NavBar />
			{props.children}
		</div>
		<Footer />
	</>;
