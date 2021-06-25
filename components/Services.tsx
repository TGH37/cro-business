import React from 'react';
import styles from '../styles/css/services.module.css';
import Card from './Card';

import AnalyseImage from '../public/images/Hero-image.jpg'

interface Props {};

function Services(props: Props) {
  const {} = props;

  const analysePTag = <p>description</p>

  return (
    <section className={styles.servicesContainer}>
      <h1>What We Do</h1>
      <p>Our basic mission is to work with you and use our experience and tools to improve the user experience of your website, giving you happier customers and ultimately more converted sales.</p>
      <div className={styles.cardContainer}>
        <Card title={"Analyse"}  description={analysePTag} image={AnalyseImage}/>
        <Card title={"Analyse"}  description={analysePTag} image={AnalyseImage}/>
        <Card title={"Analyse"}  description={analysePTag} image={AnalyseImage}/>
        <Card title={"Analyse"}  description={analysePTag} image={AnalyseImage}/>
      </div>
    </section>
  );
};

export default Services;
