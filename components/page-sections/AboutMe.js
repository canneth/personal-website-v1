
import Image from 'next/image';
import useHiddenRef from '@/hooks/useHiddenRef';
import SectionTitle from '@/components/common/SectionTitle';
import FramedGraphicCircularType1 from '@/components/common/FramedGraphicCircularType1';
import AboutMeFrame2Svg from '@/components/svgs/ImageFrameCircularType2';
import styles from './AboutMe.module.css';

function AboutMe() {

  const sectionTitleRef = useHiddenRef(styles);
  const firstTextBlock = useHiddenRef(styles);
  const secondTextBlock = useHiddenRef(styles);

  return (
    <section
      ref={sectionTitleRef}
      className={styles.sectionContainer}
    >
      <SectionTitle className={styles.sectionTitle} titleOffsetFromLeft={0.5}>
        Hello!
      </SectionTitle>
      <div className={`${styles.firstContentBlockContainer} ${styles.contentBlockContainer}`}>
        <p ref={firstTextBlock} className={`${styles.text} ${styles.firstTextBlock}`}>
          Hi, I’m Canneth, a self-taught developer who’s just beginning his journey in the exciting world of web development.
          <br /><br />
          When I was just a young, starry-eyed kid, I came to love this gem of a pixel-art platformer called Cave Story.
          The game is a masterpiece, but what truly blew my mind was that the entire work is the creation of just one single
          person! It was this unlikely childhood hero of mine that inspired in me a desire to create beautiful things for the
          enjoyment of all.
          <br /><br />
          This led to my first ever foray into programming. Having had the fortune of joining a devoted, fun-loving community
          centered around reverse-engineering and modifying this game, it was during my time there that I fell into a (rather
          pleasant) rabbit hole of hexadecimal offsets, assembly instructions, event scripting and pixel art. It was here that
          I discovered my love for art, problem solving, and sharing the joys of both with others.
          <br /><br />
          Kindling that initial spark from such a long time ago, I have since found my passion in fullstack development--a
          field in which I can do what I love for a constructive purpose.
        </p>
        <div className={styles.spacer} />
        <FramedGraphicCircularType1 imgSrc='/mountain.jpg' imgAlt='Profile picture' />
      </div>
      <div className={`${styles.secondContentBlockContainer} ${styles.contentBlockContainer}`}>
        <div className={styles.graphicContainer}>
          <div className={styles.imageContainer}>
            <Image
              src='/mountain.jpg'
              alt='image'
              width={300}
              height={300}
              priority
            />
          </div>
          <AboutMeFrame2Svg className={styles.frameSvg} moduleStyles={styles} />
        </div>
        <div className={styles.spacer} />
        <p ref={secondTextBlock} className={`${styles.text} ${styles.secondTextBlock}`}>
          There’s more to life than just a career. Physical activity and the great outdoors revitalise me. I’m on my skateboard
          almost everywhere I go, and I dabble in parkour from time to time. I also enjoy reading about psychology and philosophy,
          and listening to podcasts on Roman and medieval history. Spending time alone with my thoughts is a natural hobby of mine,
          but nothing can replace a shared experience with quality company.
          <br /><br />
          And there’s more to a career than just slogging for salary. A major reason fullstack development appeals to me is in the
          meaningful everyday opportunities it presents. Problem solving is a core life skill, and honing this faculty for a living
          enriches and informs the way I navigate my life. Its design aspect also allows me a space to express myself in the things
          I craft. The collaborative nature of the work exposes me to new ideas that challenge my preconceptions and broaden my horizons.
          Cap it off with the meaningful cause of addressing real-world needs, and it’s not difficult to see fullstack development
          as a fulfilling pursuit.
        </p>
        
      </div>
    </section>
  );
}

export default AboutMe;