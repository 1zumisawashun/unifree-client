"use client";
import { UnstyledButtonAnchor } from "@/components/buttons";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";

type Item = {
  text: string;
  href: string;
};

type TabProps = {
  items: Item[];
};

export const Tab: React.FC<TabProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <nav className={styles["nav"]}>
      {items.map((item) => (
        <UnstyledButtonAnchor
          key={item.href}
          href={item.href}
          aria-selected={pathname === item.href}
          className={styles["nav-item"]}
        >
          {item.text}
        </UnstyledButtonAnchor>
      ))}
    </nav>
  );
};
