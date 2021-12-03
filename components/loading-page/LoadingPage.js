
import { useLayoutEffect } from 'react';

import LoadingSpinnerSvg from '@/components/loading-page/LoadingSpinner';

import styles from './LoadingPage.module.css';

function LoadingPage() {
  useLayoutEffect(() => {
    const layoutElement = document.getElementById('layout-container');
    layoutElement.classList.add('hidden');
    setTimeout(() => {
      layoutElement.classList.remove('hidden');
      const loadingPage = document.getElementById('loading-page');
      loadingPage.style.display = 'none';
    }, 2500);
  }, []);

  return (
    <div id='loading-page' className={styles.page}>
      <LoadingSpinnerSvg />
    </div>
  );
}

export default LoadingPage;
