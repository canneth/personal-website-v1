
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

function ProjectCard(props) {
  return (
    <div className={styles.overallContainer}>
      <h1>{props.title}</h1>
      <p className={styles.description}>
        {props.children}
      </p>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  mirrored: PropTypes.bool,
  forMobile: PropTypes.bool,
  className: PropTypes.string
}

export default ProjectCard;