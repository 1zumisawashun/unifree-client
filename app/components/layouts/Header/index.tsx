import { ButtonAnchor, UnstyledButtonAnchor } from "@/components/buttons";
import { NextJsIcon } from "@/components/elements/SvgIcon";
import { ProfileMenu } from "@/components/layouts/ProfileMenu";
import "server-only";
import styles from "./styles.module.scss";

const publicRoutes = [
  { href: "/login", value: "Login" },
  { href: "/cart", value: "Cart" },
];

const authRoutes = [{ href: "/cart", value: "Cart" }];

const routes = true ? publicRoutes : authRoutes;

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

      <div className={styles[`${BLOCK_NAME}-wrapper`]}>
        {routes.map((route) => (
          <ButtonAnchor
            key={route.value}
            href={route.href}
            variant="transparent"
          >
            {route.value}
          </ButtonAnchor>
        ))}

        <ProfileMenu />
      </div>
    </header>
  );
}
