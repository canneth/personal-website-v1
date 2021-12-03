
import { useEffect } from 'react';

import LoadingSpinnerSvg from '@/components/LoadingSpinnerSvg';

import styles from './LoadingPage.module.css';

function LoadingPage() {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 2500)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div id='loading-page 'className={styles.page}>
      <LoadingSpinnerSvg />
    </div>
  );
}

export default LoadingPage;
