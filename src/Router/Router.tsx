import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {About} from '../pages/About/About.tsx';
import {NotFound} from '../pages/NotFound/NotFound.tsx';
import {Home} from '../pages/Home/Home.tsx';
import {Housing} from '../pages/Housing/Housing.tsx';
import * as routes from './Router.constants.ts';

const Router: React.FC = () => (
	<Routes>
		<Route path={routes.root} element={<Home />} />
		<Route path={routes.about} element={<About />} />
		<Route path={routes.housing} element={<Housing />}/>
		<Route path={routes.anything} element={<NotFound />} />
		<Route path={routes.notFound} element={<NotFound />} />
	</Routes>
);

export default Router;
