import styles from "./styles.module.scss";

const BLOCK_NAME = "login-container";

export function LoginContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles[`${BLOCK_NAME}`]}>{children}</div>;
}
