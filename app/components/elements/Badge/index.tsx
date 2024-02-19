"use client";

import {
  autoUpdate,
  computePosition,
  offset,
  Placement,
} from "@floating-ui/dom";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

type BadgeProps = {
  children: React.ReactNode;
  placement?: Placement;
  referenceRef: React.RefObject<HTMLButtonElement>;
};

export const BLOCK_NAME = "badge";

export function Badge({
  children,
  placement = "bottom-end",
  referenceRef,
}: BadgeProps) {
  const floatingRef = useRef<HTMLElement>(null);

  /**
   * openの挙動を監視するのはuseEffect的には良くないので解決策があれば変更する
   * @see https://floating-ui.com/docs/computePosition
   * @see https://floating-ui.com/docs/offset#offset
   */
  useEffect(() => {
    const referenceEl = referenceRef.current!;
    const floatingEl = floatingRef.current!;

    const cleanup = autoUpdate(referenceEl, floatingEl, async () => {
      const { x, y } = await computePosition(referenceEl, floatingEl, {
        placement,
        middleware: [offset(0)],
      });

      Object.assign(floatingEl.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });

    return () => cleanup();
  }, [referenceRef, floatingRef, placement]);

  return (
    <div className={styles[`${BLOCK_NAME}-flame`]} role="menu">
      {children}
      <span ref={floatingRef} className={styles[`${BLOCK_NAME}`]}>
        ⚫︎
      </span>
    </div>
  );
}
