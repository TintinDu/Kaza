import {NavLink} from 'react-router-dom';
import {NavBar} from '../../components/NavBar/NavBar.tsx';
import styles from './NotFound.module.css';
import {home} from '../../constants/routes.constants.ts';

export const NotFound = () => (
	<div>
		<NavBar/>
		<h2 className={styles.notFoundHeader}>404</h2>
		<h3 className={styles.miniHeader}>Oups! La page que vous demandez n'existe pas.</h3>

		<NavLink to={home}className={styles.notFoundLink}>Retourner sur la page d'accueil</NavLink>
	</div>
);
