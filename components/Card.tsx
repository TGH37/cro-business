import Image from 'next/image';
import React, { ReactNode } from 'react';
import styles from '../styles/css/services.module.css';

interface Props {
  title: string
  alt: string
  image: StaticImageData
  description: ReactNode
  isDisplayed?: boolean
};

function Card(props: Props) {
  const { title, description, image, isDisplayed=true, alt } = props;
  if(!isDisplayed) return <></>;
  
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Image src={image} layout="fill" objectFit="fill" className={styles.cardImage} alt={alt}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.cardTitle}>{title}</h1>
        {description}
      </div>
    </div>
  );
};

export default Card;
