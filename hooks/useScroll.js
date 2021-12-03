
import { useState, useEffect } from 'react';

function useScroll() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollXDirection, setScrollXDirection] = useState(0);
  const [scrollYDirection, setScrollYDirection] = useState(0);

  function normalise(x) {
    return x ? (x / Math.abs(x)) : 0;
  }
  
  useEffect(() => {
    function handleScroll() {
      const newScrollX = window.scrollX;
      const newScrollY = window.scrollY;
      setScrollXDirection(normalise(newScrollX - scrollX));
      setScrollYDirection(normalise(newScrollY - scrollY));
      setScrollX(newScrollX);
      setScrollY(newScrollY);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll) };
  }, [scrollX, scrollY]);

  return (
    {
      scrollX: scrollX,
      scrollY: scrollY,
      scrollXDirection: scrollXDirection,
      scrollYDirection: scrollYDirection
    }
  );
}

export default useScroll;