import styles from "./styles.module.scss";

type BadgeProps = {
  children: React.ReactNode;
  count: number;
};

export const BLOCK_NAME = "badge";

export function Badge({ children, count = 0 }: BadgeProps) {
  return count ? (
    <div className={styles[`${BLOCK_NAME}-flame`]} role="menu">
      {children}
      <div className={styles[`${BLOCK_NAME}`]}>
        <span className={styles[`${BLOCK_NAME}-count`]}>{count}</span>
      </div>
    </div>
  ) : (
    children
  );
}
