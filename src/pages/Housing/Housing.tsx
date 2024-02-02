import {useParams, useNavigate} from 'react-router-dom';
import {data} from '../../data/data';
import {useEffect} from 'react';
import {Container} from '../../components/Container/Container';
import {NavBar} from '../../components/NavBar/NavBar';
import styles from './Housing.module.css';
import {Collapse} from '../../components/Collapse/Collapse';
import {Slideshow} from '../../components/Slideshow/Slideshow';
import {StarRating} from '../../components/StarRating/StarRating';

export const Housing = () => {
	const {housingId} = useParams();
	const housingData = data.find(({id}) => id === housingId);
	const navigate = useNavigate();

	if (housingData) {
		return (

			<div>
				<NavBar/>
				<Container isntHomePage>
					<Slideshow cover={housingData.cover} pictures={housingData.pictures}/>
					<div className={styles.housingContainer}>
						<div className={styles.housingContent}>
							<h2 className={styles.housingTitle}>{housingData.title}</h2>
							<h3 className={styles.housingLocation}>{housingData.location}</h3>
							<div className={styles.tagsContainer}>
								{housingData.tags.map(tag => <p key={tag} className={styles.tag}>{tag}</p>)}
							</div>
						</div>
						<div className={styles.userContainer}>
							<div className={styles.userInformations}>
								<h4 className={styles.userName}>{housingData.host.name}</h4>
								<img src={housingData.host.picture} alt='host picture' className={styles.userPicture} />
							</div>
							<div className={styles.userRate}>
								<div className={styles.userRate}>
									<StarRating rating={housingData.rating} />
								</div>

							</div>

						</div>
					</div>
					<div className={styles.collapseContainer}>
						<Collapse title='Description'content={[housingData.description]}/>
						<Collapse title='Équipements' content={housingData.equipments}/>
					</div>
				</Container>
			</div>
		);
	}

	useEffect(() => {
		if (!housingData) {
			navigate('/notFound');
		}
	}, []);
};
