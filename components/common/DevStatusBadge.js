
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './DevStatusBadge.module.css';

function DevStatusBadge(props) {

  const selfRef = useRef();

  let backgroundColor = '';
  let text = '';

  switch (props.status) {
    case 'in-progress': {
      backgroundColor = '#CE7625';
      text = 'In Progress';
      break;
    }
    case 'complete': {
      backgroundColor = '#37751A';
      text = 'Complete';
      break;
    }
    case 'kiv': {
      backgroundColor = '#747474';
      text = 'KIV';
      break;
    }
    default: {
      backgroundColor = '#747474';
      text = 'KIV';
      break;
    }
  }

  useEffect(() => {
    selfRef.current.style.setProperty('background', backgroundColor);
  }, [backgroundColor]);

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

DevStatusBadge.propStypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default DevStatusBadge;