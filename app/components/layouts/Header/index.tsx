import { UnstyledButtonAnchor } from "@/components/buttons";
import { NextJsIcon } from "@/components/elements/SvgIcon";
import { MessageIconButtonAnchor } from "@/components/layouts/Header/components/MessageIconButtonAnchor";
import { ShoppingCartIconButtonAnchor } from "@/components/layouts/Header/components/ShoppingCartIconButtonAnchor";
import { HeaderMenu } from "@/components/layouts/HeaderMenu";
import { auth } from "@/functions/helpers/nextAuth/server";
import env from "@/functions/libs/env";
import "server-only";
import styles from "./styles.module.scss";

const BLOCK_NAME = "header";

export async function Header() {
  const { isAuthenticated, session } = await auth();
  const userId = session?.user.id;

  return (
    <header className={styles[`${BLOCK_NAME}`]}>
      <UnstyledButtonAnchor
        href="/"
        className={styles[`${BLOCK_NAME}-link`]}
        aria-label="logo"
      >
        <NextJsIcon />
      </UnstyledButtonAnchor>

      <div className={styles[`${BLOCK_NAME}-wrapper`]}>
        {isAuthenticated && (
          <>
            {!env.isProduction && <ShoppingCartIconButtonAnchor />}
            <MessageIconButtonAnchor />
          </>
        )}

        <HeaderMenu isAuthenticated={isAuthenticated} userId={userId} />
      </div>
    </header>
  );
}
