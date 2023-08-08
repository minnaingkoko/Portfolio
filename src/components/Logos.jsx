import React from 'react';

import { ReactComponent as GithubIcon } from '../assets/icon-github.svg';
import { ReactComponent as FemIcon } from '../assets/icon-frontend-mentor.svg';
import { ReactComponent as LinkedinIcon } from '../assets/icon-linkedin.svg';
import { ReactComponent as TwitterIcon } from '../assets/icon-twitter.svg';

import styles from '../styles/Logos.module.scss';

const Logos = () => {
	return (
		<div className={styles.logos}>
			<h1>MinNaingKoKo</h1>
			<div className={styles.icons}>
				<GithubIcon href="https://github.com/minnaingkoko" className={styles['icons-github']} alt="github icon" />

				<FemIcon href="https://www.frontendmentor.io/profile/minnaingkoko" className={styles['icons-fem']} alt="frontend-mentor icon" />
				<LinkedinIcon href="https://www.linkedin.com/in/minnaingkoko/"
					className={styles['icons-linkedin']}
					alt="linkedin icon"
				/>
				<TwitterIcon href="https://twitter.com/Min_Naing_Ko_Ko" className={styles['icons-twitter']} alt="twitter icon" />
			</div>
		</div>
	);
};

export default Logos;
