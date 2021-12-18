
import { useEffect, useRef } from 'react';

let observer = null;

function useIntersectionObserver(styles, animateInDuration = 0) {
  /*
    DESCRIPTION:
      Returns a selfRef object that, when used by a component, will:
      1) add a styles.hidden class which is removed from the component when it traverses at least 20%
        of the viewport from below, and
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
    selfRef.current.dataset.hiddenClass = styles.hidden;
    selfRef.current.dataset.animateClass = styles.animate;
    selfRef.current.dataset.interactableClass = styles.interactable;
    selfRef.current.dataset.animateInDuration = animateInDuration;
  }, [styles, animateInDuration]);

  useEffect(() => {
    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const currentElement = entry.target;
        observer.unobserve(currentElement);
        const hiddenClass = currentElement.dataset.hiddenClass;
        const animateClass = currentElement.dataset.animateClass;
        const interactableClass = currentElement.dataset.interactableClass;
        const animateInDuration = +currentElement.dataset.animateInDuration;
        currentElement.classList.remove(hiddenClass);
        currentElement.classList.add(animateClass);
        setTimeout(() => {
          currentElement.classList.add(interactableClass);
          if (animateInDuration) currentElement.classList.remove(animateClass);
        }, animateInDuration);
      });
    }
    if (!observer) {
        observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: `0px 0px -20% 0px`,
        threshold: 0
      });
    }
    observer.observe(selfRef.current); // Register element to intersectionObserver.
  }, []);

  return selfRef;
}

export default useIntersectionObserver;