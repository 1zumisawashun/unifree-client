"use client";

import { ButtonAnchor, UnstyledButton } from "@/components/buttons";
import { Avatar } from "@/components/elements/Avatar";
import { DropDownMenu } from "@/components/elements/DropdownMenu";
import { profileRoutes } from "@/functions/helpers/getRoutes";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "profile-menu";

export const ProfileMenu = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);

  const routes = profileRoutes({ isAuthenticated });

  return (
    <DropDownMenu.Frame>
      <UnstyledButton
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        ref={triggerRef}
      >
        <Avatar src="https://avatar.iran.liara.run/public/boy?username=Ash" />
      </UnstyledButton>
      <DropDownMenu.List
        onClose={() => setOpen(false)}
        open={open}
        position="bottomRight"
        triggerRef={triggerRef}
      >
        {routes.map((route) => (
          <li className={styles[`${BLOCK_NAME}-item`]} key={route.value}>
            <ButtonAnchor
              href={route.href}
              variant="transparent"
              shape="square"
              className={styles[`${BLOCK_NAME}-anchor-button`]}
            >
              {route.value}
            </ButtonAnchor>
          </li>
        ))}
      </DropDownMenu.List>
    </DropDownMenu.Frame>
  );
};
