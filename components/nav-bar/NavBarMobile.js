
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import useScrollYDirection from '@/hooks/useScrollYDirection';
import NavItem from '@/components/nav-bar/NavItem';
import styles from './NavBarMobile.module.css';

function NavBar(props) {

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
    <nav ref={selfRef} className={`${styles.navBar} ${props.className}`}>
      <ul>
        <li><NavItem forHero href='/#hero-section'/></li>
        <li></li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  className: PropTypes.string
};

export default NavBar;