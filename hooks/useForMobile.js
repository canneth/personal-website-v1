
import { useEffect } from 'react';
import useWindowSize from "@/hooks/useWindowSize";

function useForMobile(breakpoint) {
  /*
    DESCRIPTION:
      Returns a selfRef object that, when used by a component, will set its forMobile attribute
      to true when the viewport's width is equal to and smaller than breakpoint, and false when
      it is greater than breakpoint.

      This is used to toggle between the browser and mobile versions of components when the
      viewport is resized.

    PARAMETERS:
      * breakpoint: A number; The width, in px, at which the breakpoint should be.

    RETURNS:
      * selfRef : An object; The returned object from the useRef() hook.
  */

  const selfRef = useRef();

  const { windowWidth } = useWindowSize();

  useEffect(() => {
    self.current.setAttribute('forMobile', windowWidth <= breakpoint);
  }, [windowWidth, breakpoint]);

  return selfRef;
}

export default useForMobile;