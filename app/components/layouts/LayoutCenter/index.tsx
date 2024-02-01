import styles from "./styles.module.scss";

const BLOCK_NAME = "center";

export function LayoutCenter({
  children,
  background,
}: {
  children: React.ReactNode;
  background?: "index";
}) {
  return (
    <div
      className={styles[`${BLOCK_NAME}-wrapper`]}
      data-background={background}
    >
      <div className={styles[`${BLOCK_NAME}-inner`]}>{children}</div>
    </div>
  );
}
