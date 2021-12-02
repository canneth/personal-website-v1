
import PropTypes from 'prop-types';

import NavItem from '@/components/NavItem';
import LogoSvg from '@/components/LogoSvg';

import styles from './NavBar.module.css';

function NavBar(props) {
  return (
    <nav className={`${styles.navBar} ${props.className}`}>
      <ul>
        <li><NavItem text='About Me' /></li>
        <li><NavItem text='Skills' /></li>
        <li><NavItem forHero /></li>
        <li><NavItem text='Projects' /></li>
        <li><NavItem text='Contact' /></li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  className: PropTypes.string
}

export default NavBar;