import { useCallback, useState } from "react";

import useEventListener from "./useEventListener";

export default function useMergeRefs({ ref, name }) {
  const [isHovered, setIsHover] = useState(false);

  const element = ref && ref.current;
  const setHovered = useCallback(
    event => {
      const isEventHover = event.target === element;
      setIsHover(isEventHover);
    },
    [setIsHover, element]
  );
  const setNotHovered = useCallback(() => setIsHover(false), [setIsHover]);

  useEventListener({ eventName: "mouseenter", callback: setHovered, ref });
  useEventListener({ eventName: "mouseleave", callback: setNotHovered, ref });

  return isHovered;
}
