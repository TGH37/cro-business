import React from 'react';
import styles from '../styles/css/contact.module.css';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

interface Props {};

function Contact(props: Props) {
  const {} = props;

  return (
    <section className={styles.contactContainer} id="contact">
      <h1 className={`${styles.sectionTitle}`}>Get In Touch</h1>
      <p>If you'd like to learn more about our services and pricing, please fill out the contact form below and we will contact you as soon as we are able.</p>
      <ContactDetails />
      <ContactForm />      
    </section>
  );
};

export default Contact;
