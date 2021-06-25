import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from '../styles/css/socialMedia.module.css'

interface Props {};

function SocialMedia(props: Props) {
  const {} = props;

  return (
    <div className={styles.socialMediaContainer}>
      <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.linkedin}/>
      <FontAwesomeIcon icon={["fab", "facebook"]} className={styles.facebook}/>
    </div>
    
  );
};

export default SocialMedia;
