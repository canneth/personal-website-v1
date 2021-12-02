
import styles from './LoadingSpinner.module.css';

function LoadingSpinner(props) {
  return (
    <svg
      width={201}
      height={201}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g className={styles.whole} stroke="#000" strokeWidth={4}>
        <path className={`${styles.c} ${styles.face}`} id="c" d="M123.5 67.1601C116.967 62.6447 109.042 60 100.5 60C78.1325 60 60 78.1325 60 100.5C60 122.868 78.1325 141 100.5 141C109.559 141 117.924 138.026 124.67 133" />
        <path className={`${styles.a3} ${styles.face}`} id="a-3" d="M100.315 100.5H136.22" />
        <path className={`${styles.a2} ${styles.face}`} id="a-2" d="M129.23 129.045C136.505 121.724 141 111.637 141 100.5C141 89.2692 136.429 79.1062 129.045 71.7699L127.5 70.5" />
        <path className={`${styles.a1} ${styles.face}`} id="a-1" d="M129.045 71.7699L100.315 100.5C90.2854 110.53 84.6621 116.153 74.6323 126.183" />
        <path className={styles.brackets} id="brackets" d="M49.25 69.567L55.6201 73.2448C50.7849 81.1896 48 90.5196 48 100.5C48 109.814 50.4252 118.561 54.6785 126.144L48.75 129.567M153.173 129.567L146.546 125.741C150.66 118.251 153 109.649 153 100.5C153 90.6846 150.306 81.4984 145.618 73.6401L152.673 69.567" />
      </g>
    </svg>
  );
}

export default LoadingSpinner;