
import Image from 'next/image';
import PropTypes from 'prop-types';
import ImageFrameCircularType2 from '@/components/svgs/ImageFrameCircularType2';
import useHiddenRef from '@/hooks/useHiddenRef';
import styles from './FramedGraphicCircularType2.module.css';

function FramedGraphicCircularType2(props) {

  const selfRef = useHiddenRef(styles);

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
      <ImageFrameCircularType2 className={styles.frameSvg} moduleStyles={styles} />
    </div>
  );
}

FramedGraphicCircularType2.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default FramedGraphicCircularType2;