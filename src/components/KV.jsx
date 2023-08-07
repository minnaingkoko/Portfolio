import React, { useRef } from 'react';

import Button from './Button';

import ProfileImage from '../assets/image-profile-mobile.jpg';
import ProfileTabletImage from '../assets/image-profile-tablet.jpg';
import ProfileDesktopImage from '../assets/image-profile-desktop.jpg';
import CircleImage from '../assets/pattern-circle.svg';
import RingsImage from '../assets/pattern-rings.svg';

import styles from '../styles/KV.module.scss';

const KV = ({ scrollRef, onScroll }) => {
	return (
		<section className={`${styles.kv} ${styles.container}`}>
			<img className={styles.rings} src={RingsImage} alt="rings" />
			<div className={styles.image}>
				<picture>
					<source srcSet={ProfileDesktopImage} media="(min-width: 62em)" />
					<source srcSet={ProfileTabletImage} media="(min-width: 48em)" />
					<img
						className={styles['profile-image']}
						src={ProfileImage}
						alt="Profile Image"
					/>
				</picture>
				<img className={styles.circle} src={CircleImage} alt="circle" />
			</div>
			<div className={styles.text}>
				<h2>
					<span className={styles.nice}>Nice to</span> meet you! I’m{' '}
					<span className={styles.name}>Min Naing Ko Ko</span>.
				</h2>
				<p>
					Based in the Myanmar, I’m a front-end developer passionate about building
					accessible web apps that users love.
				</p>
			</div>
			<Button scrollRef={scrollRef} onScroll={onScroll} />
		</section>
	);
};

export default KV;
