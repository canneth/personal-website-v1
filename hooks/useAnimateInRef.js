
import { useEffect, useRef } from 'react';

function useAnimateInRef(styles, { triggerProportionFromTop = 0.6, animateInDuration = undefined } = {}) {
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
      * triggerProportionFromTop:
          A number; Between 0 and 1, this is the vertical proportion of the screen into which
          the component must enter to trigger the entry animation.
      * animateInDuration:
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
    let updated = false;
    let prevTimestamp = 0;
    const timeInterval = 50; // In ms.
    function updateScrollPosition(currTimestamp) {
      updated = false;
      const elapsedTime = currTimestamp - prevTimestamp;
      if (elapsedTime < timeInterval) return;
      prevTimestamp = currTimestamp;
      console.log('Updated!');
      const scrollY = window.scrollY;
      const { innerHeight: windowHeight } = window;
      const { y: posFromTopOfWindow } = selfRef.current.getBoundingClientRect();
      if (scrollY > 0 && posFromTopOfWindow < triggerProportionFromTop * windowHeight) {
        if (selfRef.current.classList.contains(styles.hidden)) {
          window.removeEventListener('scroll', handleScroll);
          selfRef.current.classList.remove(styles.hidden);
          selfRef.current.classList.add(styles.animate);
          setTimeout(() => {
            selfRef.current.classList.add(styles.interactable);
            if (animateInDuration) selfRef.current.classList.remove(styles.animate);
          }, animateInDuration ? animateInDuration : 0);
        }
      }
    }
    function handleScroll() {
      if (!updated) {
        window.requestAnimationFrame(updateScrollPosition);
        updated = true;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerProportionFromTop, animateInDuration, styles]);

  return selfRef;
}

export default useAnimateInRef;