"use client";

import { ButtonAnchor, UnstyledButtonAnchor } from "@/components/buttons";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";

type Item = {
  value: string;
  href: string;
};

type TabProps = {
  items: Item[];
};

// 既存のボタンコンポーネントだけでタブ実装
// @/components/buttonsに移動しても良いかも
export const TabButton = ({ items }: TabProps) => {
  const pathname = usePathname();

  return (
    <nav className={styles["nav"]}>
      {items.map((item) => (
        <ButtonAnchor
          shape="round"
          size="small"
          variant={pathname === item.href ? "contained" : "outlined"}
          key={item.href}
          href={item.href}
        >
          {item.value}
        </ButtonAnchor>
      ))}
    </nav>
  );
};

// レイアウトは決めていないがこっちが期待値のタブになる
export const Tab = ({ items }: TabProps) => {
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
          {item.value}
        </UnstyledButtonAnchor>
      ))}
    </nav>
  );
};
