
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import styles from './ContactMe.module.css';

function ContactMe() {
  return (
    <section className={styles.overallContainer}>
      <SectionTitle className={styles.sectionTitle}>
        Let's Chat!
      </SectionTitle>
      <div className={styles.contentContainer}>
        <p className={styles.text}>
          If you have an enticing opportunity to share, a burning question to ask,
          or just simply wish to say hello, my inbox is always open.
          <br /><br />
          I am currently actively seeking job opportunities, so if I've piqued your
          interest, my resume is available for download as well.
        </p>
        <a className={styles.emailLink} href=''>canneth@gmail.com</a>
        <Button className={styles.resumeButton} icon='resume' text='Resume' />
      </div>
    </section>
  );
}

export default ContactMe;