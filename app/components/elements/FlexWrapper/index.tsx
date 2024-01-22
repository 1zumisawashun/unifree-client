import styles from "./styles.module.scss";

type FlexWrapperProps = {
  children: React.ReactNode;
  position?: string;
  direction?: string;
};

export const FlexWrapper: React.FC<FlexWrapperProps> = ({
  children,
  position,
  direction,
}) => {
  return (
    <div
      className={styles["flex-wrapper"]}
      data-position={position}
      data-direction={direction}
    >
      {children}
    </div>
  );
};
