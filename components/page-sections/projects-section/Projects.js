
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from './ProjectCard.js';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={styles.overallContainer}>
      <SectionTitle titleOffsetFromLeft={0.5} className={styles.sectionTitle}>
        My Works
      </SectionTitle>
      <div className={styles.contentContainer}>
        <ProjectCard
          title={`JustGo!`}
          devStatus='in-progress'
          techList={['nextjs', 'redux']}
        >
          {`Ever felt like getting out of the house,
          but can't decide where to go? This app helps
          you find that perfect spot.`}
        </ProjectCard>
        <ProjectCard
          title={`Personal Site v1`}
          devStatus='complete'
          techList={['nextjs', 'redux']}
        >
          {`First ever feeble attempts at HTML, CSS
          and JS. The cracks show, but we all start
          somewhere!`}
        </ProjectCard>
      </div>
    </section>
  );
}

      export default Projects;