
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
  var buttonWidth = 0;
  var buttonHeight = 0;
  var textClasses = '';
  if (props.forMobile) {
    iconWidth = props.large ? 14 : 12;
    iconHeight = props.large ? 14 : 12;
    buttonWidth = props.large ? 80 : 60;
    buttonHeight = props.large ? 21 : 17;
    textClasses = `${styles.mobileButtonText} text-styles-mobile-small`;
  } else {
    iconWidth = props.large ? 22 : 12;
    iconHeight = props.large ? 22 : 12;
    buttonWidth = props.large ? 154 : 115;
    buttonHeight = props.large ? 41 : 33;
    textClasses = `${styles.webButtonText} text-style-web-regular`;
  }
  return (
    <button
      className={`${styles.button} ${props.className} mouseover-enabled`}
      style={
        {
          width: buttonWidth,
          height: buttonHeight
        }
      }
    >
      <span className={styles.iconContainer}>
        <span
          className={`iconify ${styles.iconSvg}`}
          data-icon={DATA_ICON_FOR[props.for]}
          data-width={iconWidth}
          data-height={iconHeight}>
        </span>
      </span>
      <span
        className={textClasses}>
        {props.text}
      </span>
    </button>
  );
}

Button.propTypes = {
  for: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  forMobile: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string
}

export default Button;