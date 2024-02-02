import styles from './Container.module.css';

type Props = {
	children: JSX.Element | JSX.Element[];
	isAboutPage?: boolean;
};

export const Container = (props: Props) => {
	const {isAboutPage} = props;

	return (
		<div className={styles.container} style={isAboutPage ? {backgroundColor: 'inherit'} : {}}>
			{props.children}
		</div>
	);
};
