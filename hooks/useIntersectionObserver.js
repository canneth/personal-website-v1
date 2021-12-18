
import { useEffect, useRef } from 'react';

let observer = null;

function useIntersectionObserver(styles, animateInDuration = 0) {
  const selfRef = useRef();

  useEffect(() => {
    selfRef.current.classList.add(styles.hidden);
  }, [styles]);

  useEffect(() => {
    selfRef.current.dataset.hiddenClass = styles.hidden;
    selfRef.current.dataset.animateClass = styles.animate;
    selfRef.current.dataset.interactableClass = styles.interactable;
    selfRef.current.dataset.animateInDuration = animateInDuration;

    function handleIntersect(entries, observer) {
      const entry = entries[0];
      if (!entry.isIntersecting) return;
      const currentElement = entry.target;
      observer.unobserve(currentElement);
      const hiddenClass = currentElement.dataset.hiddenClass;
      const animateClass = currentElement.dataset.animateClass;
      const interactableClass = currentElement.dataset.interactableClass;
      const animateInDuration = currentElement.dataset.animateInDuration;
      currentElement.classList.remove(hiddenClass);
      currentElement.classList.add(animateClass);
      setTimeout(() => {
        currentElement.classList.add(interactableClass);
        if (animateInDuration) currentElement.classList.remove(animateClass);
      }, animateInDuration ? animateInDuration : 0);
      console.log(observer);
    }

    if (!observer) {
        observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: `0px 0px -40% 0px`,
        threshold: 0
      });
    }
    observer.observe(selfRef.current); // Register element to intersectionObserver.
  }, [styles, animateInDuration]);

  return selfRef;
}

export default useIntersectionObserver;