import React, { useContext } from 'react';
import Image from 'next/image'
import HeroImage from '../public/images/hero-image.jpg'
import styles from '../styles/css/hero.module.css'
import { GlobalContext } from '../contexts/GlobalContext';

interface Props {};

function Hero(props: Props) {
  const {} = props;

  const { companyName } = useContext(GlobalContext);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroImageContainer}>
        <Image src={HeroImage} layout="fill" objectFit="fill" className={styles.heroImage}/>
      </div>
      <div className={styles.heroTextContainer}>
        <h1>See The True Potential Of Your Site</h1>
        <h3>At {companyName}, we provide data-driven solutions to optimise the conversion rate of your site</h3>
        <div className={styles.btnContainer}>
          <button>Learn More</button>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
