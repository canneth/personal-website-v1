
import PropTypes from 'prop-types';

function AboutMeFrame1Svg(props) {
  return (
    <svg
      className={props.className}
      width={382}
      height={316}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={301.243}
        cy={45.997}
        r={19.396}
        stroke="#D05630"
        strokeWidth={1.108}
      />
      <circle cx={159.928} cy={146.303} r={146.303} fill="#555" />
      <circle
        cx={281.847}
        cy={216.129}
        r={97.535}
        stroke="#763626"
        strokeWidth={4.433}
      />
      <circle cx={30.5} cy={245.5} r={29.5} stroke="#F37249" strokeWidth={2} />
    </svg>
  );
}

AboutMeFrame1Svg.propTypes = {
  className: PropTypes.string
};

export default AboutMeFrame1Svg;