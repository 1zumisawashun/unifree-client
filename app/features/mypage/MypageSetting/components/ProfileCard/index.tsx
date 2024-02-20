"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Avatar } from "@/components/elements/Avatar";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Tooltip } from "@/components/elements/Tooltip";
import { User } from "@/functions/types/Prisma";
import { useRef } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "profile-card";

export function ProfileCard({
  dialog,
  user,
}: {
  dialog: UseDialog;
  user: User;
}) {
  const referenceRef = useRef<HTMLDivElement>(null);

  const { displayName, university, faculty, department } = user;

  const college = `${university ?? "〇〇大学"} ${faculty ?? "〇〇学部"} ${
    department ?? "〇〇学科"
  }`;
  const post = `出品数 : ${user.products.length}`;
  const match = `マッチ数 : ${user.matches.length}`;

  const texts = [college, post, match];

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <div className={styles[`${BLOCK_NAME}-flex-wrapper`]}>
        <Avatar id={user.id} />
        <div className={styles[`${BLOCK_NAME}-flex-column-wrapper`]}>
          <p className={styles[`${BLOCK_NAME}-name`]}>
            {displayName ?? "匿名"}
          </p>
          {texts.map((text, index) => (
            <p className={styles[`${BLOCK_NAME}-text`]} key={index}>
              {text}
            </p>
          ))}

          <p ref={referenceRef} style={{ background: "grey" }}>
            test
          </p>
          <Tooltip referenceRef={referenceRef}>
            <p>sample</p>
          </Tooltip>
        </div>
      </div>
      <ButtonWrapper
        position="end"
        className={styles[`${BLOCK_NAME}-button-wrapper`]}
      >
        <Button onClick={dialog.open} variant="outlined">
          変更する
        </Button>
      </ButtonWrapper>
    </div>
  );
}
