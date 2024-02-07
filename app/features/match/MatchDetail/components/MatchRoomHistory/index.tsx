"use client";

import cover from "@/assets/images/image_cover.jpg";
import { Avatar } from "@/components/elements/Avatar";
import { Nl2br } from "@/components/elements/Nl2br";
import styles from "./styles.module.scss";

const BLOCK_NAME = "chat-history";

const avatarParams = {
  src: cover,
  alt: "",
  blurredDataUrl: undefined,
  width: undefined,
  height: undefined,
};

/* eslint-disable react/no-array-index-key */
export function MatchRoomHistory({ messages }: { messages: any[] }) {
  return (
    <div>
      {messages.map((message) => (
        <div className={styles[`${BLOCK_NAME}-container`]} key={message.id}>
          <div
            className={styles[`${BLOCK_NAME}-user-thumbnail-wrapper`]}
            data-role={message.user.role}
          >
            <Avatar {...avatarParams} />
          </div>
          <div
            className={styles[`${BLOCK_NAME}-content-wrapper`]}
            data-role={message.user.role}
          >
            <p className={styles[`${BLOCK_NAME}-text`]}>匿名太郎</p>
            <div
              className={styles[`${BLOCK_NAME}-message-wrapper`]}
              data-role={message.user.role}
            >
              <p className={styles[`${BLOCK_NAME}-message`]}>
                <Nl2br>{message.message}</Nl2br>
              </p>
            </div>
            <p className={styles[`${BLOCK_NAME}-text`]}>2024/02/06</p>
          </div>
        </div>
      ))}
    </div>
  );
}
