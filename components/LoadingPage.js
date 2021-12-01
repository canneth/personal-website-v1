
import Image from 'next/image';

import LoadingSpinner from '@/components/LoadingSpinner';

import styles from './LoadingPage.module.css';

function LoadingPage() {
  return (
    <div className={styles.page}>
      <LoadingSpinner />
    </div>
  );
}

export default LoadingPage;
