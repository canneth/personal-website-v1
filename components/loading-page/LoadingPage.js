
import { useEffect, useRef } from 'react';
import LoadingSpinnerSvg from '@/components/loading-page/LoadingSpinner';
import styles from './LoadingPage.module.css';

function LoadingPage() {

  const selfRef = useRef();

  useEffect(() => {
    const layoutElement = document.getElementById('layout-container');
    layoutElement.classList.add('hidden');
    setTimeout(() => {
      layoutElement.classList.remove('hidden');
      selfRef.current.style.display = 'none';
    }, 2500);
  }, []);

  return (
    <div ref={selfRef} className={styles.page}>
      <LoadingSpinnerSvg />
    </div>
  );
}

export default LoadingPage;
