
import Image from 'next/image';

import ContactBar from '@/components/contact-bar/ContactBar';
import Button from '@/components/Button';

import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.foregroundContainer}>
        <p className={styles.subtitle}>{`Hi! I'm`}</p>
        <h1 className={styles.title}>
          <span className={styles.titlePrefix}>Ca</span>
          <span className={styles.titleSuffix}>nneth</span>
        </h1>
        <p className={`${styles.description} text-style-web-large`}>
          I love creating beautiful solutions to real-world problems
        </p>
        <ContactBar className={styles.contactBar}/>
        <div className={styles.resumeButtonAnimContainer}>
          <Button className={styles.resumeButton} for='resume' text='Resume' large />
        </div>
      </div>
      <div className={styles.backgroundContainer}>
        <Image
          className={styles.backgroundImage}
          src='/hero-background.svg'
          alt='Background'
          layout='fill'
          priority
        />
      </div>
    </section>
  );
}

export default Hero;