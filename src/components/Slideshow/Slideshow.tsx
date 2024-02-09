import {useState} from 'react';
import styles from './Slideshow.module.css';

type Props = {
	cover: string;
	pictures: string[];
};

export const Slideshow = (props: Props) => {
	// Ajouter numérotation !!
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide(slide => (slide === props.pictures.length - 1 ? 0 : slide + 1));
	};

	const previousSlide = () => {
		setCurrentSlide(slide => (slide === 0 ? props.pictures.length - 1 : slide - 1));
	};

	const handleSlidePicture = () => currentSlide === 0 ? props.cover : props.pictures[currentSlide];

	const isOnlyOnePicture = props.pictures.length > 1;

	return (
		<>
			<div className={styles.slideshowContainer} style={{backgroundImage: `url(${handleSlidePicture()})`}}>
				{ isOnlyOnePicture
			&& <div className={styles.arrowsContainer}>
				<svg width='96' height='120' viewBox='0 0 96 120' fill='none' xmlns='http://www.w3.org/2000/svg' className={styles.arrow} onClick={previousSlide}>
					<g clipPath='url(#clip0_267543_96)'>
						<path d='M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z' fill='white'/>
					</g>
					<defs>
						<clipPath id='clip0_267543_96'>
							<rect width='96' height='119.64' fill='white' transform='translate(0 0.303223)'/>
						</clipPath>
					</defs>
				</svg>

				<svg width='96' height='121' viewBox='0 0 96 121' fill='none' xmlns='http://www.w3.org/2000/svg' className={styles.arrow} onClick={nextSlide}>
					<g clipPath='url(#clip0_267543_100)'>
						<path d='M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z' fill='white'/>
					</g>
					<defs>
						<clipPath id='clip0_267543_100'>
							<rect width='96' height='119.64' fill='white' transform='translate(0 0.825928)'/>
						</clipPath>
					</defs>
				</svg>
			</div>
				}
			</div>
			<div className={styles.slideshowNumberContainer}><h4 className={styles.slideshowNumber}>{`${currentSlide + 1}/${props.pictures.length}`}</h4></div>
		</>
	);
};
