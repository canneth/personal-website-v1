
import PropTypes from 'prop-types';
import Image from 'next/image';
import useAnimateInRef from '@/hooks/useAnimateInRef';
import styles from './FramedGraphicRectangularType1.module.css';

function FramedGraphicRectangularType1(props) {

  const selfRef = useAnimateInRef(styles, 1700);

  return (
    <div ref={selfRef} className={`${styles.overallContainer} ${props.className}`}>
      <div className={`${styles.circle} ${styles['circle-1']}`} />
      <div className={`${styles.circle} ${styles['circle-2']}`} />
      <div className={`${styles.circle} ${styles['circle-3']}`} />
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={props.imgSrc}
          alt={props.imgAlt}
          width={1600}
          height={900}
        />
      </div>
    </div>
  );
}

FramedGraphicRectangularType1.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default FramedGraphicRectangularType1;