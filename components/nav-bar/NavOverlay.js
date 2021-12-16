
import PropTypes from 'prop-types';
import NavItem from '@/components/nav-bar/NavItem';
import Button from '@/components/common/Button';
import styles from './NavOverlay.module.css';

function NavOverlay(props) {
  return (
    <aside className={`${styles.overallContainer} ${props.className}`}>
      <ul className={styles.navList}>
        <li><NavItem text='About Me' href='/#about-section' onClick={() => props.setDeployed(false)}/></li>
        <li><NavItem text='Skills' href='/#skills-section' onClick={() => props.setDeployed(false)}/></li>
        <li><NavItem text='Projects' href='/#projects-section' onClick={() => props.setDeployed(false)}/></li>
        <li><NavItem text='Contact' href='/#contact-section' onClick={() => props.setDeployed(false)}/></li>
      </ul>
      <Button className={styles.resumeButton} icon='resume' text='Resume' link='/documents/Canneth.pdf'/>
    </aside>
  );
}

NavOverlay.propTypes = {
  setDeployed: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default NavOverlay;