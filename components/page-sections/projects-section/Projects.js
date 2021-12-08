
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
          A simple app that helps you decide on a local place to go
          for the times when you just feel like getting out of the house
          but have no specific location in mind.
        </ProjectCard>
      </div>
    </section>
  );
}

      export default Projects;