import { ThemeType } from "@/functions/types/Common";
import clsx from "clsx";
import styles from "./styles.module.scss";

export type LabelProps = {
  children: React.ReactNode;
  theme?: ThemeType;
  className?: string;
};

export const Label = ({
  children,
  theme = "primary",
  className,
}: LabelProps) => {
  return (
    <span className={clsx(styles["label"], className)} data-theme={theme}>
      {children}
    </span>
  );
};
