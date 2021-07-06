import React, { ReactElement } from 'react';
import styles from '../styles/css/process.module.css';
import ProcessTransition from './ProcessTransition';


interface Props {
  isLeftAligned: boolean
  title: string
  content: ReactElement
};

function ProcessStep(props: Props) {
  const { isLeftAligned, title, content } = props;

  return (
    <div className={`${isLeftAligned ? styles.processStepLHS : styles.processStepRHS} ${styles.processStep}`}>
      <h2>{title}</h2>
      { content }
    </div>
  );
};

export default ProcessStep;
