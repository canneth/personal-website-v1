
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const DATA_ICON_FOR = {
  github: 'bi:github',
  resume: 'fe:document',
  extlink: 'ci:external-link'
}

function Button(props) {
  return (
    <a
      className={`${styles.button} ${props.small ? styles.small : styles.large} ${props.className}`}
      href={props.link}
      target='_blank'
      rel='noreferrer'
    >
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
    </a>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  small: PropTypes.bool,
  className: PropTypes.string
};

export default Button;