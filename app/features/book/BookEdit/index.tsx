"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import { useToast } from "@/components/elements/Toast/hooks/useToast";
import {
  FormWrapper,
  InputFile,
  InputText,
  InputTextarea,
} from "@/components/forms";
import { API } from "@/functions/constants/api";
import { Book } from "@/functions/constants/books";
import { useArrayState } from "@/functions/hooks/useArrayState";
import { useEffect, useState } from "react";

type Props = {
  book: Book;
};

const createUrl = API.createStripePrices;
const deleteUrl = API.deleteStripePrices;

export const BookEdit: React.FC<Props> = ({ book }) => {
  const { showToast, closeToast } = useToast();

  useEffect(() => {
    return () => closeToast();
  }, [closeToast]);

  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(String(book.price));
  const [description, setDescription] = useState(book.description);
  const [files, setFiles] = useArrayState<File | string>(
    book.images.map((image) => image.src)
  );

  const edit = async () => {
    console.log(files);
    const response = await fetch(deleteUrl, {
      method: "POST",
      body: JSON.stringify([book.id]),
    });
    const json = await response.json();
    console.log(json);

    const response2 = await fetch(createUrl, {
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
