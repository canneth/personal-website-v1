
import PropTypes from 'prop-types';
import styles from './TechItem.module.css';

const DATA_FOR = {
  html5: {
    icon: 'icon-park-outline:github-one',
    label: 'GitHub'
  },
  css3: {
    icon: 'icon-park-outline:github-one',
    label: 'GitHub'
  },
  js: {
    icon: 'icon-park-outline:github-one',
    label: 'GitHub'
  },
  react: {
    icon: 'icon-park-outline:github-one',
    label: 'GitHub'
  },
  redux: {
    icon: 'icon-park-outline:github-one',
    label: 'GitHub'
  }
}

function TechItem(props) {
  return (
    <div className={`${styles.overallContainer} mouseover-drop-shadow-style`}>
      <span
        className={`iconify ${styles.iconSvg}`}
        data-icon={DATA_FOR[props.for].icon}
        data-width={props.iconWidthExpression}
        data-height={props.iconHeightExpression ? props.iconHeightExpression : 'auto'}
      >
      </span>
      <span className={`${styles.label} text-style-web-regular`}>{DATA_FOR[props.for].label}</span>
    </div>
  );
}

TechItem.propTypes = {
  for: PropTypes.string.isRequired,
  iconWidthExpression: PropTypes.string.isRequired,
  iconHeightExpression: PropTypes.string,
  className: PropTypes.string
}

export default TechItem;