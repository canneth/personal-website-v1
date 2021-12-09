
import PropTypes from 'prop-types';
import DevStatusBadge from '@/components/common/DevStatusBadge';
import Button from '@/components/common/Button';
import TechItem from '@/components/common/TechItem';
import FramedGraphicRectangularType1 from '@/components/common/FramedGraphicRectangularType1';
import useAnimateInRef from '@/hooks/useAnimateInRef';
import styles from './ProjectCardType1.module.css';

function ProjectCardType1(props) {

  const selfRef = useAnimateInRef(styles);

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <FramedGraphicRectangularType1
        imgSrc='/landscape.jpg'
        imgAlt='Poster of the landing page of the JustGo web app'
        className={styles.graphic}
      />
      <div className={styles.contentContainer}>
        <header className={styles.headerContainer}>
          <h1 className={styles.title}>{props.title}</h1>
          <DevStatusBadge status={props.devStatus} className={styles.devStatusBadge} />
        </header>
        <p className={styles.text}>
          {props.children}
        </p>
        <div className={styles.linkButtonsContainer}>
          <Button for='github' small>GitHub</Button>
          <Button for='extlink' small>Try It!</Button>
        </div>
        <div className={styles.techContainer}>
          <h1 className={styles.techHeader}>Technologies</h1>
          <ol className={styles.techList}>
            {
              props.techList.map((techItem, i) => (
                <li key={i} className={styles.techListItem}>
                  <TechItem for={techItem} iconWidthExpression='clamp(24px, 5vw, 30px)' noLabel/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    </div>
  );
}

ProjectCardType1.propTypes = {
  title: PropTypes.string.isRequired,
  devStatus: PropTypes.string.isRequired,
  techList: PropTypes.array.isRequired,
  forMobile: PropTypes.bool,
  className: PropTypes.string
}

export default ProjectCardType1;