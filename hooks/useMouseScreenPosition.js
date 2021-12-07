
import { useState, useEffect } from 'react';

function useMouseScreenPosition() {
  
  const [mouseScreenX, setMouseX] = useState(0);
  const [mouseScreenY, setMouseY] = useState(0);

  useEffect(() => {
    function handleMouseMove(event) {
      setMouseX(event.screenX);
      setMouseY(event.screenY);
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { mouseScreenX, mouseScreenY };
}

export default useMouseScreenPosition;