
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import useScroll from '@/hooks/useScroll';
import NavItem from '@/components/nav-bar/NavItem';
import styles from './NavBar.module.css';

function NavBar(props) {

  const { scrollY, scrollYDirection } = useScroll();
  console.log(scrollYDirection);
  const selfRef = useRef();

  useEffect(() => {
    const modes = ['retracted', 'extended', 'integrated'];
    let modeClass = '';
    if (scrollY > 0) {
      switch (scrollYDirection) {
        case 1: { modeClass = 'retracted'; break; }
        case -1: { modeClass = 'extended'; break; }
        default: break;
      }
    } else {
      modeClass = 'integrated';
    }
    if (!selfRef.current.classList.contains(styles[modeClass])) {
      for (let mode of modes) selfRef.current.classList.remove(styles[mode]);
      selfRef.current.classList.add(styles[modeClass]);
    }
  }, [scrollY, scrollYDirection]);

  return (
    <nav ref={selfRef} className={`${styles.navBar} ${props.className} ${styles.integrated}`}>
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