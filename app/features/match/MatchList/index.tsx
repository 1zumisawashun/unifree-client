import { LinkableTable } from "@/components/elements/Table";
import styles from "./styles.module.scss";

const BLOCK_NAME = "table";

const rows = [
  {
    id: 1,
    name: "shunshunshun",
    age: 26,
    annotation: "testtesttest",
    href: "/",
  },
  {
    id: 1,
    name: "shunshunshun",
    age: 26,
    annotation: "testtesttest",
    href: "/",
  },
];
export function MatchList() {
  return (
    <div>
      <LinkableTable
        rows={rows}
        render={(row) => {
          return (
            <tr className={styles[`${BLOCK_NAME}-row`]}>
              <td className={styles[`${BLOCK_NAME}-data`]}>
                <p className={styles[`${BLOCK_NAME}-name`]}>{row.name}</p>
                <p className={styles[`${BLOCK_NAME}-annotation`]}>
                  {row.annotation}
                </p>
              </td>
            </tr>
          );
        }}
      />
    </div>
  );
}
