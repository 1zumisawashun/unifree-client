"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import {
  FormWrapper,
  InputCheckbox,
  InputFile,
  InputFlexWrapper,
  InputRadio,
  InputText,
  InputTextarea,
  InputToggle,
  InputWrapper,
} from "@/components/forms";
import { API } from "@/functions/constants/api";
import { Book } from "@/functions/constants/books";
import {
  categoryOptions,
  paymentMethodOptions,
} from "@/functions/constants/options";
import { useArrayState } from "@/functions/hooks/useArrayState";
import { useState } from "react";

type Props = {
  book: Book;
};

const createUrl = API.createStripePrices;
const deleteUrl = API.deleteStripePrices;

export const BookEdit: React.FC<Props> = ({ book }) => {
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(String(book.price));
  const [description, setDescription] = useState(book.description);
  const [files, setFiles] = useArrayState<File | string>(
    book.images.map((image) => image.src)
  );
  const [isDisplay, setIsDisplay] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [categories, setCategories] = useArrayState<string>();

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
          isRequired
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputText
          label="Price"
          isRequired
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <InputTextarea
          label="Description"
          isRequired
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputFile
          label="Images"
          isRequired
          description="最大で4枚まで画像アップロードできます"
          state={files}
          setState={setFiles}
        />
        <InputWrapper
          id=""
          label="Display Setting"
          description="offにすると購入不可の状態になります。"
          isOptioned
        >
          <InputFlexWrapper>
            <InputToggle
              checked={isDisplay}
              onChange={(e) => setIsDisplay(e.target.checked)}
            />
          </InputFlexWrapper>
        </InputWrapper>
        <InputWrapper id="" label="Payment Method" isOptioned>
          <InputFlexWrapper direction="row">
            {paymentMethodOptions.map((option) => (
              <InputRadio
                key={option.value}
                checked={paymentMethod === option.value}
                onChange={() => setPaymentMethod(option.value)}
              >
                {option.label}
              </InputRadio>
            ))}
          </InputFlexWrapper>
        </InputWrapper>
        <InputWrapper id="" label="Categories" isOptioned>
          <InputFlexWrapper direction="column">
            {categoryOptions.map((option) => (
              <InputCheckbox
                key={option.value}
                checked={categories.includes(option.value)}
                onChange={(e) =>
                  setCategories.filter(option.value, e.target.checked)
                }
              >
                {option.label}
              </InputCheckbox>
            ))}
          </InputFlexWrapper>
        </InputWrapper>
        <ButtonWrapper position="end">
          <ButtonAnchor href={`/notes/${book.id}`} variant="outlined">
            Cancel
          </ButtonAnchor>
          <Button onClick={edit}>Update</Button>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};
