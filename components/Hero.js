
import Image from 'next/image';

import ContactBar from '@/components/ContactBar';
import Button from '@/components/Button';

import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.foregroundContainer}>
        <p className={styles.subtitle}>{`Hi! I'm`}</p>
        <h1 className={styles.title}><span className={styles.titlePrefix}>Ca</span>nneth</h1>
        <p className={`${styles.description} text-style-web-large`}>A self-taught developer creating beautiful solutions to real-world problems</p>
        <ContactBar />
        <Button for='github' text='Github' large />
      </div>
      <div className={styles.backgroundContainer}>
        <Image
          src='/../public/hero-background.svg'
          alt='Background'
          layout='fill'
        />
      </div>
    </div>
  );
}

export default Hero;