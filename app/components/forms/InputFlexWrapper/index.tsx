import { DirectionType } from "@/functions/types/Common";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  direction?: DirectionType;
  hasBorder?: boolean;
  error?: string;
};

const BLOCK_NAME = "input-flex-wrapper";

// checkbox, radiobutton, toggleで使用する
export const InputFlexWrapper: React.FC<Props> = ({
  children,
  direction = "row",
  hasBorder = false,
  error,
}) => {
  return (
    <div
      className={styles[`${BLOCK_NAME}`]}
      data-direction={direction}
      data-border={hasBorder}
      data-error={!!error}
    >
      {children}
    </div>
  );
};
