
import { useState, useEffect } from 'react';
import LoadingSpinnerSvg from '@/components/loading-page/LoadingSpinner';
import styles from './LoadingPage.module.css';

function LoadingPage() {

  const [exists, setExists] = useState(true);

  useEffect(() => {
    const layoutElement = document.getElementById('layout-container');
    setTimeout(() => {
      layoutElement.classList.remove('hidden');
      setExists(false);
    }, 2500);
  }, []);

  if (!exists) return null;
  
  return (
    <div className={styles.page}>
      <LoadingSpinnerSvg />
    </div>
  );
}

export default LoadingPage;
