"use client";

import {
  Button,
  ButtonAnchor,
  ButtonWrapper,
  UnstyledButtonAnchor,
} from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Label } from "@/components/elements/Label";
import { DeleteDialog } from "@/features/product/ProductDetail/components/DeleteDialog";
import { Product } from "@/functions/models/Products";
import { formatCurrencyString } from "@/functions/helpers/formatNumber";
import styles from "./styles.module.scss";

const BLOCK_NAME = "product-detail";

/* eslint-disable @next/next/no-img-element */
export const ProductDetail = ({ product }: { product: Product }) => {
  const { id, name, categories, description, images, price } = product;

  const deleteDialog = useDialog();

  return (
    <>
      <div className={styles[`${BLOCK_NAME}-container`]}>
        <img
          className={styles[`${BLOCK_NAME}-image`]}
          src={images[0]?.src}
          alt=""
        />
        <h3 className={styles[`${BLOCK_NAME}-title`]}>{name}</h3>

        {categories ? (
          <ButtonWrapper>
            {categories.map((category) => (
              <UnstyledButtonAnchor
                key={category.id}
                href={`/products?category=${category.name}`}
              >
                <Label>{category.name}</Label>
              </UnstyledButtonAnchor>
            ))}
          </ButtonWrapper>
        ) : null}

        <p className={styles[`${BLOCK_NAME}-price`]}>
          {formatCurrencyString(price)}
        </p>

        <p className={styles[`${BLOCK_NAME}-text`]}>{description}</p>

        <ButtonWrapper position="end">
          <Button onClick={deleteDialog.open} variant="outlined" theme="danger">
            Delete
          </Button>
          <ButtonAnchor href={`/products/${id}/edit`} variant="outlined">
            Edit
          </ButtonAnchor>
        </ButtonWrapper>
      </div>

      <DeleteDialog dialog={deleteDialog} product={product} />
    </>
  );
};
