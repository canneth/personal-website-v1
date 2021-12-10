
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const DATA_ICON_FOR = {
  github: 'bi:github',
  resume: 'fe:document',
  extlink: 'ci:external-link'
}

function Button(props) {
  return (
    <button className={
      `${styles.button}
      ${props.small ? styles.small : styles.large}
      ${props.className}`
    }>
      {
        props.icon ?
          <span className={styles.iconContainer}>
            <span
              className={`iconify ${styles.iconSvg}`}
              data-icon={DATA_ICON_FOR[props.icon]}
            />
          </span>
          :
          null
      }
      <span className={styles.text}>
        {props.text}
      </span>
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  small: PropTypes.bool,
  className: PropTypes.string
};

export default Button;