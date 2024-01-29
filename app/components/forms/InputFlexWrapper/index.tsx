import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  direction?: "row" | "column";
  hasBorder?: boolean;
};

const BLOCK_NAME = "input-flex-wrapper";

// checkbox, radiobutton, toggleで使用する
export const InputFlexWrapper: React.FC<Props> = ({
  children,
  direction = "row",
  hasBorder = false,
}) => {
  return (
    <div
      className={styles[`${BLOCK_NAME}`]}
      data-direction={direction}
      data-border={hasBorder}
    >
      {children}
    </div>
  );
};
