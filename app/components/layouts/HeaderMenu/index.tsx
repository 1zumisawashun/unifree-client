"use client";

import { Button, UnstyledButton } from "@/components/buttons";
import { Avatar } from "@/components/elements/Avatar";
import { profileRoutes } from "@/functions/helpers/getRoutes";
import { useDisclosure } from "@/functions/hooks/useDisclosure";
import { useRouter } from "next/navigation";
import { ElementRef, useRef } from "react";
import { DropDownMenu } from "../../elements/DropDownMenu";
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

  const dropDownMenu = useDisclosure();
  const router = useRouter();

  return (
    <>
      <UnstyledButton onClick={dropDownMenu.toggle} ref={referenceRef}>
        <Avatar id={userId} />
      </UnstyledButton>
      <DropDownMenu
        onClose={dropDownMenu.close}
        open={dropDownMenu.isOpen}
        referenceRef={referenceRef}
        rows={routes}
        render={(route) => (
          <Button
            variant="transparent"
            shape="square"
            className={styles[`${BLOCK_NAME}-anchor-button`]}
            onClick={() => {
              // NOTE:router.pushはprefetchが効かないが許容範囲なのでそのまま使う
              router.push(route.href), dropDownMenu.close();
            }}
          >
            {route.value}
          </Button>
        )}
      />
    </>
  );
};
