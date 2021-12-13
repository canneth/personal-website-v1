
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
    let updated = false;
    function updateScrollDirection() {
      const newScrollY = window.scrollY;
      if (newScrollY === 0) {
        setScrollYDirection(0);
        oldScrollY = newScrollY;
      } else {
        if (newScrollY > oldScrollY) {
          setScrollYDirection(1);
          oldScrollY = newScrollY;
        } else {
          setScrollYDirection(-1);
          oldScrollY = newScrollY;
        }
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