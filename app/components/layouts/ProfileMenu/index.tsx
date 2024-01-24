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

const publicRoutes = [{ href: "/books", value: "Books" }];

const authRoutes = [
  { href: "/books/create", value: "Create" },
  { href: "/mypage/profile", value: "Mypage" },
];

const commonRoutes = [
  { href: "/tos", value: "Terms of Service" },
  { href: "/faq", value: "FAQ" },
];

const margeRoutes = [...publicRoutes, ...authRoutes, ...commonRoutes];

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
        {margeRoutes.map((route) => (
          <li className={styles[`${BLOCK_NAME}-item`]} key={route.value}>
            <ButtonAnchor
              href={route.href}
              variant="transparent"
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
