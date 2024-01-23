"use client";

import cover from "@/assets/images/image-cover.jpg";
import { ButtonAnchor, UnstyledButton } from "@/components/buttons";
import { Avatar } from "@/components/elements/Avatar";
import { DropDownMenu } from "@/components/elements/DropdownMenu";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";

const avatarParams = {
  src: cover,
  alt: "",
  blurredDataUrl: undefined,
  width: undefined,
  height: undefined,
};

const items = [
  { href: "/books", value: "Books" },
  { href: "/books/create", value: "Create" },
  { href: "/mypage", value: "Mypage" },
  { href: "/login", value: "Login" },
];

const BLOCK_NAME = "profile-menu";

export const ProfileMenu = () => {
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
      <UnstyledButton
        onClick={onClick}
        ref={triggerRef}
        className={styles[`${BLOCK_NAME}-trigger-button`]}
      >
        <Avatar {...avatarParams}></Avatar>
      </UnstyledButton>
      <DropDownMenu.List
        onClose={onClose}
        open={open}
        position="bottomRight"
        triggerRef={triggerRef}
      >
        {items.map((item) => (
          <li className={styles[`${BLOCK_NAME}-item`]} key={item.value}>
            <ButtonAnchor
              href={item.href}
              variant="transparent"
              className={styles[`${BLOCK_NAME}-anchor-button`]}
            >
              {item.value}
            </ButtonAnchor>
          </li>
        ))}
      </DropDownMenu.List>
    </DropDownMenu.Frame>
  );
};
