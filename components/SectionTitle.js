
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import styles from './SectionTitle.module.css';

function SectionTitle(props) {
  const titleOffsetFromLeft = (props.titleOffsetFromLeft === undefined) ? 0.5 : props.titleOffsetFromLeft;
  const leftLineFraction = `${titleOffsetFromLeft * 10}fr`;
  const rightLineFraction = `${(1 - titleOffsetFromLeft) * 10}fr`;
  const computedStyle = {
    gridTemplateColumns: `${leftLineFraction} auto ${rightLineFraction}`
  };

  const selfRef = useRef();

  function handleScrollForSectionTitle() {
    // TODO: YOU LEFT OFF HERE!
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollForSectionTitle);
    return () => { window.removeEventListener('scroll', handleScrollForSectionTitle) };
  });

  return (
    <header
      className={`${styles.titleContainer} ${props.className} ${styles.hidden}`}
      style={computedStyle}
      ref={selfRef}
    >
      <div className={styles.lineContainer}>
        <svg viewBox="0 0 100 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none' height={5} width='100%'>
          <line className={styles.leftLine} x1="0" y1="1" x2="100" y2="1" stroke="black" strokeWidth={1} />
        </svg>
      </div>
      <h1 className={styles.text}>{props.children}</h1>
      <div className={styles.lineContainer}>
        <svg viewBox="0 0 100 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none' height={5} width='100%'>
          <line className={styles.leftLine} x1="0" y1="1" x2="100" y2="1" stroke="black" strokeWidth={1} />
        </svg>
      </div>
    </header>
  );

}

SectionTitle.propTypes = {
  titleOffsetFromLeft: PropTypes.number,
  className: PropTypes.string
}

export default SectionTitle;