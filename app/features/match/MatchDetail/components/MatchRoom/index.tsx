"use client";

import { MatchRoomForm } from "@/features/match/MatchDetail/components/MatchRoomForm";
import { MatchRoomHistory } from "@/features/match/MatchDetail/components/MatchRoomHistory";
import { useRef } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "organization";

type Message = {
  id: number;
  text: string;
  created_by: string;
  src: string;
};

/* eslint-disable react/no-array-index-key */
export function MatchRoom({ messages }: { messages: Message[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // @ts-ignore
  const scrollToLatest = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
    }
  };

  const submit = async (text: string) => {
    console.log(text);
  };

  return (
    <main className={styles[`${BLOCK_NAME}-container`]}>
      <div className={styles[`${BLOCK_NAME}-section`]}>
        <div
          className={styles[`${BLOCK_NAME}-scrollable-content`]}
          ref={scrollRef}
        >
          <div className={styles[`${BLOCK_NAME}-scrollable-inner`]}>
            <MatchRoomHistory messages={messages} />
          </div>
        </div>
      </div>

      <div>
        <MatchRoomForm submit={submit} />
      </div>
    </main>
  );
}
