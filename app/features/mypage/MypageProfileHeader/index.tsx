"use client";

import { Button } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { EditDialog } from "@/features/mypage/MypageProfileHeader/components/EditDialog";
import type { Session } from "next-auth";
import styles from "./styles.module.scss";

const BLOCK_NAME = "mypage";

/* eslint-disable @next/next/no-img-element */
export function MypageProfileHeader({ user }: { user?: Session["user"] }) {
  const editDialog = useDialog();

  return (
    <>
      <div className={styles[`${BLOCK_NAME}-container`]}>
        <div className={styles[`${BLOCK_NAME}-wrapper`]}>
          <img
            src={user?.image ?? undefined}
            className={styles[`${BLOCK_NAME}-avatar`]}
            alt=""
          />
          <div className={styles[`${BLOCK_NAME}-content`]}>
            <div className={styles[`${BLOCK_NAME}-text-wrapper`]}>
              <p className={styles[`${BLOCK_NAME}-name`]}>
                {user?.name ?? "匿名"}
              </p>
              <div className={styles[`${BLOCK_NAME}-text-wrapper`]}>
                <p className={styles[`${BLOCK_NAME}-text`]}>〇〇大学</p>
                <p className={styles[`${BLOCK_NAME}-text`]}>〇〇学部</p>
                <p className={styles[`${BLOCK_NAME}-text`]}>〇〇学科</p>
              </div>
            </div>
            <div className={styles[`${BLOCK_NAME}-text-wrapper`]}>
              <p className={styles[`${BLOCK_NAME}-text`]}>出品数: 0</p>
              <p className={styles[`${BLOCK_NAME}-text`]}>購入数: 0</p>
            </div>
          </div>
        </div>
        <Button onClick={editDialog.open}>変更する</Button>
      </div>
      <EditDialog dialog={editDialog} />
    </>
  );
}
