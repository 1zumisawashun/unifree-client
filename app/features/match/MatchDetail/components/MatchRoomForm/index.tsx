import { UnstyledButton } from "@/components/buttons/UnstyledButton";
import { SendIcon } from "@/components/elements/SvgIcon";
import { useAutoResize } from "@/components/forms/InputTextarea/hooks/useAutoResize";
import { useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "chat-form";

export function MatchRoomForm({ submit }: { submit: (text: string) => void }) {
  const [text, setText] = useState("");

  const textAreaRef = useAutoResize(text);

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <div className={styles[`${BLOCK_NAME}-wrapper`]}>
        <textarea
          className={styles[`${BLOCK_NAME}-textarea`]}
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={textAreaRef}
          rows={1}
        />
        <UnstyledButton
          onClick={() => submit(text)}
          className={styles[`${BLOCK_NAME}-submit-button`]}
        >
          <SendIcon fontSize="1rem" />
        </UnstyledButton>
      </div>
    </div>
  );
}
