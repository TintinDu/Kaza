import {data} from '../../data/data.ts';
import styles from './Cards.module.css';

export const Cards = () => data.map(item => (
	<div className={styles.card} key={item.cover} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.cover})`}} >
		<h3 className={styles.cardTitle} key={item.title}>
			{item.title}
		</h3>
	</div>
));
