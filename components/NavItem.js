
import PropTypes from 'prop-types';

import LogoSvg from '@/components/LogoSvg';

import styles from './NavItem.module.css';

function NavItem(props) {
  return (
    <div className={`${styles.navItemContainer} mouseover-enabled`}>
      {
        props.for === 'hero' ?
          <LogoSvg className={props.className} />
        :
          <>
            <svg viewBox="0 0 20 3" xmlns="http://www.w3.org/2000/svg">
              <line className={styles.leftLine} x1="0" y1="0" x2="20" y2="0" stroke="black" strokeWidth={3}/>
            </svg>
            <p className={styles.text}>{props.text}</p>
            <svg viewBox="0 0 20 3" xmlns="http://www.w3.org/2000/svg">
              <line className={styles.rightLine} x1="0" y1="0" x2="20" y2="0" stroke="black" strokeWidth={3}/>
            </svg>
          </>
      }
    </div>
  );
}

NavItem.propTypes = {
  for: PropTypes.string.isRequired,
  number: PropTypes.number,
  text: PropTypes.string,
  forMobile: PropTypes.boolean
}

export default NavItem;