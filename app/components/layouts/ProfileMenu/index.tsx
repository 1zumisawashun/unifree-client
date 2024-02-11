"use client";

import { ButtonAnchor, UnstyledButton } from "@/components/buttons";
import { Avatar } from "@/components/elements/Avatar";
import { DropDownMenu } from "@/components/elements/DropdownMenu";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "profile-menu";

type Props = {
  routes: {
    href: string;
    value: string;
  }[];
};

export const ProfileMenu: React.FC<Props> = ({ routes }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <DropDownMenu.Frame>
      <UnstyledButton onClick={onClick} ref={triggerRef}>
        <Avatar src="https://avatar.iran.liara.run/public/boy?username=Ash" />
      </UnstyledButton>
      <DropDownMenu.List
        onClose={onClose}
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
