
import { useEffect, useRef } from 'react';
import useScroll from "@/hooks/useScroll";
import useWindowSize from "@/hooks/useWindowSize";

function useHiddenRef(styles) {
  /*
    DESCRIPTION:

      Returns a selfRef object that, when used by a component, will:
      1) add a styles.hidden class which is removed from the component when it is scrolled 90%
        of the way from below into the viewport, and
      2) add a styles.animate class which can be used to trigger animations only after they have
        entered the viewport.

      This is used for CSS animations that trigger on the component when it is scrolled into
      the viewport.

    PARAMETERS:
      * styles: A string; The imported CSS module of the component. This is necessary to apply
                the correct corresponding class to the component.

    RETURNS:
      * selfRef : An object; The returned object from the useRef() hook.

  */
  const { scrollY } = useScroll();
  const { windowHeight } = useWindowSize();
  const selfRef = useRef();


  useEffect(() => {
    selfRef.current.classList.add(styles.hidden);
  }, [styles]);

  useEffect(() => {
    const { y: posFromTopOfWindow } = selfRef.current.getBoundingClientRect();
    console.log(posFromTopOfWindow);
    if (scrollY > 0 && posFromTopOfWindow < 0.9 * windowHeight) {
      selfRef.current.classList.remove(styles.hidden);
    }
    selfRef.current.classList.add(styles.animate);
  }, [scrollY, windowHeight, styles]);

  return selfRef;
}

export default useHiddenRef;