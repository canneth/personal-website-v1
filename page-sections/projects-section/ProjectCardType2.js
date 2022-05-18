
import PropTypes from 'prop-types';
import DevStatusBadge from '@/page-sections/projects-section/DevStatusBadge';
import Button from '@/components/common/Button';
import TechItem from '@/components/common/TechItem';
import RectangularStyle2 from '@/components/framed-graphics/RectangularStyle2';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './ProjectCardType2.module.css';

function ProjectCardType2(props) {

  const selfRef = useIntersectionObserver(styles);

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <div className={styles.contentContainer}>
        <header className={styles.headerContainer}>
          <h1 className={styles.title}>{props.title}</h1>
          <DevStatusBadge status={props.devStatus} className={styles.devStatusBadge} />
        </header>
        <p className={styles.text}>
          {props.children}
        </p>
        <div className={styles.linkButtonsContainer}>
          {props.buttonList.map((buttonItem, i) => (
            <Button key={i} icon={buttonItem.icon} text={buttonItem.text} link={buttonItem.link} small />
          ))}
        </div>
        <div className={styles.techContainer}>
          <h1 className={styles.techHeader}>Technologies</h1>
          <ol className={styles.techList}>
            {
              props.techList.map((techItem, i) => (
                <li key={i} className={styles.techListItem}>
                  <TechItem for={techItem} iconWidthExpression='clamp(24px, 5vw, 30px)' noLabel />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
      <RectangularStyle2
        imgSrc={props.posterSrc}
        imgAlt={props.posterAlt}
        className={styles.graphic}
      />
    </div>
  );
}

ProjectCardType2.propTypes = {
  title: PropTypes.string.isRequired,
  devStatus: PropTypes.string.isRequired,
  techList: PropTypes.array.isRequired,
  forMobile: PropTypes.bool,
  className: PropTypes.string
}

export default ProjectCardType2;