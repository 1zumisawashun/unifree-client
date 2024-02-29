"use client";

import { ButtonAnchor, UnstyledButton } from "@/components/buttons";
import { Avatar } from "@/components/elements/Avatar";
import { DropDownMenu } from "@/components/elements/DropdownMenu";
import { profileRoutes } from "@/functions/helpers/getRoutes";
import { useDisclosure } from "@/functions/hooks/useDisclosure";
import { ElementRef, useRef } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "profile-menu";

export const HeaderMenu = ({
  userId,
  isAuthenticated,
}: {
  userId?: number;
  isAuthenticated: boolean;
}) => {
  const referenceRef = useRef<ElementRef<"button">>(null);

  const routes = profileRoutes({ isAuthenticated });

  const { isOpen, close, toggle } = useDisclosure();

  return (
    <>
      <UnstyledButton onClick={toggle} ref={referenceRef}>
        <Avatar id={userId} />
      </UnstyledButton>
      <DropDownMenu
        onClose={close}
        open={isOpen}
        referenceRef={referenceRef}
        rows={routes}
        render={(route) => (
          <ButtonAnchor
            variant="transparent"
            shape="square"
            className={styles[`${BLOCK_NAME}-anchor-button`]}
            href={route.href}
          >
            {route.value}
          </ButtonAnchor>
        )}
      />
    </>
  );
};
