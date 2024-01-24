"use client";

import { Button } from "@/components/buttons";
import styles from "./styles.module.scss";

const BLOCK_NAME = "footer";

export function FixedFooter() {
  return (
    <footer className={styles[`${BLOCK_NAME}`]}>
      <Button onClick={() => alert("cart demo")}>カートに入れる</Button>
    </footer>
  );
}
