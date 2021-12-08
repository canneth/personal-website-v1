
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const DATA_ICON_FOR = {
  github: 'bi:github',
  resume: 'fe:document',
  extlink: 'ci:external-link'
}

function Button(props) {
  return (
    <button className={`${styles.button} ${props.small ? styles.small : styles.large} ${props.className}`}>
      <span className={styles.iconContainer}>
        <span
          className={`iconify ${styles.iconSvg}`}
          data-icon={DATA_ICON_FOR[props.for]}
        >
        </span>
      </span>
      <span className={styles.text}>
        {props.children}
      </span>
    </button>
  );
}

Button.propTypes = {
  for: PropTypes.string.isRequired,
  small: PropTypes.bool,
  className: PropTypes.string
};

export default Button;