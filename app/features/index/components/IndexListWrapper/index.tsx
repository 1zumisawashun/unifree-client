import { UnstyledButtonAnchor } from "@/components/buttons";
import "server-only";
import styles from "./styles.module.scss";

type IndexListWrapperProps = {
  children: React.ReactNode;
  href: string;
  title: string;
};

const BLOCK_NAME = "index-list-wrapper";

export const IndexListWrapper: React.FC<IndexListWrapperProps> = ({
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
