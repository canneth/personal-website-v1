
import PropTypes from 'prop-types';

function ImageFrameCircularType2(props) {
  const styles = props.moduleStyles;
  return (
    <svg
      className={props.className}
      width={420}
      viewBox='0 0 420 360'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles['circle-3']}
        cx={48.5}
        cy={201.5}
        r={22.5}
        stroke="#D05630"
        strokeWidth={1.108}
      />
      <circle
        className={styles['circle-main']}
        cx={236.303}
        cy={173.303}
        r={146.303}
        fill="#555"
      />
      <circle
        className={styles['circle-1']}
        cx={140.5}
        cy={288.5}
        r={50.5}
        stroke="#763626"
        strokeWidth={4.433}
      />
      <circle
        className={styles['circle-2']}
        cx={367.5}
        cy={45.5}
        r={25.5}
        stroke="#F37249"
        strokeWidth={2}
      />
    </svg>
  );
}

ImageFrameCircularType2.propTypes = {
  moduleStyles: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default ImageFrameCircularType2;