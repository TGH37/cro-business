import Link from 'next/link';
import React, { useContext } from 'react';
import SocialMedia from './SocialMedia';
import styles from '../styles/css/layout.module.css'
import { GlobalContext } from '../contexts/GlobalContext';

interface Props {};

function Footer(props: Props) {
  const {} = props;
  const { companyName } =  useContext(GlobalContext)

  return (
    <footer className={styles.footer}>
      <SocialMedia />
      <ul className={styles.footerNav}>
        <li><Link href="/"><a>Solutions</a></Link></li>
        <li><Link href="/"><a>About</a></Link></li>
        <li><Link href="/"><a>Contact</a></Link></li>
        <li><Link href="/"><a>Privacy Policy</a></Link></li>
        <li><Link href="/"><a>Terms of Service</a></Link></li>
      </ul>
      <span>{companyName} 2021, All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
