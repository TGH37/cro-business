import Image from 'next/image';
import React, { ReactHTMLElement, ReactNode } from 'react';
import styles from '../styles/css/services.module.css';

interface Props {
  title: string
  image: StaticImageData
  description: ReactNode
};

function Card(props: Props) {
  const { title, description, image } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Image src={image} layout="fill" objectFit="fill" className={styles.cardImage}/>
      </div>
      <div>
        <h1 className={styles.cardTitle}>{title}</h1>
        {description}

      </div>
    </div>
  );
};

export default Card;
