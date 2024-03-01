import { UnstyledButtonAnchor } from "@/components/buttons";
import { Table } from "@/components/elements/Table";
import "server-only";
import styles from "./styles.module.scss";

const BLOCK_NAME = "table";

type Row = {
  id: number;
  title: string;
  annotation: string;
  href: string;
};

export function MypageMatch({ rows }: { rows: Row[] }) {
  return (
    <Table
      rows={rows}
      render={(row) => (
        <tr className={styles[`${BLOCK_NAME}-row`]}>
          <td className={styles[`${BLOCK_NAME}-data`]}>
            <UnstyledButtonAnchor href={row.href}>
              <p className={styles[`${BLOCK_NAME}-name`]}>{row.title}</p>
              <p className={styles[`${BLOCK_NAME}-annotation`]}>
                {row.annotation}
              </p>
            </UnstyledButtonAnchor>
          </td>
        </tr>
      )}
    />
  );
}
