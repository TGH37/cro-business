import React from 'react';
import styles from '../styles/css/process.module.css';
import ProcessStep from './ProcessStep';
import ProcessTransition from './ProcessTransition';

interface Props {};

function Process(props: Props) {
  const {} = props;

  const accessorArry = [
    "analyse",
    "theorise",
    "experiment",
    "evaluate",
    "correspond",
  ]

  const contentArry = [
    { accessor: "analyse",      title: "Analyse",     icon: null,   content: <p>After getting to grips with the basics of your website, our first port of call is to integrate the analysis tools we use, to start providing us with feedback on how users are interacting with your website. The tools we use range from google analytics (to view things such as when your users log in, and where they log in from), to heatmapping software, telling us where users most frequently click on a given webpage.</p>},
    { accessor: "theorise",     title: "Theorise",    icon: null,   content: <p>Once we have a firm grip on how your users are behaving, we use our knowledge and experience to theorise improvements that we can make to your site. This may often come in the form of changing colors, shapes of elements, layouts, or could even result in designing an entirely new landing page for your profuct or service.</p>},
    { accessor: "experiment",   title: "Experiment",  icon: null,   content: <p>With our theory in mind, we use non-destuctive tools to overlay the existing content of your website, meaning we do not (can not) permanently change anything on your website, only temporarily alter how it appears</p>},
    { accessor: "evaluate",     title: "Evaluate",    icon: null,   content: <p>With our experiment concluded, we evaluate the performance of the change we made. This is done both quantitatively and qualitatively, against pre-determined success/failure criteria.</p>},
    { accessor: "correspond",   title: "Correspond",  icon: null,   content: <p>Once we have drawn our conclusions, we will relay this back to you, answer questions you may have, discuss what further could be done and if you want to leave things there, you can do so. If you would like to continue to optimize, we begin the entire process again with our new benchmarked performance criteria</p>},
  ]

  return (
    <section className={styles.processContainer} id="process">
      <h1 className={`${styles.sectionTitle}`}>How We Do It</h1>
      <p >As you would expect, we have developed a systematic approach to analysing, theorising, experimenting and evaluating the websites of our clients, to optimize how we can optimize your website</p>
      <div className={styles.processStepsContainer}>
      {
          accessorArry.map((accessor, idx) => {
            const contentElement = contentArry.find((contentObj) => contentObj.accessor === accessor);
            if(!contentElement) return <></>;
            const { title, content } = contentElement;
            return (
            <>
              <ProcessStep title={title} content={content} isLeftAligned={idx % 2 ? false: true} key={`processStep_${idx}`}/>
              {idx < (accessorArry.length - 1) ? <ProcessTransition isLeftAligned={idx % 2 ? false: true} key={`processArrow_${idx}`}/> : <> </>}
            </>
            )
          })
        }
      </div>

    </section>
  );
};

export default Process;
