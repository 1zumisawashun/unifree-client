"use client";

import { Button, UnstyledButton } from "@/components/buttons";
import { Avatar } from "@/components/elements/Avatar";
import { DropDownMenu } from "@/components/elements/DropdownMenu";
import { profileRoutes } from "@/functions/helpers/getRoutes";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "profile-menu";

export const ProfileMenu = ({
  userId,
  isAuthenticated,
}: {
  userId?: number;
  isAuthenticated: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const routes = profileRoutes({ isAuthenticated });
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <DropDownMenu.Frame>
      <UnstyledButton
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        ref={triggerRef}
      >
        <Avatar id={userId} />
      </UnstyledButton>
      <DropDownMenu.List
        onClose={() => setOpen(false)}
        open={open}
        position="bottomRight"
        triggerRef={triggerRef}
      >
        {routes.map((route) => (
          <li className={styles[`${BLOCK_NAME}-item`]} key={route.value}>
            <Button
              variant="transparent"
              shape="square"
              className={styles[`${BLOCK_NAME}-anchor-button`]}
              onClick={() => handleClick(route.href)}
            >
              {route.value}
            </Button>
          </li>
        ))}
      </DropDownMenu.List>
    </DropDownMenu.Frame>
  );
};
