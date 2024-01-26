import {Cards} from '../Cards/Cards.tsx';
import {Collapse} from '../Collapse/Collapse.tsx';
import styles from './Container.module.css';
import {data} from '../../data/data.ts';

type Props = {
	isHomepage?: boolean;
	isAboutPage?: boolean;
	housingId?: string;
};

export const Container = (props: Props) => {
	const {isHomepage, isAboutPage, housingId} = props;

	if (isHomepage) {
		return (
			<div className={styles.container}>
				<Cards/>
			</div>
		);
	}

	if (isAboutPage) {
		return (
			<div className={styles.container} style={{backgroundColor: 'inherit'}}>
				<Collapse content={['Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.']} title={'Fiabilité'}/>
				<Collapse content={['La bienveillance fait partie des valeurs fondatrices de Kase. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']} title={'Respect'}/>
				<Collapse content={['La La bienveillance fait partie des valeurs fondatrices de Kase. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']} title={'Service'}/>
				<Collapse content={['La sécurité est la priorité de Kase. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurités établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.']} title={'Sécurité'}/>
			</div>
		);
	}

	const housingData = data.find(({id}) => housingId === id);
	const equipements = housingData?.equipments.map(equipment =>
		equipment,
	);
	if (housingData && equipements) {
		return (
			<div className={styles.container}>
				<Collapse content={equipements} title={housingData.title}/>
			</div>
		);
	}
};
