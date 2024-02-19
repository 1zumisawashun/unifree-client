import { IconButtonAnchor, UnstyledButtonAnchor } from "@/components/buttons";
import { NextJsIcon } from "@/components/elements/SvgIcon";
import { ProfileMenu } from "@/components/layouts/ProfileMenu";
import { authOptions } from "@/functions/libs/nextAuth";
import { getServerSession } from "next-auth";
import "server-only";
import styles from "./styles.module.scss";

const BLOCK_NAME = "header";

export async function Header() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = !!session;
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
            <IconButtonAnchor
              name="shopping-cart"
              href={"/cart"}
              variant="outlined"
            />
            <IconButtonAnchor
              name="bell"
              href={"/mypage/match"}
              variant="outlined"
            />
          </>
        )}

        <ProfileMenu isAuthenticated={isAuthenticated} userId={userId} />
      </div>
    </header>
  );
}
