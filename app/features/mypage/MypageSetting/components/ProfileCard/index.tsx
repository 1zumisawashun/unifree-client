"use client";

import { Button } from "@/components/buttons";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import type { Session } from "next-auth";
import styles from "./styles.module.scss";

const BLOCK_NAME = "profile-card";

const university = "駒沢大学";
const faculty = "経済学部";
const department = "経済学科";

/* eslint-disable @next/next/no-img-element */
export function ProfileCard({
  dialog,
  user,
}: {
  dialog: UseDialog;
  user?: Session["user"];
}) {
  const college = `${university} ${faculty} ${department}`;
  const username = user?.name ?? "匿名太郎";
  const detail = `出品数: ${0} 購入数: ${0}`;

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <div className={styles[`${BLOCK_NAME}-flex-wrapper`]}>
        <img
          src={user?.image ?? undefined}
          className={styles[`${BLOCK_NAME}-avatar`]}
          alt={`${BLOCK_NAME}-avatar`}
        />
        <div className={styles[`${BLOCK_NAME}-flex-column-wrapper`]}>
          <p className={styles[`${BLOCK_NAME}-name`]}>{username}</p>
          <p className={styles[`${BLOCK_NAME}-text`]}>{college}</p>
          <p className={styles[`${BLOCK_NAME}-text`]}>{detail}</p>
        </div>
      </div>
      <Button onClick={dialog.open} variant="outlined">
        変更する
      </Button>
    </div>
  );
}
