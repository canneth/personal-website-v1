
import Image from 'next/image';
import PropTypes from 'prop-types';
import ContactBar from '@/components/contact-bar/ContactBar';
import Button from '@/components/common/Button';
import styles from './Hero.module.css';

function Hero(props) {
  return (
    <section id={props.id} className={styles.overallContainer}>
      <div className={styles.foregroundContainer}>
        <p className={styles.subtitle}>{`Hi! I'm`}</p>
        <h1 className={styles.title}>
          <span className={styles.titlePrefix}>Ca</span>
          <span className={styles.titleSuffix}>nneth</span>
        </h1>
        <p className={styles.description}>
          I love creating beautiful solutions to real-world problems
        </p>
        <ContactBar className={styles.contactBar}/>
        <Button className={styles.resumeButton} icon='resume' text='Resume' />
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

Hero.propTypes = {
  id: PropTypes.string.isRequired
}

export default Hero;