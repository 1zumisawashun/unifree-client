"use client";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
// import { getOffset } from "../DropdownMenu/hooks/getOffset";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  triggerRef: React.RefObject<HTMLElement>;
};

type Rect = { width: number; height: number };

const initRect = { width: 0, height: 0 };

const BLOCK_NAME = "tool-tip";
const position = "bottomRight";

const List: React.FC<Props> = ({ children, triggerRef }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const [triggerRect, setTriggerRect] = useState<Rect>(initRect);
  const [targetRect, setTargetRect] = useState<Rect>(initRect);

  // マウスが乗ったらツールチップを表示
  const handleMouseEnter = useCallback(() => {
    if (!targetRef.current) return;
    targetRef.current.style.opacity = "1";
    targetRef.current.style.visibility = "visible";
  }, []);

  // マウスが離れたらツールチップを非表示
  const handleMouseLeave = useCallback(() => {
    if (!targetRef.current) return;
    targetRef.current.style.opacity = "0";
    targetRef.current.style.visibility = "hidden";
  }, []);

  useEffect(() => {
    const trigger = triggerRef.current;
    trigger?.addEventListener("mouseenter", handleMouseEnter);
    trigger?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      trigger?.removeEventListener("mouseenter", handleMouseEnter);
      trigger?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [triggerRef, handleMouseEnter, handleMouseLeave]);

  // Triggerの縦横幅を取得
  useEffect(() => {
    if (!triggerRef.current) return;

    const { height, width } = triggerRef.current.getBoundingClientRect();
    setTriggerRect({ height, width });
  }, [triggerRef]);

  // Targetの縦幅を取得
  useEffect(() => {
    if (!targetRef.current) return;

    const { height, width } = targetRef.current.getBoundingClientRect();
    setTargetRect({ height, width });
  }, [targetRef]);

  return (
    <div
      className={clsx(
        styles[`${BLOCK_NAME}`],
        styles[`${BLOCK_NAME}-${position}`]
      )}
      ref={targetRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // style={getOffset({ triggerRect, targetRect, position })}
      style={{
        top: triggerRect.height + targetRect.height,
        left: triggerRect.width + targetRect.width,
      }}
    >
      {children}
    </div>
  );
};

const Frame = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles[`${BLOCK_NAME}-wrapper`]}>{children}</div>;
};

export const Tooltip = {
  Frame,
  List,
};
