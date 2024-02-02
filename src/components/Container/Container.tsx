import styles from './Container.module.css';

type Props = {
	children: JSX.Element | JSX.Element[];
	isntHomePage?: boolean;
};

export const Container = (props: Props) => {
	const {isntHomePage} = props;

	return (
		<div className={styles.container} style={isntHomePage ? {backgroundColor: 'inherit'} : {}}>
			{props.children}
		</div>
	);
};
