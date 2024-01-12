import styles from './Banner.module.css';
import {useLocation} from 'react-router-dom';

export const Banner = () => {
	const location = useLocation();
	return (
		<div className={styles.banner} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${location.pathname === '/' ? '/IMG.png' : '/IMG2.png'})`}}>
			{location.pathname === '/'
		&& (<h1>Chez vous, partout et ailleurs</h1>)
			}
		</div>
	);
};
