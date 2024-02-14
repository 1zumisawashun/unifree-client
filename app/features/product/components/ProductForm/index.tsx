import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import { Panel } from "@/components/elements/Panel";
import {
  InputCheckbox,
  InputFile,
  InputFlexWrapper,
  InputRadio,
  InputText,
  InputTextarea,
  InputWrapper,
} from "@/components/forms";
import {
  categoryOptions,
  paymentMethodOptions,
  statusOptions,
} from "@/functions/constants/options";
import { formatFirstLetterUpperCase } from "@/functions/helpers/formatString";
import { useArrayState } from "@/functions/hooks/useArrayState";
import { Image } from "@/functions/models/Image";
import { UpsertProduct } from "@/functions/models/Products";
import { useState } from "react";

export const ProductForm = ({
  product,
  submit,
  href,
  domain,
  isPending,
}: {
  product: UpsertProduct;
  submit: (data: UpsertProduct) => void;
  href: string;
  domain: "create" | "edit";
  isPending: boolean;
}) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [files, setFiles] = useArrayState<File | Image>(product.files);
  const [status, setStatus] = useState(product.status);
  const [paymentMethod, setPaymentMethod] = useState(product.paymentMethod);
  const [categories, setCategories] = useArrayState<number>(product.categories);

  return (
    <Panel.Flame hasBorder>
      <Panel.GapInner>
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
          <ButtonAnchor href={href} variant="outlined">
            Cancel
          </ButtonAnchor>
          <Button
            onClick={() =>
              submit({
                name,
                price,
                description,
                files,
                status,
                paymentMethod,
                categories,
              })
            }
            loading={isPending}
          >
            {formatFirstLetterUpperCase(domain)}
          </Button>
        </ButtonWrapper>
      </Panel.GapInner>
    </Panel.Flame>
  );
};
