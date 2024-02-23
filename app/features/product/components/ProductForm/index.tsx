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
import { UpsertProduct } from "@/features/product/product.model";
import {
  categoryOptions,
  paymentMethodOptions,
  statusOptions,
} from "@/functions/constants/options";
import { isSp } from "@/functions/helpers/formatBoolean";
import { useArrayState } from "@/functions/hooks/useArrayState";
import { Image } from "@/functions/types/Prisma";
import { useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "product-form";

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
  domain: "作成する" | "変更する";
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
      <div className={styles[`${BLOCK_NAME}-container`]}>
        <Panel.Inner>
          <InputText
            label="商品名"
            isRequired
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputText
            label="価格"
            isRequired
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <InputTextarea
            label="詳細情報"
            isRequired
            description="商品の詳細情報を入力してください"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputFile
            label="画像"
            isRequired
            description="最大で4枚まで画像アップロードできます"
            state={files}
            setState={setFiles}
          />
          <InputWrapper
            id=""
            label="ステータス"
            description="商品一覧の表示を変えることができます"
            isRequired
          >
            <InputFlexWrapper direction={isSp() ? "column" : "row"}>
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
          <InputWrapper id="" label="支払い方法" isRequired>
            <InputFlexWrapper direction={isSp() ? "column" : "row"}>
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
            label="カテゴリー"
            description="1つ以上を選択してください"
            isRequired
          >
            <InputFlexWrapper direction="column">
              {categoryOptions.map((option) => (
                <InputCheckbox
                  key={option.value}
                  checked={categories.includes(option.value)}
                  onChange={(e) => {
                    e.target.checked
                      ? setCategories.add(option.value)
                      : setCategories.remove(option.value);
                  }}
                >
                  {option.label}
                </InputCheckbox>
              ))}
            </InputFlexWrapper>
          </InputWrapper>
          <ButtonWrapper position="end">
            <ButtonAnchor href={href} variant="outlined">
              キャンセル
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
              {domain}
            </Button>
          </ButtonWrapper>
        </Panel.Inner>
      </div>
    </Panel.Flame>
  );
};
