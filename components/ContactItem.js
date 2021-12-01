
import PropTypes from 'prop-types';

import styles from './ContactItem.module.css';

const DATA_ICON_FOR = {
  github: 'icon-park-outline:github-one',
  linkedin: 'eva:linkedin-outline',
  instagram: 'akar-icons:instagram-fill',
  gmail: 'cib:gmail'
}

function ContactItem(props) { 
  return (
    <div className={styles.itemContainer}>
      <a href={props.link}>
        <span className={`iconify ${styles.iconSvg} mouseover-enabled`} data-icon={DATA_ICON_FOR[props.for]}></span>
      </a>
    </div>
  );
}

ContactItem.propTypes = {
  for: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  link: PropTypes.string
};

export default ContactItem;