import { Panel } from "@/components/elements/Panel";
import styles from "./styles.module.scss";

const BLOCK_NAME = "empty-fallback";

export const EmptyFallback = () => {
  return (
    <Panel theme="primary">
      <h3 className={styles[`${BLOCK_NAME}-title`]}>No data.</h3>
      <p>Something seriously bad happened.</p>
    </Panel>
  );
};
