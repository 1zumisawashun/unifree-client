"use client";

import { Button, UnstyledButton } from "@/components/buttons";
import { Avatar } from "@/components/elements/Avatar";
import { DropDownMenu } from "@/components/elements/DropdownMenu";
import { profileRoutes } from "@/functions/helpers/getRoutes";
import { useDisclosure } from "@/functions/hooks/useDisclosure";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "profile-menu";

export const HeaderMenu = ({
  userId,
  isAuthenticated,
}: {
  userId?: number;
  isAuthenticated: boolean;
}) => {
  const referenceRef = useRef<HTMLButtonElement>(null);

  const routes = profileRoutes({ isAuthenticated });

  const { push } = useRouter();
  const { isOpen, close, toggle } = useDisclosure();

  return (
    <DropDownMenu.Frame>
      <UnstyledButton onClick={toggle} ref={referenceRef}>
        <Avatar id={userId} />
      </UnstyledButton>
      <DropDownMenu.List
        onClose={close}
        open={isOpen}
        referenceRef={referenceRef}
        rows={routes}
        render={(route) => (
          <Button
            variant="transparent"
            shape="square"
            className={styles[`${BLOCK_NAME}-anchor-button`]}
            onClick={() => {
              push(route.href), close();
            }}
          >
            {route.value}
          </Button>
        )}
      />
    </DropDownMenu.Frame>
  );
};
