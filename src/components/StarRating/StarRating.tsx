import {Star} from '../Common/Star';

export const StarRating = ({rating}: {rating: string}) => {
	const maxRating = 5;
	const stars = Array.from({length: maxRating}, (_, index) => index);

	return (
		<>
			{stars.map((_, index) =>
				<Star key={index} rating={rating} index={index}/>)}
		</>
	);
};
