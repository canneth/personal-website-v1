
import SectionTitle from '@/components/SectionTitle';

import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <section className={styles.sectionContainer}>
      <SectionTitle className={styles.sectionTitle} titleOffsetFromLeft={0.2}>Hello!</SectionTitle>
      <p>HI I AM ABOUT ME!</p>
    </section>
  );
}

export default AboutMe;