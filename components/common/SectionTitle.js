
import PropTypes from 'prop-types';
import useHiddenRef from '@/hooks/useHiddenRef';
import styles from './SectionTitle.module.css';

function SectionTitle(props) {
  const titleOffsetFromLeft = (props.titleOffsetFromLeft === undefined) ? 0.5 : props.titleOffsetFromLeft;
  const leftLineFraction = `${titleOffsetFromLeft * 10}fr`;
  const rightLineFraction = `${(1 - titleOffsetFromLeft) * 10}fr`;
  const computedStyle = {
    gridTemplateColumns: `${leftLineFraction} auto ${rightLineFraction}`
  };

  const selfRef = useHiddenRef(styles);

  return (
    <header
      className={`${styles.overallContainer} ${props.className}`}
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
          <line className={styles.rightLine} x1="0" y1="1" x2="100" y2="1" stroke="black" strokeWidth={1} />
        </svg>
      </div>
    </header>
  );
}

SectionTitle.propTypes = {
  titleOffsetFromLeft: PropTypes.number,
  className: PropTypes.string
};

export default SectionTitle;