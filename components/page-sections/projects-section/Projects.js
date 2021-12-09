
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCardType1 from './ProjectCardType1.js';
import ProjectCardType2 from './ProjectCardType2.js';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={styles.overallContainer}>
      <SectionTitle titleOffsetFromLeft={0.5} className={styles.sectionTitle}>
        My Works
      </SectionTitle>
      <div className={styles.contentContainer}>
        <ProjectCardType1
          title={`JustGo!`}
          devStatus='in-progress'
          techList={['nextjs', 'redux', 'nodejs', 'postgresql']}
        >
          {`Ever felt like getting out of the house,
          but can't decide where to go? This app helps
          you find that perfect spot.`}
        </ProjectCardType1>
        <ProjectCardType2
          title={`Personal Site v1`}
          devStatus='complete'
          techList={['html5', 'css3', 'js']}
        >
          {`First ever feeble attempts at HTML, CSS
          and JS. The cracks show, but we all start
          somewhere!`}
        </ProjectCardType2>
      </div>
    </section>
  );
}

      export default Projects;