import {NavLink} from 'react-router-dom';
import styles from './NotFound.module.css';
import {home} from '../../constants/routes.constants.ts';
import {notFound, notFoundLink, notFoundMessage} from '../../lang/fr/notFound.ts';

export const NotFound = () => (
	<div>
		<h2 className={styles.notFoundHeader}>{notFound}</h2>
		<h3 className={styles.miniHeader}>{notFoundMessage}</h3>

		<NavLink to={home}className={styles.notFoundLink}>{notFoundLink}</NavLink>
	</div>
);
