
import Image from 'next/image';
import PropTypes from 'prop-types';
import useAnimateInRef from '@/hooks/useAnimateInRef';
import styles from './FramedGraphicCircularType1.module.css';

function FramedGraphicCircularType1(props) {

  const selfRef = useAnimateInRef(styles, 1400);

  return (
    <div ref={selfRef} className={`${styles.overallContainer} ${props.className}`}>
      <div className={styles.imageContainer}>
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          width={300}
          height={300}
          priority
        />
      </div>
      <div className={`${styles.circle} ${styles['circle-1']}`} />
      <div className={`${styles.circle} ${styles['circle-2']}`} />
      <div className={`${styles.circle} ${styles['circle-3']}`} />
    </div>
  );
}

FramedGraphicCircularType1.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default FramedGraphicCircularType1;