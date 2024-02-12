"use client";

import { Avatar } from "@/components/elements/Avatar";
import { Nl2br } from "@/components/elements/Nl2br";
import { Messages } from "@/functions/types/Prisma";
import styles from "./styles.module.scss";

const BLOCK_NAME = "match-history";

export function MatchHistory({ messages, userId }: Messages) {
  return (
    <div>
      {messages.map((message) => (
        <div className={styles[`${BLOCK_NAME}-container`]} key={message.id}>
          <div
            className={styles[`${BLOCK_NAME}-user-thumbnail-wrapper`]}
            data-current-user={message.userId === userId}
          >
            <Avatar />
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
              {message.createdAt.toDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
