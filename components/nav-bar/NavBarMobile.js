
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import useScrollYDirection from '@/hooks/useScrollYDirection';
import NavItem from '@/components/nav-bar/NavItem';
import NavOverlay from '@/components/nav-bar/NavOverlay';
import styles from './NavBarMobile.module.css';

function NavBarMobile(props) {

  const [deployed, setDeployed] = useState(false);
  const scrollYDirection = useScrollYDirection();
  const selfRef = useRef();

  useEffect(() => {
    const modes = ['retracted', 'extended', 'integrated'];
    let modeClass = '';
    switch (scrollYDirection) {
      case 0: { modeClass = 'integrated'; break; }
      case 1: { modeClass = 'retracted'; break; }
      case -1: { modeClass = 'extended'; break; }
      default: { modeClass = 'integrated'; break; }
    }
    if (!selfRef.current.classList.contains(styles[modeClass])) {
      for (let mode of modes) selfRef.current.classList.remove(styles[mode]);
      selfRef.current.classList.add(styles[modeClass]);
    }
  }, [scrollYDirection]);

  return (
    <>
      <NavOverlay className={`${styles.navOverlay} ${deployed ? styles.deployed : null}`} setDeployed={setDeployed}/>
      <nav ref={selfRef} className={`${styles.navBar} ${props.className}`}>
        <ul>
          <li><NavItem forHero href='/#hero-section' className={styles.logoIcon} /></li>
          <li>
            <div
              className={`${styles.menuIcon} ${deployed ? styles.deployed : null}`}
              onClick={() => setDeployed(!deployed)}
            >
              <div className={styles.middleLine} />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

NavBarMobile.propTypes = {
  className: PropTypes.string
};

export default NavBarMobile;