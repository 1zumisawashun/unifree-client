import styles from "./styles.module.scss";

const BLOCK_NAME = "layout";

export function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={styles[`${BLOCK_NAME}-container`]}>{children}</main>
    </>
  );
}
