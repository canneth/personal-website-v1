
import PropTypes from 'prop-types';
import styles from './TechItem.module.css';

const DATA_FOR = {
  // Languages
  html5: {
    icon: 'vscode-icons:file-type-html',
    label: 'HTML 5'
  },
  css3: {
    icon: 'vscode-icons:file-type-css',
    label: 'CSS 3'
  },
  js: {
    icon: 'logos:javascript',
    label: 'JS (ES6+)'
  },
  ts: {
    icon: 'logos:typescript-icon',
    label: 'TypeScript'
  },
  // Frontend
  react: {
    icon: 'vscode-icons:file-type-reactjs',
    label: 'React'
  },
  redux: {
    icon: 'logos:redux',
    label: 'Redux'
  },
  mobx: {
    icon: 'logos:mobx',
    label: 'MobX'
  },
  // Backend
  nodejs: {
    icon: 'logos:nodejs-icon',
    label: 'NodeJS'
  },
  nestjs: {
    icon: 'logos:nestjs',
    label: 'NestJS'
  },
  passportjs: {
    icon: 'logos:passport',
    label: 'PassportJS'
  },
  postgresql: {
    icon: 'logos:postgresql',
    label: 'PostgreSQL'
  },
  mongodb: {
    icon: 'vscode-icons:file-type-mongo',
    label: 'MongoDB'
  },
  expressjs: {
    icon: 'simple-icons:express',
    label: 'ExpressJS',
    color: '#C0C0C0'
  },
  // Fullstack
  nextjs: {
    icon: 'akar-icons:nextjs-fill',
    label: 'NextJS',
    color: '#C0C0C0'
  },
  // Testing
  jest: {
    icon: 'logos:jest',
    label: 'Jest'
  },
  testingLibrary: {
    icon: 'simple-icons:testinglibrary',
    label: 'Testing Library',
    color: '#D91818'
  },
  // Version Control
  git: {
    icon: 'cib:git',
    label: 'Git',
    color: '#DE4C36'
  },
  gitHub: {
    icon: 'cib:github',
    label: 'GitHub',
    color: '#C0C0C0'
  },
  // Design
  figma: {
    icon: 'logos:figma',
    label: 'Figma'
  }
}

function TechItem(props) {
  const icon = DATA_FOR[props.for].icon;
  const label = DATA_FOR[props.for].label;
  const color = DATA_FOR[props.for].color ? DATA_FOR[props.for].color : '';
  return (
    <div className={`${styles.overallContainer} ${props.className} ${props.noLabel ? styles.tooltipEnabled : ''}`}>
      <span
        className={`iconify ${styles.iconSvg}`}
        data-icon={icon}
        data-width={props.iconWidthExpression}
        data-height={props.iconHeightExpression ? props.iconHeightExpression : props.iconWidthExpression}
        style={{ color: color }}
      />
      <span className={styles.tooltip}>{label}</span>
      {
        props.noLabel ?
          null
          :
          <p className={`${styles.label}`}>
            {label}
          </p>
      }
    </div>
  );
}

TechItem.propTypes = {
  for: PropTypes.string.isRequired,
  iconWidthExpression: PropTypes.string.isRequired,
  iconHeightExpression: PropTypes.string,
  noLabel: PropTypes.bool,
  className: PropTypes.string
}

export default TechItem;