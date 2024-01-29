"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import {
  FormWrapper,
  InputFile,
  InputText,
  InputTextarea,
} from "@/components/forms";
import { API } from "@/functions/constants/api";
import { getDownloadUrl } from "@/functions/helpers/storage";
import { isString } from "@/functions/helpers/typeGuard";
import { useArrayState } from "@/functions/hooks/useArrayState";
import { useState } from "react";

const url = API.createStripePrices;

export const BookCreate: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useArrayState<File | string>();

  const create = async () => {
    if (!files) return;

    const promises = files.map(async (file) => {
      if (isString(file)) return file;
      return await getDownloadUrl({ file });
    });
    const results = (await Promise.all(promises)) as any as string[];

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, price: +price, images: results }),
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
      <InputFile
        label="Images"
        description="最大で4枚まで画像アップロードできます"
        state={files}
        setState={setFiles}
      />
      <ButtonWrapper position="end">
        <ButtonAnchor href={`/books`} variant="outlined">
          Cancel
        </ButtonAnchor>
        <Button onClick={create}>Create</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};
