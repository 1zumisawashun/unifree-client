"use client";

import { MatchRoomForm } from "@/features/match/MatchDetail/components/MatchRoomForm";
import { MatchRoomHistory } from "@/features/match/MatchDetail/components/MatchRoomHistory";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "organization";

type Message = {
  id: number;
  text: string;
  created_by: string;
  src: string;
};

const _messages = [
  {
    id: 1,
    message:
      "This book provides a comprehensive introduction to programming concepts, covering topics such as algorithms, data structures, and problem-solving. Suitable for beginners and those looking to deepen their programming skills.",
    user: {
      role: "receiver",
      name: "匿名太郎",
    },
  },
  {
    id: 2,
    message:
      "Explore the key events and figures that shaped our world throughout history. From ancient civilizations to modern times, this book offers a concise yet comprehensive overview of world history.",
    user: {
      role: "receiver",
      name: "匿名太郎",
    },
  },
  {
    id: 3,
    message:
      "Delve into the mysteries of the cosmos with this introductory guide to astrophysics. From the birth of stars to the expansion of the universe, this book covers the fundamental concepts of astrophysics in an accessible manner.",
    user: {
      role: "user",
      name: "匿名太郎",
    },
  },
  {
    id: 4,
    message:
      "Unlock the power of Python for data analysis and machine learning. This book provides hands-on examples and practical tips for leveraging Python in the field of data science.Unlock the power of Python for data analysis and machine learning. This book provides hands-on examples and practical tips for leveraging Python in the field of data science.",
    user: {
      role: "receiver",
      name: "匿名太郎",
    },
  },
  {
    id: 5,
    message:
      "Explore the key events and figures that shaped our world throughout history. From ancient civilizations to modern times, this book offers a concise yet comprehensive overview of world history.",
    user: {
      role: "user",
      name: "匿名太郎",
    },
  },
];

/* eslint-disable react/no-array-index-key */
export function MatchRoom({ messages }: { messages: Message[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  console.log(messages);

  const scrollToLatest = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    scrollToLatest();
  }, []);

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
            <MatchRoomHistory messages={_messages} />
          </div>
        </div>
      </div>

      <div>
        <MatchRoomForm submit={submit} />
      </div>
    </main>
  );
}
