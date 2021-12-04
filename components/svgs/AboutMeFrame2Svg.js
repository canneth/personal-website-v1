
import PropTypes from 'prop-types';

function AboutMeFrame2Svg(props) {
  return (
    <svg
      className={props.className}
      width={351}
      height={353}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={21.668}
        cy={160.552}
        r={12}
        transform="rotate(180 21.668 160.552)"
        stroke="#D05630"
      />
      <circle
        r={20}
        transform="matrix(-1 0 0 1 21.133 241.583)"
        stroke="#D05630"
      />
      <circle r={150} transform="matrix(-1 0 0 1 191 163.476)" fill="#555" />
      <circle
        r={45}
        transform="matrix(-1 0 0 1 111.788 305.807)"
        stroke="#763626"
        strokeWidth={4}
      />
      <circle
        r={28}
        transform="matrix(-1 0 0 1 322 29)"
        stroke="#F37249"
        strokeWidth={2}
      />
    </svg>
  );
}

AboutMeFrame2Svg.propTypes = {
  className: PropTypes.string
};

export default AboutMeFrame2Svg;