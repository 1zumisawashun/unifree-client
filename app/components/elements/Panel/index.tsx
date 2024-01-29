import { ThemeType } from "@/functions/types/Common";
import clsx from "clsx";
import styles from "./styles.module.scss";

type PanelProps = {
  children: React.ReactNode;
  theme?: ThemeType;
  scrollable?: boolean;
  hasBorder?: boolean;
  className?: string;
};

export function Panel({
  children,
  theme = "transparent",
  scrollable = false,
  hasBorder = false,
  className,
}: PanelProps) {
  return (
    <div
      className={clsx(styles["panel-wrapper"], className)}
      data-theme={theme}
      data-scroll={scrollable}
      data-border={hasBorder}
    >
      <div className={styles["panel-inner"]}>{children}</div>
    </div>
  );
}

