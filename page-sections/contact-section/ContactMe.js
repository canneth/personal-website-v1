
import PropTypes from 'prop-types';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './ContactMe.module.css';

function ContactMe(props) {

  const selfRef = useIntersectionObserver(styles);

  return (
    <section id={props.id} ref={selfRef} className={styles.overallContainer}>
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
        <a
          className={styles.emailLink}
          href='mailto:canneth.ho@gmail.com?subject=Hello%20From%20The%20Other%20Side!'
          target='_blank'
          rel='noreferrer'
        >
          canneth@gmail.com
        </a>
        <Button className={styles.resumeButton} icon='resume' text='Resume' link='/documents/Canneth.pdf'/>
      </div>
    </section>
  );
}

ContactMe.propTypes = {
  id: PropTypes.string.isRequired
}

export default ContactMe;