"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import { FormWrapper } from "@/components/forms/FormWrapper";
import { InputText } from "@/components/forms/InputText";
import { InputTextarea } from "@/components/forms/InputTextarea";
// import { useRouter } from "next/navigation";
import { useState } from "react";

export const BookCreate: React.FC = () => {
  // const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <FormWrapper>
      <InputText
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></InputText>
      <InputTextarea
        label="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></InputTextarea>
      <ButtonWrapper position="end">
        <ButtonAnchor href={`/books`} variant="outlined">
          Cancel
        </ButtonAnchor>
        <Button onClick={() => alert("create demo")}>Create</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};
