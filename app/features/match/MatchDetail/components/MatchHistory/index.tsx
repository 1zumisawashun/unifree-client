"use client";

import { Avatar } from "@/components/elements/Avatar";
import { Nl2br } from "@/components/elements/Nl2br";
import { Messages } from "@/functions/types/Prisma";
import styles from "./styles.module.scss";

const BLOCK_NAME = "chat-history";

/* eslint-disable react/no-array-index-key */
export function MatchHistory({ messages, userId }: Messages) {
  return (
    <div>
      {messages.map((message, index) => (
        <div className={styles[`${BLOCK_NAME}-container`]} key={index}>
          <div
            className={styles[`${BLOCK_NAME}-user-thumbnail-wrapper`]}
            data-current-user={message.userId === userId}
          >
            <Avatar src={message.user.photoURL!} />
          </div>
          <div
            className={styles[`${BLOCK_NAME}-content-wrapper`]}
            data-current-user={message.userId === userId}
          >
            <p className={styles[`${BLOCK_NAME}-text`]}>
              {message.user.displayName ?? "匿名"}
            </p>
            <div
              className={styles[`${BLOCK_NAME}-message-wrapper`]}
              data-current-user={message.userId === userId}
            >
              <p className={styles[`${BLOCK_NAME}-message`]}>
                <Nl2br>{message.message}</Nl2br>
              </p>
            </div>
            <p className={styles[`${BLOCK_NAME}-text`]}>
              {message.createdAt.toISOString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
