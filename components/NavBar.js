
import PropTypes from 'prop-types';

import NavItem from '@/components/NavItem';

import styles from './NavBar.module.css';

function NavBar(props) {
  return (
    <nav className={`${styles.navBar} ${props.className}`}>
      <ul>
        <li><NavItem for='about' number={1} text='About Me' /></li>
        <li><NavItem for='skills' number={2} text='Skills' /></li>
        <li><NavItem for='hero' /></li>
        <li><NavItem for='projects' number={3} text='Projects' /></li>
        <li><NavItem for='conact' number={4} text='Contact' /></li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  className: PropTypes.string
}

export default NavBar;