import styles from "./styles.module.scss";

const BLOCK_NAME = "layout-container";

export function LayoutContainer({
  children,
  hasFooter = false,
}: {
  children: React.ReactNode;
  hasFooter?: boolean;
}) {
  return (
    <>
      <main className={styles[`${BLOCK_NAME}-sp`]} data-footer={hasFooter}>
        <div className={styles[`${BLOCK_NAME}-inner`]}>{children}</div>
      </main>
    </>
  );
}
