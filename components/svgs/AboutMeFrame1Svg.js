
import PropTypes from 'prop-types';

function AboutMeFrame1Svg(props) {
  const styles = props.moduleStyles;
  return (
    <svg
      className={props.className}
      width={420}
      height={360}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        className={styles['circle-1']}
        cx={322}
        cy={70}
        r={20}
        stroke="#D05630"
        strokeWidth={1}
      />
      <circle
        className={styles['circle-main']}
        cx={180}
        cy={170}
        r={145}
        fill="#555"
      />
      <circle
        className={styles['circle-2']}
        cx={300}
        cy={240}
        r={98}
        stroke="#763626"
        strokeWidth={4}
      />
      <circle 
        className={styles['circle-3']}
        cx={50}
        cy={270}
        r={30}
        stroke="#F37249"
        strokeWidth={2}
      />
    </svg>
  );
}

AboutMeFrame1Svg.propTypes = {
  moduleStyles: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default AboutMeFrame1Svg;