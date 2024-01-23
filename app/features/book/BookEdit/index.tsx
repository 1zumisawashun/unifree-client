"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import { FormWrapper } from "@/components/forms/FormWrapper";
import { InputText } from "@/components/forms/InputText";
import { InputTextarea } from "@/components/forms/InputTextarea";
import { Book } from "@/functions/constants/books";
import { useToast } from "@/functions/hooks/useToast";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type BookEditProps = {
  book: Book;
};

export const BookEdit: React.FC<BookEditProps> = ({ book }) => {
  // const router = useRouter();

  const { showToast, closeToast } = useToast();

  useEffect(() => {
    return () => closeToast();
  }, [closeToast]);

  const [title, setTitle] = useState(book.title);
  const [body, setBody] = useState(book.body);

  return (
    <>
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
          <Button
            onClick={() => showToast({ message: "test", theme: "success" })}
          >
            toast
          </Button>
          <ButtonAnchor href={`/notes/${book.id}`} variant="outlined">
            Cancel
          </ButtonAnchor>
          <Button onClick={() => alert("update demo")}>Save</Button>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};
