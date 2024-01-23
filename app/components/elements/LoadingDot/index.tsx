import styles from "./styles.module.scss";

const BLOCK_NAME = "loading-dot";

export const LoadingDot: React.FC = () => {
  return (
    <div className={styles[`${BLOCK_NAME}-wrapper`]}>
      <div className={styles[`${BLOCK_NAME}-1`]}></div>
      <div className={styles[`${BLOCK_NAME}-2`]}></div>
      <div className={styles[`${BLOCK_NAME}-1`]}></div>
    </div>
  );
};
