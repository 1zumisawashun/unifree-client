import styles from "./styles.module.scss";

const BLOCK_NAME = "center";

export function LayoutCenter({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles[`${BLOCK_NAME}-wrapper`]}>
      <div className={styles[`${BLOCK_NAME}-inner`]}>{children}</div>
    </div>
  );
}
