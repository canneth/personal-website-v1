
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import AboutMeFrame1Svg from '@/components/svgs/AboutMeFrame1Svg';

import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <section className={styles.sectionContainer}>
      <SectionTitle className={styles.sectionTitle} titleOffsetFromLeft={0.2}>
        Hello!
      </SectionTitle>
      <div className={styles.contentContainer}>
        <p className={styles.text}>
          HI I AM ABOUT ME!
        </p>
        <div className={styles.graphicContainer}>
          <div className={styles.imageContainer}>
            <Image
              src='/mountain.jpg'
              alt='image'
              width={300}
              height={300}
            />
          </div>
          <AboutMeFrame1Svg />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;