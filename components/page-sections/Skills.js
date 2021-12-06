
import SectionTitle from '@/components/common/SectionTitle';
import TechItem from '@/components/common/TechItem';
import useHiddenRef from '@/hooks/useHiddenRef';
import styles from './Skills.module.css';

function Skills() {

  const frontendRef = useHiddenRef(styles);
  const backendRef = useHiddenRef(styles);
  const fullstackRef = useHiddenRef(styles);
  const testingRef = useHiddenRef(styles);
  const verControlRef = useHiddenRef(styles);
  const designRef = useHiddenRef(styles);

  return (
    <section className={styles.overallContainer}>
      <SectionTitle titleOffsetFromLeft={0.5} className={styles.sectionTitle}>
        Some Technologies I Work With
      </SectionTitle>
      <div className={styles.contentContainer}>
        <div ref={frontendRef} className={styles.categoryContainer}>
          <p className={styles.listHeader}>Frontend</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='react' iconWidthExpression='28px' /></li>
            <li className={styles.listItem}><TechItem for='redux' iconWidthExpression='28px' /></li>
          </ol>
        </div>
        <div ref={backendRef} className={styles.categoryContainer}>
          <p className={styles.listHeader}>Backend</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='nodejs' iconWidthExpression='28px' /></li>
            <li className={styles.listItem}><TechItem for='postgresql' iconWidthExpression='28px' /></li>
          </ol>
        </div>
        <div ref={fullstackRef} className={styles.categoryContainer}>
          <p className={styles.listHeader}>Fullstack</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='nextjs' iconWidthExpression='28px' /></li>
          </ol>
        </div>
        <div ref={testingRef} className={styles.categoryContainer}>
          <p className={styles.listHeader}>Testing</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='jest' iconWidthExpression='28px' /></li>
            <li className={styles.listItem}><TechItem for='testingLibrary' iconWidthExpression='28px' /></li>
          </ol>
        </div>
        <div ref={verControlRef} className={styles.categoryContainer}>
          <p className={styles.listHeader}>Version Control</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='git' iconWidthExpression='28px' /></li>
            <li className={styles.listItem}><TechItem for='gitHub' iconWidthExpression='28px' /></li>
          </ol>
        </div>
        <div ref={designRef} className={styles.categoryContainer}>
          <p className={styles.listHeader}>Design</p>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='figma' iconWidthExpression='28px' /></li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Skills;