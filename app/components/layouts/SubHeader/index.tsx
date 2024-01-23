import { UnstyledButtonAnchor } from "@/components/buttons";
import "server-only";
import styles from "./styles.module.scss";

type SubHeaderProps = {
  children: React.ReactNode;
  href?: string;
  title?: string;
};

const BLOCK_NAME = "sub-header";

export const SubHeader: React.FC<SubHeaderProps> = ({
  children,
  href,
  title,
}) => {
  return (
    <section>
      {href ? (
        <UnstyledButtonAnchor
          href={href}
          className={styles[`${BLOCK_NAME}-back-button`]}
        >
          ← back
        </UnstyledButtonAnchor>
      ) : null}
      {title ? (
        <h2 className={styles[`${BLOCK_NAME}-title`]}>{title}</h2>
      ) : null}
      {children}
    </section>
  );
};
