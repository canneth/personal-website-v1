
import PropTypes from 'prop-types';
import Link from 'next/link';
import LogoSvg from '@/components/svgs/LogoSvg';
import styles from './NavItem.module.css';

function NavItem(props) {
  return (
    <Link href={props.href}>
      {
        props.forHero ?
          <div className={styles.logoContainer}>
            <LogoSvg className={styles.logoSvg} />
          </div>
        :
          <div className={styles.navItemContainer}>
            <svg viewBox="0 0 20 3" xmlns="http://www.w3.org/2000/svg">
              <line className={styles.leftLine} x1="0" y1="0" x2="20" y2="0" stroke="black" strokeWidth={3}/>
            </svg>
            <p className={styles.text}>{props.text}</p>
            <svg viewBox="0 0 20 3" xmlns="http://www.w3.org/2000/svg">
              <line className={styles.rightLine} x1="0" y1="0" x2="20" y2="0" stroke="black" strokeWidth={3}/>
            </svg>
          </div>
      }
    </Link>
  );
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  forHero: PropTypes.bool,
  text: PropTypes.string,
  forMobile: PropTypes.bool
};

export default NavItem;