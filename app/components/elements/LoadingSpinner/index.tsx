import styles from "./styles.module.scss";

export const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles["loading-with-overlay"]}>
      <div className={styles["loading-with-overlay-wrapper"]}>
        <span className={styles["loading"]} />
      </div>
    </div>
  );
};
