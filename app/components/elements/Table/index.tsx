import { UnstyledButtonAnchor } from "@/components/buttons";
import styles from "./styles.module.scss";

const BLOCK_NAME = "table";

export const Table = <T extends { id: number | string }>(props: {
  rows: T[];
  render: React.FC<T>;
}) => {
  return (
    <table className={styles[`${BLOCK_NAME}`]}>
      <tbody className={styles[`${BLOCK_NAME}-body`]}>
        {props.rows.map((row) => (
          <props.render {...row} key={row.id} />
        ))}
      </tbody>
    </table>
  );
};

export const LinkableTable = <
  T extends { id: number | string; href: string }
>(props: {
  rows: T[];
  render: React.FC<T>;
}) => {
  return (
    <table className={styles[`${BLOCK_NAME}`]}>
      <tbody className={styles[`${BLOCK_NAME}-body`]}>
        {props.rows.map((row) => (
          <UnstyledButtonAnchor href={row.href} key={row.id}>
            <props.render {...row} />
          </UnstyledButtonAnchor>
        ))}
      </tbody>
    </table>
  );
};
