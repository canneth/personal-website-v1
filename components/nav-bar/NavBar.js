
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import NavItem from '@/components/nav-bar/NavItem';

import styles from './NavBar.module.css';

function NavBar(props) {

  const [currScrollYPos, setCurrScrollYPos] = useState();

  function handleScrollForNavBar() {
    const newScrollYPos = window.scrollY;
    const modes = ['retracted', 'extended', 'integrated'];
    let modeClass = '';
    if (newScrollYPos > 0) {
      modeClass = newScrollYPos > currScrollYPos ? 'retracted' : 'extended';
    } else {
      modeClass = 'integrated';
    }
    const navBar = document.getElementById('nav-bar');
    if (!navBar.classList.contains(styles[modeClass])) {
      for (let mode of modes) navBar.classList.remove(styles[mode]);
      navBar.classList.add(styles[modeClass]);
    }
    setCurrScrollYPos(newScrollYPos);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollForNavBar);
    return () => window.removeEventListener('scroll', handleScrollForNavBar);
  });

  return (
    <nav id='nav-bar' className={`${styles.navBar} ${props.className} ${styles.integrated}`}>
      <ul>
        <li><NavItem text='About Me' /></li>
        <li><NavItem text='Skills' /></li>
        <li><NavItem forHero /></li>
        <li><NavItem text='Projects' /></li>
        <li><NavItem text='Contact' /></li>
      </ul>
      <div className={styles.barBackground} />
    </nav>
  );
}

NavBar.propTypes = {
  className: PropTypes.string
}

export default NavBar;