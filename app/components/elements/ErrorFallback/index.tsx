import { Panel } from "@/components/elements/Panel";
import styles from "./styles.module.scss";

const BLOCK_NAME = "error-fallback";

export const ErrorFetch: React.FC = () => {
  return (
    <Panel theme="danger">
      <h3 className={styles[`${BLOCK_NAME}-title`]}>
        Error while fetching data.
      </h3>
      <p>Something seriously bad happened.</p>
    </Panel>
  );
};

export const ErrorEmpty: React.FC = () => {
  return (
    <Panel theme="danger">
      <h3 className={styles[`${BLOCK_NAME}-title`]}>No data.</h3>
      <p>Something seriously bad happened.</p>
    </Panel>
  );
};
