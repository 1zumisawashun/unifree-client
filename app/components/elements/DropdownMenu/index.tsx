"use client";

import { useAnimationEnd } from "@/functions/hooks/useAnimationEnd";
import { useOuterClick } from "@/functions/hooks/useOuterClick";
import {
  autoUpdate,
  computePosition,
  offset,
  Placement,
} from "@floating-ui/dom";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

type ListProps<T> = {
  onClose: () => void;
  open: boolean;
  placement?: Placement;
  referenceRef: React.RefObject<HTMLButtonElement>;
  rows: T[];
  render: React.FC<T>;
};

export const BLOCK_NAME = "dropdown-menu";

const FADE_IN_ANIMATION = "fade-in";

function List<T extends { id: number | string }>({
  onClose,
  open,
  placement = "bottom-end",
  referenceRef,
  ...props
}: ListProps<T>) {
  const floatingRef = useRef<HTMLUListElement>(null);

  const [fadeOut, setFadeOut] = useState(false);

  useOuterClick([floatingRef, referenceRef], () => {
    if (!open) return;
    setFadeOut(true);
  });

  /**
   * open=true:fade-inアニメーションが終わったらスルーする
   * open=false:fade-outアニメーションが終わったら実行する
   */
  useAnimationEnd(floatingRef, (e) => {
    if (e.animationName.includes(FADE_IN_ANIMATION)) return;
    setFadeOut(false);
    onClose();
  });

  /**
   * openの挙動を監視するのはuseEffect的には良くないので解決策があれば変更する
   * @see https://floating-ui.com/docs/computePosition
   * @see https://floating-ui.com/docs/offset#offset
   */
  useEffect(() => {
    if (!open) return;

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
  }, [referenceRef, floatingRef, open, placement]);

  if (!open) return null;

  return (
    <ul
      className={styles[`${BLOCK_NAME}`]}
      data-is-fade-out={fadeOut}
      ref={floatingRef}
      role="menu"
    >
      {props.rows.map((row) => (
        <li key={row.id}>
          <props.render {...row} />
        </li>
      ))}
    </ul>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return <div className={styles[`${BLOCK_NAME}-flame`]}>{children}</div>;
}

export const DropDownMenu = {
  Frame,
  List,
};
