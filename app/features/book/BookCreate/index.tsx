"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import { FormWrapper } from "@/components/forms/FormWrapper";
import { InputText } from "@/components/forms/InputText";
import { InputTextarea } from "@/components/forms/InputTextarea";
// import { useRouter } from "next/navigation";
import { useState } from "react";

export const BookCreate: React.FC = () => {
  // const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [body, setBody] = useState("");

  const create = async () => {
    const response = await fetch("/api/stripe/prices/create", {
      method: "POST",
      body: JSON.stringify({ name, price: +price }),
    });
    const json = await response.json();
    // get productId, priceId
    // change db productId, priceId
    console.log(json);
  };

  return (
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
        <ButtonAnchor href={`/books`} variant="outlined">
          Cancel
        </ButtonAnchor>
        <Button onClick={create}>Create</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};
