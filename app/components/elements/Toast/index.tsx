"use client";
import { StackPosition } from "@/functions/types/Common";
import clsx from "clsx";
import { useState } from "react";
import { Toast as ToastType } from "@/components/elements/ToastProvider";
// import { IconButton } from "../../buttons/IconButton";
import styles from "./styles.module.scss";

type ToastProps = {
  isShow: Boolean;
  toast: ToastType;
  position?: StackPosition;
  closeToast: () => void;
  focusEvent: {
    setIsShowWithTimeout: () => void;
    resetTimeout: () => void;
  };
};

export const BLOCK_NAME = "toast";

export const Toast: React.FC<ToastProps> = ({
  isShow,
  toast: { message = "これはテストこれはテスト", theme = "success" },
  position = "topCenter",
  // closeToast,
  focusEvent: { resetTimeout, setIsShowWithTimeout },
}) => {
  const [clientHeight, setClientHeight] = useState(0);

  const style = {
    ["--Toast--initial-height" as string]: `${clientHeight}px`,
    ["--Toast--order-offset-top" as string]: `${clientHeight / 2}px`,
    ["--Toast--order-offset-bottom" as string]: `${-clientHeight / 2}px`,
    ["--Toast--offset-top" as string]: `${clientHeight}px`,
    ["--Toast--offset-bottom" as string]: `${clientHeight}px`,
  };

  return (
    <div
      className={clsx(
        styles[`${BLOCK_NAME}`],
        isShow && styles[`${BLOCK_NAME}--slide`],
        isShow && styles[`${BLOCK_NAME}-slide--in`],
        !isShow && styles[`${BLOCK_NAME}-slide--out`]
      )}
      style={style}
      data-position={position}
      onTransitionEnd={() => null}
      ref={(ref) => setClientHeight(ref?.clientHeight || 0)}
    >
      <div
        className={styles[`${BLOCK_NAME}-content`]}
        onMouseOver={resetTimeout}
        onMouseOut={setIsShowWithTimeout}
        onFocus={resetTimeout}
        onBlur={setIsShowWithTimeout}
        data-theme={theme}
      >
        <span className={styles[`${BLOCK_NAME}-contentText`]}>{message}</span>

        {/* <IconButton name="cross" onClick={closeToast} /> */}
      </div>
    </div>
  );
};
