import {Banner} from '../../components/Banner/Banner.tsx';
import {Collapse} from '../../components/Collapse/Collapse.tsx';
import {Container} from '../../components/Container/Container.tsx';
import styles from '../../components/Container/Container.module.css';
import {NavBar} from '../../components/NavBar/NavBar.tsx';
import {reliabilityContent, reliabilityTitle, respectContent, respectTitle, securityContent, securityTitle, serviceContent, serviceTitle} from '../../lang/fr/aboutPage.ts';

export const About = () => (
	<div>
		<NavBar/>
		<Banner fileName={'/IMG2.png'} isHomepage={false}/>
		<Container isAboutPage>
			<div className={styles.container} style={{backgroundColor: 'inherit'}}>
				<Collapse content={[reliabilityContent]} title={reliabilityTitle}/>
				<Collapse content={[respectContent]} title={respectTitle}/>
				<Collapse content={[serviceContent]} title={serviceTitle}/>
				<Collapse content={[securityContent]} title={securityTitle}/>
			</div>
		</Container>
	</div>
);
