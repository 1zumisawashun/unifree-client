import { ThemeType } from "@/functions/types/Common";
import styles from "./styles.module.scss";

export type LabelProps = { children: React.ReactNode; theme?: ThemeType };

export const Label = ({ children, theme = "primary" }: LabelProps) => {
  return (
    <span className={styles["label"]} data-theme={theme}>
      {children}
    </span>
  );
};
