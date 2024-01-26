import { UnstyledButtonAnchor } from "@/components/buttons";
import "server-only";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  href: string;
  title: string;
};

const BLOCK_NAME = "index-list-wrapper";

export const IndexListWrapper: React.FC<Props> = ({
  children,
  href,
  title,
}) => {
  return (
    <section>
      <div className={styles[`${BLOCK_NAME}`]}>
        <h2 className={styles[`${BLOCK_NAME}-title`]}>{title}</h2>
        <UnstyledButtonAnchor
          href={href}
          className={styles[`${BLOCK_NAME}-link`]}
        >
          show →
        </UnstyledButtonAnchor>
      </div>
      {children}
    </section>
  );
};
