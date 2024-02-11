import { useEffect, useRef } from "react";

export function useScrollToLatest() {
  const ref = useRef<HTMLDivElement>(null);

  const scrollToLatest = () => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  };

  useEffect(() => {
    scrollToLatest();
  }, []);

  return { ref };
}
