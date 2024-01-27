import { LabelButtonAnchor, UnstyledButtonAnchor } from "@/components/buttons";
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
        <LabelButtonAnchor href={href}>{title}</LabelButtonAnchor>
        <UnstyledButtonAnchor
          href={href}
          className={styles[`${BLOCK_NAME}-link`]}
        >
          show more...
        </UnstyledButtonAnchor>
      </div>
      {children}
    </section>
  );
};
