

import LoadingSpinnerSvg from '@/components/LoadingSpinnerSvg';

import styles from './LoadingPage.module.css';

function LoadingPage() {
  return (
    <div className={styles.page}>
      <LoadingSpinnerSvg />
    </div>
  );
}

export default LoadingPage;
