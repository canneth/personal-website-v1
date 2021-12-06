
import Image from 'next/image';
import PropTypes from 'prop-types';
import ImageFrameCircularType1 from '@/components/svgs/ImageFrameCircularType1';
import useHiddenRef from '@/hooks/useHiddenRef';
import styles from './FramedGraphicCircularType1.module.css';

function FramedGraphicCircularType1(props) {

  const selfRef = useHiddenRef(styles);

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          width={300}
          height={300}
          priority
        />
      </div>
      <ImageFrameCircularType1 className={styles.frameSvg} moduleStyles={styles} />
    </div>
  );
}

FramedGraphicCircularType1.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default FramedGraphicCircularType1;