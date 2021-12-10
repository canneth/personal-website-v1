
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import useScrollYDirection from '@/hooks/useScrollYDirection';
import NavItem from '@/components/nav-bar/NavItem';
import NavOverlay from '@/components/nav-bar/NavOverlay';
import styles from './NavBarMobile.module.css';
import useWindowSize from '@/hooks/useWindowSize';

function NavBarMobile(props) {

  const [deployed, setDeployed] = useState(false);
  const scrollYDirection = useScrollYDirection();
  const navBarRef = useRef();

  useEffect(() => {
    const modes = ['retracted', 'extended', 'integrated'];
    let modeClass = null;
    switch (scrollYDirection) {
      case 0: { modeClass = 'integrated'; break; }
      case 1: { modeClass = 'retracted'; break; }
      case -1: { modeClass = 'extended'; break; }
      default: { modeClass = 'integrated'; break; }
    }
    if (modeClass && !navBarRef.current.classList.contains(styles[modeClass])) {
      for (let mode of modes) navBarRef.current.classList.remove(styles[mode]);
      navBarRef.current.classList.add(styles[modeClass]);
    }
  }, [scrollYDirection, deployed]);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    const main = document.getElementById('main');
    if (deployed) {
      if (!main.classList.contains('blur')) main.classList.add('blur');
      if (!body.classList.contains('no-scroll')) body.classList.add('no-scroll');
    } else {
      main.classList.remove('blur');
      body.classList.remove('no-scroll');
    }
  }, [deployed]);

  return (
    <nav className={`${styles.overallContainer} ${props.className}`}>
      <div ref={navBarRef} className={`${styles.navBar} ${deployed ? styles.deployed : null}`}>
        <NavItem forHero href='/#hero-section' className={styles.logoIcon} onClick={() => setDeployed(false)} />
        <div
          className={`${styles.menuIcon} ${deployed ? styles.deployed : null}`}
          onClick={() => setDeployed(!deployed)}
        >
          <div className={styles.middleLine} />
        </div>
      </div>
      <NavOverlay className={`${styles.navOverlay} ${deployed ? styles.deployed : null}`} setDeployed={setDeployed}/>
    </nav>
  );
}

NavBarMobile.propTypes = {
  className: PropTypes.string
};

export default NavBarMobile;