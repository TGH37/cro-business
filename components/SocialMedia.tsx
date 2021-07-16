import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/css/socialMedia.module.css';

interface Props {};

function SocialMedia(props: Props) {
  const {} = props;

  return (
    <div className={styles.socialMediaContainer}>
      <Link href="https://www.linkedin.com/company/74572571/"><a target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" className={styles.linkedin}/></a></Link>
      <Link href="https://www.facebook.com/Convergence-CRO-100320065667890"><a target="_blank"><FontAwesomeIcon icon={["fab", "facebook"]} size="2x"className={styles.facebook}/></a></Link>
    </div>
  );
};

export default SocialMedia;
