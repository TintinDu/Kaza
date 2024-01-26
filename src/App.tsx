import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Footer} from './components/Footer/Footer.tsx';
import Router from './Router/Router.tsx';

const App: React.FC = () => (
	<div className='App'>
		<BrowserRouter>
			<div className='body'>
				<Router />
				<Footer />
			</div>
		</BrowserRouter>
	</div>
);

export default App;
