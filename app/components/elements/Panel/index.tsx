import { ThemeType } from "@/functions/types/Common";
import styles from "./styles.module.scss";

type PanelProps = {
  children: React.ReactNode;
  theme?: ThemeType;
  scrollable?: boolean;
};

export const Panel: React.FC<PanelProps> = ({
  children,
  theme = "transparent",
  scrollable = false,
}) => {
  return (
    <div className={styles["panel-wrapper"]} data-scroll={scrollable}>
      <div className={styles["panel-inner"]} data-theme={theme}>
        {children}
      </div>
    </div>
  );
};
