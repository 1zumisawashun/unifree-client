import { Panel } from "@/components/elements/Panel";
import styles from "./styles.module.scss";

export const ErrorFetch: React.FC = () => {
  return (
    <div className={styles["center-wrapper"]}>
      <div className={styles["center-inner"]}>
        <Panel theme="danger">
          <h3 className="font-bold">Error while fetching data.</h3>
          <span className="block sm:inline">
            Something seriously bad happened.
          </span>
        </Panel>
      </div>
    </div>
  );
};
