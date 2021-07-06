import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo } from 'react';
import styles from '../styles/css/customerBenefits.module.css';
import BenefitCard from './BenefitCard';

interface Props {};


function CustomerBenefits(props: Props) {
  const {} = props;

  const accessorArry = useMemo(() => [
    "increase-conversions",
    "unbiased-results",
    "understanding-customers",
    "google-ranking",
    "spot-opportunities",
    "hassle-free",
  ], []);

  const contentArry = useMemo(() => [
    { accessor: "increase-conversions",    title: "Increase Conversions",             icon: <FontAwesomeIcon icon={["fas", "chart-line"]} size="3x" className={styles.cardIcon}/>,   content: <p>How do you know what works if you don't actively try and find out? Optimization of the content and user experience of your website allows you to turn prospects into customers, putting more money in your pocket at the end of the day</p>},
    { accessor: "unbiased-results",        title: "Unbiased, Quantitative Results",   icon: <FontAwesomeIcon icon={["fas", "flask"]} size="3x" className={styles.cardIcon}/>,   content: <p>Carrying out a Scientific, quantitative analysis, allows us to iteratively improve aspects of your website based solely on documented user behavour.</p>},
    { accessor: "understanding-customers", title: "Understand Your Customers Better", icon: <FontAwesomeIcon icon={["fas", "users"]} size="3x" className={styles.cardIcon}/>,   content: <p>Humans are complex, they may not behave in ways you (or even they) would expect. We believe the only true way of discerning how somebody would react to something, is to see how they react to something.</p>},
    { accessor: "google-ranking",          title: "Improved Google Ranking",          icon: <FontAwesomeIcon icon={["fab", "google"]} size="3x" className={styles.cardIcon}/>,   content: <p>What better way to get your brand out there than to please the algorithm responsible for doing so?</p>},
    { accessor: "spot-opportunities",      title: "Spot Opportunities",               icon: <FontAwesomeIcon icon={["fas", "search-dollar"]} size="3x" className={styles.cardIcon}/>,   content: <p>With our analysis, we are often able to find new opportunities for our clients to capitalize on.</p>},
    { accessor: "hassle-free",             title: "Hassle Free Optimization",         icon: <FontAwesomeIcon icon={["fas", "funnel-dollar"]} size="3x" className={styles.cardIcon}/>,   content: <p>We're here to take the load off you. Let us do what we do best and optimise your content, you can be as involved as you would like in the process</p>}, 
  ], []);
  
  return (
    <section className={styles.customerBenefitsContainer} id="customer-benefits">
      <h1 className={`${styles.sectionTitle}`}>How This Helps You</h1>
      <div className={styles.benefitCardContainer}>
        {
          accessorArry.map((accessor, idx) => {
            const contentElement = contentArry.find((contentObj) => contentObj.accessor === accessor);
            if(!contentElement) return <></>;
            const { title, icon, content } = contentElement;
            return <BenefitCard title={title} description={content} icon={icon} key={`benefitCard_${idx}`}/>;
          })
        }
      </div>
    </section>
  );
};

export default CustomerBenefits;


