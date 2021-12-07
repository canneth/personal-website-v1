
import { useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import ImageFrameCircularType1 from '@/components/svgs/ImageFrameCircularType1';
import useHiddenRef from '@/hooks/useHiddenRef';
import useMouseScreenPosition from '@/hooks/useMouseScreenPosition';
import styles from './FramedGraphicCircularType1.module.css';

function FramedGraphicCircularType1(props) {

  const selfRef = useHiddenRef(styles);
  const [perspectiveOriginX, setPerspectiveOriginX] = useState(0);
  const [perspectiveOriginY, setPerspectiveOriginY] = useState(0);
  const { mouseScreenX, mouseScreenY } = useMouseScreenPosition();

  useEffect(() => {
    const { x, y, width, height } = selfRef.current.getBoundingClientRect();
    const selfOriginX = x + width / 2;
    const selfOriginY = y + height / 2;
    setPerspectiveOriginX(-(mouseScreenX - selfOriginX));
    setPerspectiveOriginY(-(mouseScreenY - selfOriginY));
    selfRef.current.style.setProperty('--perspective-origin-x', perspectiveOriginX);
    selfRef.current.style.setProperty('--perspective-origin-y', perspectiveOriginY);
  }, [mouseScreenX, mouseScreenY, selfRef, perspectiveOriginX, perspectiveOriginY]);

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