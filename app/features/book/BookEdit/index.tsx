"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import { FormWrapper } from "@/components/forms/FormWrapper";
import { InputText } from "@/components/forms/InputText";
import { InputTextarea } from "@/components/forms/InputTextarea";
import { Book } from "@/functions/constants/books";
import { useToast } from "@/functions/hooks/useToast";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  book: Book;
};

export const BookEdit: React.FC<Props> = ({ book }) => {
  // const router = useRouter();

  const { showToast, closeToast } = useToast();

  useEffect(() => {
    return () => closeToast();
  }, [closeToast]);

  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(String(book.price));
  const [body, setBody] = useState(book.body);

  const edit = async () => {
    const response = await fetch("/api/stripe/prices/delete", {
      method: "POST",
      body: JSON.stringify([book.id]),
    });
    const json = await response.json();
    console.log(json);
    const response2 = await fetch("/api/stripe/prices/create", {
      method: "POST",
      body: JSON.stringify({ name, price: +price }),
    });
    const json2 = await response2.json();
    // get productId, priceId
    // change db productId, priceId
    console.log(json2);
  };

  return (
    <>
      <FormWrapper>
        <InputText
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></InputText>
        <InputText
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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
          <Button onClick={edit}>Update</Button>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};
