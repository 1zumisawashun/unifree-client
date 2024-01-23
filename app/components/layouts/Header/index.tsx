import { UnstyledButtonAnchor } from "@/components/buttons";
import { NextJsIcon } from "@/components/elements/SvgIcon";
import { ProfileMenu } from "@/components/layouts/ProfileMenu";
import styles from "./styles.module.scss";

import "server-only";

const BLOCK_NAME = "header";

export function Header() {
  return (
    <header className={styles[`${BLOCK_NAME}`]}>
      <UnstyledButtonAnchor
        href="/"
        className={styles[`${BLOCK_NAME}-link`]}
        aria-label="logo"
      >
        <NextJsIcon />
        unifree-client
      </UnstyledButtonAnchor>

      <ProfileMenu />
    </header>
  );
}
