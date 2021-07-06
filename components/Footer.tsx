import Link from 'next/link';
import React, { useContext } from 'react';
import SocialMedia from './SocialMedia';
import styles from '../styles/css/layout.module.css'
import { GlobalContext } from '../contexts/GlobalContext';

interface Props {};

function Footer(props: Props) {
  const {} = props;
  const { companyName } =  useContext(GlobalContext);

  return (
    <footer className={styles.footer}>
      <SocialMedia />
      <ul className={styles.footerNav}>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/#services"><a>Solutions</a></Link></li>
        <li><Link href="/#contact"><a>Contact</a></Link></li>
        <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
        <li><Link href="/terms-of-service"><a>Terms of Service</a></Link></li>
        <li><Link href="/cookie-policy"><a>Cookie Policy</a></Link></li>
      </ul>
      <span>{companyName} 2021, All Rights Reserved.</span>
      {/* <div className={styles.legalContainer}>
        <div className={styles.policyContainer}>
          <Link href="/"><a>Privacy Policy</a></Link>
          <Link href="/"><a>Terms of Service</a></Link>
        </div>
        <span>{companyName} 2021, All Rights Reserved.</span>
      </div> */}
    </footer>
  );
};

export default Footer;
