import { ElementRef, useEffect, useRef } from "react";

export function useAutoResize(value: string | undefined) {
  const ref = useRef<ElementRef<"textarea">>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const { borderBottomWidth } = getComputedStyle(element);

    element.style.height = "auto";
    // element.style.height = `calc(${element.scrollHeight}px + ${paddingTop} + ${paddingBottom} + ${borderTopWidth} + ${borderBottomWidth})`
    element.style.height = `calc(${element.scrollHeight}px + ${borderBottomWidth})`;
  }, [value]);

  return ref;
}
