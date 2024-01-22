import { SizeType, ThemeType, VariantType } from "@/functions/types/Common";
import styles from "./styles.module.scss";

type CircularProgressProps = {
  size: SizeType;
  theme: ThemeType;
  variant: VariantType;
};
export const CircularProgress = ({
  size,
  theme,
  variant,
}: CircularProgressProps) => {
  return (
    <span
      className={styles["module"]}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
    />
  );
};
