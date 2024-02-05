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

type Message = {
  id: number;
  text: string;
  created_by: string;
  src: string;
};

/* eslint-disable react/no-array-index-key */
export function MatchRoomHistory({ messages }: { messages: Message[] }) {
  return (
    <div>
      {messages.map((message) => (
        <div className={styles[`${BLOCK_NAME}-container`]} key={message.id}>
          <div>
            <div className={styles[`${BLOCK_NAME}-image-wrapper`]}>
              <Avatar {...avatarParams} />
            </div>
          </div>

          <p>
            <span>
              <Nl2br>{message.text}</Nl2br>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
