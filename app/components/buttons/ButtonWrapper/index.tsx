import styles from "./styles.module.scss";

type ButtonWrapperProps = {
  children: React.ReactNode;
  position?: string;
  direction?: string;
};

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  children,
  position,
  direction,
}) => {
  return (
    <div
      className={styles["button-wrapper"]}
      data-position={position}
      data-direction={direction}
    >
      {children}
    </div>
  );
};
