
import SectionTitle from '@/components/common/SectionTitle';
import TechItem from '@/components/common/TechItem';
import styles from './Skills.module.css';

function Skills() {
  return (
    <section className={styles.overallContainer}>
      <SectionTitle titleOffsetFromLeft={0.5}>
        Some Technologies I Work With
      </SectionTitle>
      <div className={styles.contentContainer}>
        <div className={styles.categoryContainer}>
          <p className={styles.listHeader}>Frontend</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='html5' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='css3' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='js' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='react' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='redux' iconWidthExpression='36px' /></li>
          </ol>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.listHeader}>Backend</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='html5' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='css3' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='js' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='react' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='redux' iconWidthExpression='36px' /></li>
          </ol>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.listHeader}>Fullstack</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='html5' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='css3' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='js' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='react' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='redux' iconWidthExpression='36px' /></li>
          </ol>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.listHeader}>Testing</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='html5' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='css3' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='js' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='react' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='redux' iconWidthExpression='36px' /></li>
          </ol>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.listHeader}>Version Control</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='html5' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='css3' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='js' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='react' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='redux' iconWidthExpression='36px' /></li>
          </ol>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.listHeader}>Design</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='html5' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='css3' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='js' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='react' iconWidthExpression='36px' /></li>
            <li className={styles.listItem}><TechItem for='redux' iconWidthExpression='36px' /></li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Skills;