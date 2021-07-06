import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from '../styles/css/services.module.css';
import Card from './Card';

import AnalyseImage from '../public/images/heatmap.png';
import CollaborateImage from '../public/images/meeting.jpg';
import ABImage from '../public/images/ab-test.png';
import ContentImage from '../public/images/content-optimisation.jpg';
import UXImage from '../public/images/ux-optimisation.jpg';
import SurveyImage from '../public/images/survey.jpg';
import Link from 'next/link';
import { useBreakpoint } from '../contexts/MediaBreakpointCxt';
import { mediaBreakpoints } from '../interfaces/index';

import { GlobalContext } from '../contexts/GlobalContext';

interface Props {};

function Services(props: Props) {
  const {} = props;

  const mediaBreakpoints: mediaBreakpoints = useBreakpoint();
  const [isShowButtonVisible] = useState(true);
  const [viewableServices, setViewableServices] = useState(3);
  const { companyName } = useContext(GlobalContext);

  const incrementViewableServices = () => {
    setViewableServices(viewableServices + 3);
  };
  const decrementViewableServices = () => {
    if(viewableServices <= 3) return;
    setViewableServices(viewableServices - 3);
  };

  const handleExpandBtnClick = () => {
    if(viewableServices <= 3)  incrementViewableServices();
    else  decrementViewableServices();
  };

  useEffect(() => {   
    setContentArry((prevState) => {
      return prevState.map((contentObj, idx) => {
        return {...contentObj, isDisplayed: idx < viewableServices};
      });
    });
  }, [viewableServices]);

  const accessorArry = useMemo(() => [
    "analyse",
    "collaborate",
    "abTest",
    "contentOptimisation",
    "uxOptimisation",
    "surveys",
  ], [] );

  const [contentArry, setContentArry] = useState( [
    { accessor: "analyse",              isDisplayed: true, title: "Analyse",               image: AnalyseImage,      altText: `An example of a heatmap analysis tool used by ${companyName}`,  content: <p>We use our experience and a comprehensive set of the latest professional tools, to analyse your website to see which aspects are performing well, and which ones are potentially holding you back.</p>},
    { accessor: "collaborate",          isDisplayed: true, title: "Collaborate",           image: CollaborateImage,  altText: `A meeting between ${companyName} CRO, experts and their clients`,  content: <p>You'll work directly with one of our talented account managers, routinely keeping you updated and answering any questions you may have, providing you with piece of mind that your website is in good hands</p>},
    { accessor: "abTest",               isDisplayed: true, title: "A/B Testing",           image: ABImage,           altText: `A grahic of A-B testing commonly carried out by ${companyName}`,  content: <p>We offer A/B testing services to iteratively converge on the most effective way to inspire interaction from your customers. A/B testing involves rerouting a percentage of your customers to a "near identical" site, one with a single aspect changed, to gauge how your customers react to the change.</p>},
    { accessor: "contentOptimisation",  isDisplayed: false, title: "Content Optimization", image: ContentImage,      altText: `A graphic of various conversion rate optimisation techniques`,  content: <p>We work to mould the content of your website into the form that is most compelling and resonant with your customers, based on our experience, coupled with the iterative analysis of the reaction of your customers</p>},
    { accessor: "uxOptimisation",       isDisplayed: false, title: "UX Optimisation",      image: UXImage,           altText: `An example of website wireframing techniques to improve and optimise User Experience (UX)`,  content: <p>Knowing how your customers think and act is a crucial way to understand how they interact with the content you are putting out there. User Experience (UX) optimization is all about making your website more intuitive and easier to interact with</p>},
    { accessor: "surveys",              isDisplayed: false, title: "Surveys",              image: SurveyImage,       altText: `A graphic showing a user feedback survey`,  content: <p>What better way to understand what your customers think than to ask them? We are able to inject none intrusive feedback forms into your website, prompting your customers to rate their experience and flag any issues they are having. If the customer is always right, it's good to have their input</p>}, 
  ]);
 
  return (
    <section className={styles.servicesContainer} id="services">
      <h1 className={`${styles.sectionTitle}`}>What We Do</h1>
      <p>We offer a wide variety of services to help you turn your website into a sale conversion machine. All the tools we use are additive, meaning there is no need to take the source code of your site apart, we just plug-in to your existing site and temporarily add/change elements of it, for our experiments</p>
      <div className={styles.cardContainer}>
        {
          accessorArry.map((accessor, idx) => {
            const contentElement = contentArry.find((contentObj) => contentObj.accessor === accessor);
            if(!contentElement) return <></>;
            const { title, image, content, isDisplayed, altText } = contentElement;
            const shouldDisplay = !mediaBreakpoints.md ? isDisplayed : true;
            return <Card title={title} description={content} image={image} key={`serviceCard_${idx}`} isDisplayed={shouldDisplay} alt={altText}/>;
          })
        }
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.showMore} style={{display: isShowButtonVisible ? "inline" : "none"}} onClick={handleExpandBtnClick}>{`Show ${viewableServices > 3 ? "Less" : "More"}`}</button>
      </div>
      <Link href="#contact"><a><button className={styles.buttonPrimary} tabIndex={-1}>Get Started</button></a></Link>
    </section>
  );
};

export default Services;
