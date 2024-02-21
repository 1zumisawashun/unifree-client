import { IconButtonAnchor, UnstyledButtonAnchor } from "@/components/buttons";
import { Badge } from "@/components/elements/Badge";
import { NextJsIcon } from "@/components/elements/SvgIcon";
import { HeaderMenu } from "@/components/layouts/HeaderMenu";
import { auth } from "@/functions/helpers/nextAuth/server";
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
            <Badge count={1}>
              <IconButtonAnchor
                name="shopping-cart"
                href={"/cart"}
                variant="outlined"
              />
            </Badge>
            <Badge count={0}>
              <IconButtonAnchor
                name="bell"
                href={"/mypage/match"}
                variant="outlined"
              />
            </Badge>
          </>
        )}

        <HeaderMenu isAuthenticated={isAuthenticated} userId={userId} />
      </div>
    </header>
  );
}
