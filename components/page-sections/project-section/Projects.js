
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from './ProjectCard.js';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={styles.overallContainer}>
      <SectionTitle titleOffsetFromLeft={0.5} className={styles.sectionTitle}>
        {`Some Of My Works`}
      </SectionTitle>
      <div className={styles.contentContainer}>
        <ProjectCard title={`JustGo!`}>
          I AM A PROJECT CARD AND THIS IS MY DESCRIPTION!!
        </ProjectCard>
      </div>
    </section>
      );
}

      export default Projects;