import { ButtonAnchor, UnstyledButtonAnchor } from "@/components/buttons";
import { NextJsIcon } from "@/components/elements/SvgIcon";
import { ProfileMenu } from "@/components/layouts/ProfileMenu";
import "server-only";
import { getRoutes } from "./hooks/getRoutes";
import styles from "./styles.module.scss";

const BLOCK_NAME = "header";

export async function Header() {
  const { headerRoutes, profileRoutes } = await getRoutes();

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
        {headerRoutes.map((route) => (
          <ButtonAnchor
            key={route.value}
            href={route.href}
            variant="transparent"
          >
            {route.value}
          </ButtonAnchor>
        ))}

        <ProfileMenu routes={profileRoutes} />
      </div>
    </header>
  );
}
