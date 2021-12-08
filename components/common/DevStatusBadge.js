
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './DevStatusBadge.module.css';

function DevStatusBadge(props) {

  const selfRef = useRef();

  let backgroundColor = '';
  switch(props.status) {
    case 'in-progress': { backgroundColor = '#CE7625'; break; }
    case 'complete': { backgroundColor = '#37751A'; break; }
    case 'kiv': { backgroundColor = '#747474'; break; }
    default: { backgroundColor = '#747474'; break; }
  }

  useEffect(() => {
    selfRef.current.style.setProperty('background', backgroundColor);
  }, [backgroundColor]);

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <p className={styles.text}>{props.children}</p>
    </div>
  );
}

DevStatusBadge.propStypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default DevStatusBadge;