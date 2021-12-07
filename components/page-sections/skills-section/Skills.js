
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
          <h1 className={styles.listHeader}>Frontend</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='react' iconWidthExpression='clamp(28px, 2.5vw, 42px)' /></li>
            <li className={styles.listItem}><TechItem for='redux' iconWidthExpression='clamp(28px, 2.5vw, 42px)' /></li>
          </ol>
        </div>
        <div ref={backendRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Backend</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='nodejs' iconWidthExpression='clamp(28px, 2.5vw, 42px)' /></li>
            <li className={styles.listItem}><TechItem for='postgresql' iconWidthExpression='clamp(28px, 2.5vw, 42px)' /></li>
          </ol>
        </div>
        <div ref={fullstackRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Fullstack</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='nextjs' iconWidthExpression='clamp(28px, 2.5vw, 42px)' /></li>
          </ol>
        </div>
        <div ref={testingRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Testing</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='jest' iconWidthExpression='clamp(28px, 2.5vw, 42px)' /></li>
            <li className={styles.listItem}><TechItem for='testingLibrary' iconWidthExpression='clamp(28px, 2.5vw, 42px)' /></li>
          </ol>
        </div>
        <div ref={verControlRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Version Control</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='git' iconWidthExpression='clamp(28px, 2.5vw, 42px)' /></li>
            <li className={styles.listItem}><TechItem for='gitHub' iconWidthExpression='clamp(28px, 2.5vw, 42px)' /></li>
          </ol>
        </div>
        <div ref={designRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Design</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='figma' iconWidthExpression='clamp(28px, 2.5vw, 42px)' /></li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Skills;