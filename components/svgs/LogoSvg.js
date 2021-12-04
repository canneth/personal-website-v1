
import PropTypes from 'prop-types';

function LogoSvg(props) {
  return (
    <svg
      className={props.className}
      width={109}
      height={85}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#000" strokeWidth={4}>
        <path id="c" d="M77.5 9.16008C70.9671 4.64474 63.0424 2 54.5 2C32.1325 2 14 20.1325 14 42.5C14 64.8675 32.1325 83 54.5 83C63.5593 83 71.9238 80.0256 78.6703 75" />
        <path id="a-3" d="M54.3152 42.5H90.2204" />
        <path id="a-2" d="M83.2301 71.0453C90.5049 63.7237 95 53.6368 95 42.5C95 31.2692 90.4287 21.1062 83.0453 13.7699L81.5 12.5" />
        <path id="a-1" d="M83.0453 13.7699L54.3153 42.5C44.2854 52.5298 38.6621 58.1532 28.6323 68.183" />
        <path id="brackets" d="M3.25 11.567L9.6201 15.2448C4.78494 23.1896 2 32.5196 2 42.5C2 51.8135 4.42517 60.5606 8.67847 68.1442L2.74999 71.567M107.173 71.567L100.546 67.7406C104.66 60.2509 107 51.6487 107 42.5C107 32.6846 104.306 23.4984 99.6181 15.6401L106.673 11.567" />
      </g>
    </svg>
  );
}

LogoSvg.propTypes = {
  className: PropTypes.string
};

export default LogoSvg;