
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
      switch (true) {
        case (newScrollY === 0 && scrollYDirection !== 0): { setScrollYDirection(0); break; }
        case (newScrollY > oldScrollY && scrollYDirection !== 1): { setScrollYDirection(1); break; }
        case (newScrollY < oldScrollY && scrollYDirection !== -1): { setScrollYDirection(-1); break; }
      }
      oldScrollY = newScrollY;
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
  }, [scrollYDirection]);

  return scrollYDirection;
}

export default useScrollYDirection;