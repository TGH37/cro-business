import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/css/layout.module.css'
import SocialMedia from './SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBreakpoint } from '../contexts/MediaBreakpointCxt'
import { GlobalContext } from '../contexts/GlobalContext';

interface Props {};

interface mediaBreakpoints {
  xs?: boolean
}

function Navbar(props: Props) {
  const {} = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
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
    }
  };

  const getMenuAttrs = () => {
    return isMenuOpen ? 
    {
      className: styles.openMenu,
    } :
    {
      className: styles.closedMenu,
    }
  };

  useEffect(() => {
    if(mediaBreakpoints.xs) setIsMenuOpen(true);
  }, [mediaBreakpoints.xs])

  return (
    <nav className={styles.navbar}>
      <div aria-label="logo-container" className={styles.logoContainer}>
        <Image aria-label="logo" src='/../public/logo.svg' height={30} width={30} />
        <h1 aria-label="company-name" >{companyName.toUpperCase()}</h1>
      </div>
      <div className={styles.socialMediaContainer}>
        <SocialMedia />
      </div>
      {/* mobile layout (css adjusts position for desktop) */}
      <ul aria-label="navigation-menu" {...getMenuAttrs()}>
        <li><Link href="/"><a>Solutions</a></Link></li>
        <li><Link href="/"><a>About</a></Link></li>
        <li><Link href="/"><a>Contact</a></Link></li>
      </ul>
      <FontAwesomeIcon icon="bars" aria-label="menu-icon" onClick={menuIconClickHandler} {...getMenuIconAttrs()}/>
    </nav>
  );
};

export default Navbar;
