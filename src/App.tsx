import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router/Router.tsx';
import {Layout} from './components/Layout/Layout.tsx';

const App: React.FC = () => (
	<div className='App'>
		<BrowserRouter>
			<div className='body'>
				<Layout>
					<Router />
				</Layout>
			</div>
		</BrowserRouter>
	</div>
);

export default App;
