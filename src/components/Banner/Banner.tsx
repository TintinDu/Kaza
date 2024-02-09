import styles from './Banner.module.css';

type Props = {
	fileName: string;
	isHomepage: boolean;
};

export const Banner = (props: Props) => {
	const {fileName, isHomepage} = props;

	const darkerBanner = () => {
		if (isHomepage) {
			return {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),  url(${fileName})`};
		}

		return {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(${fileName})`};
	};

	return (
		<div className={styles.banner} style={darkerBanner()}>
			{isHomepage
		&& (<h1>Chez vous, partout et ailleurs</h1>)
			}
		</div>
	);
};
