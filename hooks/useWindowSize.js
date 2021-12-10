
import { useState, useEffect } from 'react';

function useWindowSize() {
  /*
    DESCRIPTION:
      Returns an object containing the width and height of the viewport.

    PARAMETERS: None.
              
    RETURNS:
      * { windowWidth, windowHeight } : An object.
  */

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      const { innerWidth: newWidth, innerHeight: newHeight } = window;
      setWindowWidth(newWidth);
      setWindowHeight(newHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowWidth, windowHeight };
}

export default useWindowSize;