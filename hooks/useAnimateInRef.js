
import { useEffect, useRef } from 'react';

function useAnimateInRef(styles, animateInDuration) {
  /*
    DESCRIPTION:
      Returns a selfRef object that, when used by a component, will:
      1) add a styles.hidden class which is removed from the component when it is scrolled 90%
        of the way from below into the viewport, and
      2) add a styles.animate class only after they have entered the viewport in the above-mentioned
        fashion which can be used to trigger animations, and
      3) add a styles.interactable class and remove the styles.animate class after the specified
        animateInDuration has passed after first entering the viewport in the above-mentioned fashion.

      This is used for CSS animations that trigger on the component when it is scrolled into
      the viewport, and to only enable interaction after the entry animation has finished.

    PARAMETERS:
      * styles:
          An object; The imported CSS module of the component. This is necessary to apply
          the correct corresponding class to the component.
      * animateInDelay:
          A number; The number of milliseconds before the styles.interactable class is added
          to the component. If not provided, styles.animate will not be removed, and styles.interactable
          will not be added to the component.
                

    RETURNS:
      * selfRef : An object; The returned object from the useRef() hook.
  */

  const selfRef = useRef();

  useEffect(() => {
    selfRef.current.classList.add(styles.hidden);
  }, [styles]);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const { innerHeight: windowHeight } = window;
      const { y: posFromTopOfWindow } = selfRef.current.getBoundingClientRect();
      if (scrollY > 0 && posFromTopOfWindow < 0.9 * windowHeight) {
        if (selfRef.current.classList.contains(styles.hidden)) {
          selfRef.current.classList.remove(styles.hidden);
          selfRef.current.classList.add(styles.animate);
          setTimeout(() => {
            selfRef.current.classList.add(styles.interactable);
            if (animateInDuration) selfRef.current.classList.remove(styles.animate);
          }, animateInDuration ? animateInDuration : 0);
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateInDuration, styles]);

  return selfRef;
}

export default useAnimateInRef;