"use client";

import { Button } from "@/components/buttons";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import type { Session } from "next-auth";
import styles from "./styles.module.scss";

const BLOCK_NAME = "profile-card";

/* eslint-disable @next/next/no-img-element */
export function ProfileCard({
  dialog,
  user,
}: {
  dialog: UseDialog;
  user?: Session["user"];
}) {
  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <div className={styles[`${BLOCK_NAME}-flex-wrapper`]}>
        <img
          src={user?.image ?? undefined}
          className={styles[`${BLOCK_NAME}-avatar`]}
          alt={`${BLOCK_NAME}-avatar`}
        />
        <div className={styles[`${BLOCK_NAME}-between-wrapper`]}>
          <div className={styles[`${BLOCK_NAME}-text-wrapper`]}>
            <p className={styles[`${BLOCK_NAME}-name`]}>
              {user?.name ?? "匿名"}
            </p>
            <div className={styles[`${BLOCK_NAME}-text-wrapper`]}>
              <p>〇〇大学</p>
              <p>〇〇学部</p>
              <p>〇〇学科</p>
            </div>
          </div>
          <div className={styles[`${BLOCK_NAME}-text-wrapper`]}>
            <p>出品数: 0</p>
            <p>購入数: 0</p>
          </div>
        </div>
      </div>
      <Button onClick={dialog.open}>変更する</Button>
    </div>
  );
}
