import {NavLink} from 'react-router-dom';
import styles from './NavBar.module.css';
import {about, home} from '../../constants/navLink.constants';
import {Logo} from './Logo/Logo';

export const NavBar = () => (
	<nav className={styles.navbar}>
		<Logo/>
		<div className={styles.navLink}>
			<NavLink to={home} className={({isActive}) => String(isActive ? 'currentPage' : 'notCurrentPage') + ' ' + styles.navElement} >Accueil</NavLink>
			<NavLink to={about} className={({isActive}) => String(isActive ? 'currentPage' : 'notCurrentPage') + ' ' + styles.navElement} >A&nbsp;Propos</NavLink>
		</div>
	</nav>
);
