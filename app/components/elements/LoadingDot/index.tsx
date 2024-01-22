import styles from "./styles.module.scss";

export const LoadingDot: React.FC = () => {
  return (
    <div className={styles["loading-wrapper"]}>
      <div className={styles["loading-1"]}></div>
      <div className={styles["loading-2"]}></div>
      <div className={styles["loading-1"]}></div>
    </div>
  );
};

