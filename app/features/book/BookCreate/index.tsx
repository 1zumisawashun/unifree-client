"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import {
  FormWrapper,
  InputFile,
  InputText,
  InputTextarea,
} from "@/components/forms";
import { API } from "@/functions/constants/api";
import { useState } from "react";

const url = API.createStripePrices;

export const BookCreate: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

  console.log(file);

  const create = async () => {
    const response = await fetch(url, {
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
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></InputTextarea>
      <InputFile setFile={setFile} />
      <ButtonWrapper position="end">
        <ButtonAnchor href={`/books`} variant="outlined">
          Cancel
        </ButtonAnchor>
        <Button onClick={create}>Create</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};
