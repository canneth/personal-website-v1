
import NavItem from '@/components/nav-bar/NavItem';
import styles from './NavOverlay.module.css';

function NavOverlay() {
  return (
    <nav className={styles.overallContainer}>
      <ul>
        <li><NavItem text='About Me' href='/#about-section'/></li>
        <li><NavItem text='Skills' href='/#skills-section'/></li>
        <li><NavItem text='Projects' href='/#projects-section'/></li>
        <li><NavItem text='Contact' href='/#contact-section'/></li>
      </ul>
    </nav>
  );
}

export default NavOverlay;