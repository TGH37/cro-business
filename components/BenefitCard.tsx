import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import React, { ReactElement, ReactHTMLElement, ReactNode } from 'react';
import styles from '../styles/css/customerBenefits.module.css';

interface Props {
  title: string
  icon: ReactElement
  description: ReactNode
};

function BenefitCard(props: Props) {
  const { title, description, icon } = props;

  return (
    <div className={styles.benefitCard}>
      <div className={styles.cardIconContainer}>
        {icon}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.cardTitle}>{title}</h1>
        {description}
      </div>
    </div>
  );
};

export default BenefitCard;