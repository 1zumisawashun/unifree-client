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
import {
  categoryOptions,
  paymentMethodOptions,
  statusOptions,
} from "@/functions/constants/options";
import { useArrayState } from "@/functions/hooks/useArrayState";
import { UpsertProduct } from "@/functions/models/Products";
import { useState } from "react";

export const ProductForm = ({
  product,
  submit,
}: {
  product: UpsertProduct;
  submit: (data: UpsertProduct) => void;
}) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [files, setFiles] = useArrayState<File | string>(product.files);
  const [status, setStatus] = useState(product.status);
  const [paymentMethod, setPaymentMethod] = useState(product.paymentMethod);
  const [isDisplay, setIsDisplay] = useState(product.isDisplay);
  const [categories, setCategories] = useArrayState<string>(product.categories);

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
        <InputWrapper
          id=""
          label="Status"
          description="販売中・入荷中・終売いずれかのステータスを選択できます"
          isRequired
        >
          <InputFlexWrapper direction="row">
            {statusOptions.map((option) => (
              <InputRadio
                key={option.value}
                checked={status === option.value}
                onChange={() => setStatus(option.value)}
              >
                {option.label}
              </InputRadio>
            ))}
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
          <Button onClick={() => submit(product)}>Update</Button>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};
