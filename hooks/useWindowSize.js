
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      const { innerWidth, innerHeight } = window;
      setWindowWidth(innerWidth);
      setWindowHeight(innerHeight);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize) };
  }, []);

  return { windowWidth, windowHeight };
}

export default useWindowSize;