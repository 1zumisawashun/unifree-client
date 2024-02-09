import { LinkableTable } from "@/components/elements/Table";
import styles from "./styles.module.scss";

const BLOCK_NAME = "table";

type Row = {
  id: number;
  title: string;
  annotation: string;
  href: string;
};

export function MatchList({ rows }: { rows: Row[] }) {
  return (
    <LinkableTable
      rows={rows}
      render={(row) => {
        return (
          <tr className={styles[`${BLOCK_NAME}-row`]}>
            <td className={styles[`${BLOCK_NAME}-data`]}>
              <p className={styles[`${BLOCK_NAME}-name`]}>{row.title}</p>
              <p className={styles[`${BLOCK_NAME}-annotation`]}>
                {row.annotation}
              </p>
            </td>
          </tr>
        );
      }}
    />
  );
}
