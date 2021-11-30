
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const DATA_ICON_FOR = {
  github: 'bi:github',
  resume: 'fe:document',
  extlink: 'ci:external-link'
}

function Button(props) {
  var iconWidth = 0;
  var iconHeight = 0;
  if (props.forMobile) {
    iconWidth = props.large ? 14 : 12;
    iconHeight = props.large ? 14 : 12;
  } else {
    iconWidth = props.large ? 22 : 12;
    iconHeight = props.large ? 22 : 12;
  }
  return (
    <button className={styles.button}>
      <span className={styles.iconContainer}>
        <span
          className={`iconify ${styles.iconSvg}`}
          data-icon={DATA_ICON_FOR[props.for]}
          data-width={iconWidth}
          data-height={iconHeight}>
        </span>
      </span>
      <span className={styles.buttonText}>{props.text}</span>
    </button>
  );
}

Button.propTypes = {
  for: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  forMobile: PropTypes.bool,
  large: PropTypes.bool
}

export default Button;