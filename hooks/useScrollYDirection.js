
import { useState, useEffect } from 'react';

function useScrollYDirection() {
  /*
    DESCRIPTION:
      Returns a number indicating the direction of scroll in the Y axis.

    PARAMETERS: None.
                
    RETURNS:
      * scrollYDirection: A number; 1 if down, -1 if up, 0 if scrollY position is at the top of the page.
  */

  const [scrollYDirection, setScrollYDirection] = useState(0);

  useEffect(() => {
    let oldScrollY = window.scrollY;
    let thresholdY = 50;
    let updated = false;
    function updateScrollDirection() {
      const newScrollY = window.scrollY;
      const diffY = newScrollY - oldScrollY;
      const normalise = x => x ? (x / Math.abs(x)) : 0;
      if (newScrollY === 0) {
        setScrollYDirection(0);
        oldScrollY = newScrollY;
      } else if (Math.abs(diffY) >= thresholdY) {
        setScrollYDirection(normalise(diffY));
        oldScrollY = newScrollY;
      }
      updated = false;
    }
    function handleScroll() {
      if (!updated) {
        window.requestAnimationFrame(updateScrollDirection);
        updated = true;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll) };
  }, []);

  return scrollYDirection;
}

export default useScrollYDirection;