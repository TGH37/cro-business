import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import styles from '../styles/css/contact.module.css';
import { GlobalContext } from '../contexts/GlobalContext'

interface Props {
};

function ContactDetails(props: Props) {
  const {  } = props;
  const { hqAddress, contactNumber } = useContext(GlobalContext);

  return (
    <div className={styles.contactInfoContainer}>
      <div><FontAwesomeIcon icon={"map-marker-alt"} style={{color: "#FF7F7F"}}/><span> {hqAddress}</span></div>
      <div><FontAwesomeIcon icon={"phone"} style={{color: "#62CCC5"}}/><span>{" " + contactNumber}</span></div>
    </div>
  );
};

export default ContactDetails;
