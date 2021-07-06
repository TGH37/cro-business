import React, { useContext } from 'react';
import Image from 'next/image'
import HeroImage from '../public/images/hero-image.jpg'
import styles from '../styles/css/hero.module.css'
import { GlobalContext } from '../contexts/GlobalContext';
import Link from 'next/link';

interface Props {};

function Hero(props: Props) {
  const {} = props;

  const { companyName } = useContext(GlobalContext);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroImageContainer}>
        <Image src={HeroImage} layout="fill" objectFit="fill" className={styles.heroImage} alt="Hero section background image (faded) - showing website wireframe"/>
      </div>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.headline}>You're On the Verge<br/>Of Something Great!</h1>
        <h3 className={styles.subTitle}>At {companyName}, we provide data-driven solutions to optimise the conversion rate of your site</h3>
        <div className={styles.btnContainer}>
          {/* <button><Link href="#services"><a>Learn More</a></Link></button> */}
          <Link href="#services"><a><button className={styles.buttonSecondary} tabIndex={-1}>Learn More</button></a></Link>
          <Link href="#contact"><a><button className={styles.buttonPrimary} tabIndex={-1}>Get Started</button></a></Link>
          {/* <button className={styles.buttonPrimary}><Link href="#contact"><a>Get Started</a></Link></button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
