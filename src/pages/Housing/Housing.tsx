import {useParams, useNavigate} from 'react-router-dom';
import {data} from '../../data/data';
import {useEffect} from 'react';
import {Container} from '../../components/Container/Container';
import {NavBar} from '../../components/NavBar/NavBar';

export const Housing = () => {
	const {housingId} = useParams();
	const housingData = data.find(({id}) => id === housingId);
	const navigate = useNavigate();

	if (housingData) {
		console.log(housingData);
		return (

			<div>
				<NavBar/>
				<Container>
					<h1>{housingData?.title}</h1>
					<h2>Housing</h2>
					<img src={housingData?.cover} alt='photo appartement' />
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
