import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from '../styles/css/layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

type Props = {
  children?: ReactNode
  title: string
  description: string
};

const Layout = ({ children, title, description }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
    </Head>

    <div className={styles.bodyContainer}>
      <header className={styles.navHeader}>
        <Navbar />
      </header>
      {children}
      <Footer />
      {/* <div className={styles.stickyNavBtns}>
        <button>Scroll to top</button>
      </div> */}
    </div>
  </div>
);

export default Layout;
