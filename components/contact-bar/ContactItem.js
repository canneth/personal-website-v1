
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
      <a href={props.link} target='_blank' rel='noreferrer'>
        <span
          className={`iconify ${styles.iconSvg}`}
          data-icon={DATA_ICON_FOR[props.for]}
          data-width={props.widthExpression}
          data-height={props.heightExpression ? props.heightExpression : 'auto'}
        >
        </span>
      </a>
    </div>
  );
}

ContactItem.propTypes = {
  for: PropTypes.string.isRequired,
  widthExpression: PropTypes.string.isRequired,
  heightExpression: PropTypes.string,
  link: PropTypes.string
};

export default ContactItem;