import { DirectionType, PositionType } from "@/functions/types/Common";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  position?: PositionType;
  direction?: DirectionType;
};

const BLOCK_NAME = "button-wrapper";

export const ButtonWrapper: React.FC<Props> = ({
  children,
  position = "start",
  direction = "row",
}) => {
  return (
    <div
      className={styles[`${BLOCK_NAME}`]}
      data-position={position}
      data-direction={direction}
    >
      {children}
    </div>
  );
};
