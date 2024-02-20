"use client";

import { RefObject, useCallback, useEffect } from "react";

export const useTooltip = (
  referenceRef: RefObject<HTMLElement>,
  floatingRef: RefObject<HTMLElement>,
  cb: (value: boolean) => void
) => {
  // マウスが乗ったらツールチップを表示
  const showTooltip = useCallback(() => {
    const floatingEl = floatingRef.current!;
    floatingEl.style.display = "block";

    cb(false);
  }, [floatingRef, cb]);

  // マウスが離れたらツールチップを非表示
  const hideTooltip = useCallback(() => {
    const floatingEl = floatingRef.current!;
    floatingEl.style.display = "none";

    cb(true);
  }, [floatingRef, cb]);

  useEffect(() => {
    const referenceEl = referenceRef.current!;

    (
      [
        ["mouseenter", showTooltip],
        ["mouseleave", hideTooltip],
        ["focus", showTooltip],
        ["blur", hideTooltip],
      ] as const
    ).forEach(([event, listener]) => {
      referenceEl.addEventListener(event, listener);
    });
    return () => {
      (
        [
          ["mouseenter", showTooltip],
          ["mouseleave", hideTooltip],
          ["focus", showTooltip],
          ["blur", hideTooltip],
        ] as const
      ).forEach(([event, listener]) => {
        referenceEl.removeEventListener(event, listener);
      });
    };
  }, [referenceRef, showTooltip, hideTooltip]);
};
