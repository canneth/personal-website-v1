
import Image from 'next/image';

import styles from './HeroBackground.module.css';

function HeroBackground() {
  return (
    <div className={styles.backgroundContainer}>
      <Image
        className={styles.backgroundSvg}
        src='/../public/hero-background.svg'
        alt='Background'
        layout='fill'
      />
    </div>
  );
}

export default HeroBackground;