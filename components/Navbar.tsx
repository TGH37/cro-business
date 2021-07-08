import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/css/layout.module.css';
import SocialMedia from './SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBreakpoint } from '../contexts/MediaBreakpointCxt'
import { GlobalContext } from '../contexts/GlobalContext';
import { mediaBreakpoints } from '../interfaces';
import logo from '../public/logo.svg';

interface Props {};

function Navbar(props: Props) {
  const {} = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const mediaBreakpoints: mediaBreakpoints = useBreakpoint();
  const { companyName } = useContext(GlobalContext);

  const menuIconClickHandler = (): void => setIsMenuOpen(!isMenuOpen);

  const getMenuIconAttrs = () => {
    return isMenuOpen ? 
    {
      className: styles.menuIcon,
      'aria-expanded': true,
    } :
    {
      className: styles.menuIcon,
      'aria-expanded': false,
    };
  };

  const getMenuAttrs = () => {
    return isMenuOpen ? 
    {
      className: styles.openMenu,
    } :
    {
      className: styles.closedMenu,
    };
  };

  useEffect(() => {
    if(mediaBreakpoints.md) setIsMenuOpen(true);
  }, [mediaBreakpoints]);

  return (
    <nav className={styles.navbar}>
      <div aria-label="logo-container" className={styles.logoContainer}>
        <Image aria-label="logo" src={logo} height={80} width={142} />
      </div>
      <div className={styles.socialMediaContainer}>
        <SocialMedia />
      </div>
      {/* mobile layout (css adjusts position for desktop) */}
      <ul aria-label="navigation-menu" {...getMenuAttrs()}>
        <li><Link href="/"><a tabIndex={1}>Home</a></Link></li>
        <li><Link href="/#services"><a tabIndex={1}>Solutions</a></Link></li>
        <li><Link href="/#contact"><a tabIndex={1}>Contact</a></Link></li>
      </ul>
      <FontAwesomeIcon icon="bars" size={!mediaBreakpoints.xs ? "1x" : "2x"} aria-label="menu-icon" onClick={menuIconClickHandler} {...getMenuIconAttrs()} tabIndex={0}/>
    </nav>
  );
};

export default Navbar;
