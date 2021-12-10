
import PropTypes from 'prop-types';
import SectionTitle from '@/components/common/SectionTitle';
import TechItem from '@/components/common/TechItem';
import useAnimateInRef from '@/hooks/useAnimateInRef';
import styles from './Skills.module.css';

function Skills(props) {

  const frontendRef = useAnimateInRef(styles);
  const backendRef = useAnimateInRef(styles);
  const fullstackRef = useAnimateInRef(styles);
  const testingRef = useAnimateInRef(styles);
  const verControlRef = useAnimateInRef(styles);
  const designRef = useAnimateInRef(styles);

  return (
    <section id={props.id} className={styles.overallContainer}>
      <SectionTitle className={styles.sectionTitle}>
        In My Toolbox
      </SectionTitle>
      <div className={styles.contentContainer}>
        <div ref={frontendRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Frontend</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='react' iconWidthExpression='clamp(22px, 5vw, 30px)' /></li>
            <li className={styles.listItem}><TechItem for='redux' iconWidthExpression='clamp(22px, 5vw, 30px)' /></li>
          </ol>
        </div>
        <div ref={backendRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Backend</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='nodejs' iconWidthExpression='clamp(22px, 5vw, 30px)' /></li>
            <li className={styles.listItem}><TechItem for='postgresql' iconWidthExpression='clamp(22px, 5vw, 30px)' /></li>
          </ol>
        </div>
        <div ref={fullstackRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Fullstack</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='nextjs' iconWidthExpression='clamp(22px, 5vw, 30px)' /></li>
          </ol>
        </div>
        <div ref={testingRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Testing</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='jest' iconWidthExpression='clamp(22px, 5vw, 30px)' /></li>
            <li className={styles.listItem}><TechItem for='testingLibrary' iconWidthExpression='clamp(22px, 5vw, 30px)' /></li>
          </ol>
        </div>
        <div ref={verControlRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Version Control</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='git' iconWidthExpression='clamp(22px, 5vw, 30px)' /></li>
            <li className={styles.listItem}><TechItem for='gitHub' iconWidthExpression='clamp(22px, 5vw, 30px)' /></li>
          </ol>
        </div>
        <div ref={designRef} className={styles.categoryContainer}>
          <h1 className={styles.listHeader}>Design</h1>
          <ol className={styles.list}>
            <li className={styles.listItem}><TechItem for='figma' iconWidthExpression='clamp(22px, 5vw, 30px)' /></li>
          </ol>
        </div>
      </div>
    </section>
  )
}

Skills.propTypes = {
  id: PropTypes.string.isRequired
}

export default Skills;