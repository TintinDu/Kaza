import styles from './Tags.module.css';

export const Tags = ({tag}: {tag: string}) => <p key={tag} className={styles.tag}>{tag}</p>;
