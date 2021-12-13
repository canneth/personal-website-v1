
import PropTypes from 'prop-types';
import useAnimateInRef from '@/hooks/useAnimateInRef';
import SectionTitle from '@/components/common/SectionTitle';
import CircularStyle1 from '@/components/framed-graphics/CircularStyle1';
import CircularStyle2 from '@/components/framed-graphics/CircularStyle2';
import styles from './AboutMe.module.css';

function AboutMe(props) {

  const selfRef = useAnimateInRef(styles);
  const firstTextBlock = useAnimateInRef(styles);
  const secondTextBlock = useAnimateInRef(styles);

  return (
    <section ref={selfRef} id={props.id} className={styles.overallContainer}>
      <SectionTitle className={styles.sectionTitle}>
        Hello!
      </SectionTitle>
      <div className={styles.contentContainer}>
        <div className={`${styles.firstContentBlockContainer} ${styles.contentBlockContainer}`}>
          <p ref={firstTextBlock} className={`${styles.text} ${styles.firstTextBlock}`}>
            I'm Canneth, a self-taught developer who's just beginning his journey in the exciting world of web development.
            <br /><br />
            When I was just a young, starry-eyed kid, I came to love this gem of a pixel-art platformer called Cave Story,
            which incidentally led to my first ever foray into programming. Having had the fortune of joining a devoted,
            fun-loving community centered around reverse-engineering and modifying this game, it was during my time there
            that I fell into a rabbit hole of hexadecimal offsets, assembly instructions, event scripting and pixel art.
            It was here that I discovered my love for art, problem solving, and sharing the joys of both with others.
            <br /><br />
            Kindling that initial spark from such a long time ago, I have since found my passion in fullstack development--a
            field in which I can do what I love for a living.
          </p>
          <div className={styles.spacer} />
          <CircularStyle1 className={styles.graphic} imgSrc='/posters/about-section/profile-pic.jpg' imgAlt='Profile picture' />
        </div>
        <div className={`${styles.secondContentBlockContainer} ${styles.contentBlockContainer}`}>
          <CircularStyle2 className={styles.graphic} imgSrc='/posters/about-section/skateboarding-pic.jpg' imgAlt='Me performing a skateboard ollie' />
          <div className={styles.spacer} />
          <p ref={secondTextBlock} className={`${styles.text} ${styles.secondTextBlock}`}>
            There's more to life than just a career. Activity and the great outdoors revitalise me. I'm on my skateboard
            almost everywhere I go, and I dabble in parkour from time to time. I also enjoy reading about psychology and philosophy,
            and listening to podcasts on Roman and medieval history. Spending time alone with my thoughts is a natural hobby of mine,
            but nothing can replace a shared experience with quality company.
            <br /><br />
            And there's more to a career than just slogging for salary. A major reason fullstack development appeals to me is in the
            meaningful everyday opportunities it presents. Problem solving is a core life skill, and honing this faculty for a living
            enriches the way I navigate my life. Its design component also allows me a space to express myself in the things I craft. The
            collaborative nature of the work exposes me to new ideas that challenge my preconceptions and broaden my horizons. To be able
            to enjoy these benefits makes fullstack development a fulfilling discipline indeed.
          </p>
        </div>
      </div>
    </section>
  );
}

AboutMe.propTypes = {
  id: PropTypes.string.isRequired
};

export default AboutMe;