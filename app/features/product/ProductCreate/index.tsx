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
import {
  categoryOptions,
  paymentMethodOptions,
} from "@/functions/constants/options";
import { getDownloadUrl } from "@/functions/helpers/firebaseStorage";
import { isString } from "@/functions/helpers/typeGuard";
import { useArrayState } from "@/functions/hooks/useArrayState";
import { useState } from "react";

const url = API.createStripePrices;

export const ProductCreate: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useArrayState<File | string>();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);
  const [categories, setCategories] = useArrayState<string>();

  const create = async () => {
    const promises = files.map(async (file) => {
      if (isString(file)) return file;
      const downloadUrl = await getDownloadUrl({ file });
      return { name: file.name, src: downloadUrl };
    });

    const images = await Promise.all(promises);
    console.log(images);

    // priceIdを取得する目的なので最適限のプロパティでok
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, price: +price }),
    });
    const json = await response.json();
    console.log(json);

    // db logic here
  };

  return (
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
        description="offにすると購入不可の状態になります"
        isRequired
      >
        <InputFlexWrapper>
          <InputToggle
            checked={isDisplay}
            onChange={(e) => setIsDisplay(e.target.checked)}
          />
        </InputFlexWrapper>
      </InputWrapper>
      <InputWrapper id="" label="Payment Method" isRequired>
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
      <InputWrapper
        id=""
        label="Categories"
        description="1つ以上を選択してください"
        isRequired
      >
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
        <ButtonAnchor href={`/products`} variant="outlined">
          Cancel
        </ButtonAnchor>
        <Button onClick={create}>Create</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};
