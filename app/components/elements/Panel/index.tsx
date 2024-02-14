import { ShapeType, ThemeType } from "@/functions/types/Common";
import clsx from "clsx";
import styles from "./styles.module.scss";

type PanelProps = {
  children: React.ReactNode;
  theme?: ThemeType;
  scrollable?: boolean;
  hasBorder?: boolean;
  className?: string;
  shape?: ShapeType;
};

const BLOCK_NAME = "panel";

const Flame = ({
  children,
  theme = "transparent",
  shape,
  scrollable = false,
  hasBorder = false,
  className,
}: PanelProps) => {
  return (
    <div
      className={clsx(styles[`${BLOCK_NAME}-flame`], className)}
      data-theme={theme}
      data-scroll={scrollable}
      data-border={hasBorder}
      data-shape={shape}
    >
      {children}
    </div>
  );
};

const Inner = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles[`${BLOCK_NAME}-inner`]}>{children}</div>;
};

const GapInner = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles[`${BLOCK_NAME}-gap-inner`]}>{children}</div>;
};

export const Panel = {
  Flame,
  Inner,
  GapInner,
};
