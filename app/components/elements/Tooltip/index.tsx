"use client";

import { useTooltip } from "@/components/elements/Tooltip/hooks/useTooltip";
import { useAnimationEnd } from "@/functions/hooks/useAnimationEnd";
import {
  Placement,
  autoUpdate,
  computePosition,
  offset,
} from "@floating-ui/dom";
import {
  ElementRef,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./styles.module.scss";

type TooltipProps = {
  children: ReactNode;
  placement?: Placement;
  referenceRef: RefObject<ElementRef<"div" | "button">>;
};

const BLOCK_NAME = "tool-tip";

const FADE_IN_ANIMATION = "fade-in";

export function Tooltip({ children, placement, referenceRef }: TooltipProps) {
  const floatingRef = useRef<ElementRef<"div">>(null);

  const [fadeOut, setFadeOut] = useState(false);

  useTooltip(referenceRef, floatingRef, (value) => setFadeOut(value));

  useAnimationEnd(floatingRef, (e) => {
    if (e.animationName.includes(FADE_IN_ANIMATION)) return;
    setFadeOut(false);
  });

  useEffect(() => {
    const referenceEl = referenceRef.current!;
    const floatingEl = floatingRef.current!;

    const cleanup = autoUpdate(referenceEl, floatingEl, async () => {
      const { x, y } = await computePosition(referenceEl, floatingEl, {
        placement,
        middleware: [offset(8)],
      });

      Object.assign(floatingEl.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });

    return () => cleanup();
  }, [referenceRef, floatingRef, placement]);

  return (
    <div
      className={styles[`${BLOCK_NAME}`]}
      data-is-fade-out={fadeOut}
      ref={floatingRef}
      role="tooltip"
    >
      {children}
    </div>
  );
}
