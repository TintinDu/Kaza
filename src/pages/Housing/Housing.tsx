import {useParams, useNavigate} from 'react-router-dom';
import {data} from '../../data/data';
import {useEffect} from 'react';
import {Container} from '../../components/Container/Container';
import {NavBar} from '../../components/NavBar/NavBar';
import styles from './Housing.module.css';
import {Collapse} from '../../components/Collapse/Collapse';

export const Housing = () => {
	const {housingId} = useParams();
	const housingData = data.find(({id}) => id === housingId);
	const navigate = useNavigate();

	if (housingData) {
		console.log(housingData);
		return (

			<div>
				<NavBar/>
				<Container isntHomePage>
					<img src={housingData?.cover} alt='photo appartement' className={styles.housingPicture} />
					<div className={styles.housingContainer}>
						<div className={styles.housingContent}>
							<h2 className={styles.housingTitle}>{housingData?.title}</h2>
							<h3 className={styles.housingLocation}>{housingData?.location}</h3>
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
									{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
									{[...Array(5)].map((_, index) => (
										<svg key={index} width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path d='M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z' fill={index < housingData.rating ? '#FF6060' : '#E3E3E3'} />
										</svg>
									))}
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
